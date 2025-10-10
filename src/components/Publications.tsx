'use client'

import React, { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  formatPostDate,
  getPostExcerpt,
  fetchFeaturedPublications,
  fetchRecentPublications,
  type PostOrPage,
  type Tag
} from '@/lib/ghost-client'
import { BACKGROUND_GRADIENTS, BRAND_COLORS } from '@/lib/constants'

// Constants
const POSTS_LIMIT = 3
const ERROR_MESSAGE = 'Error While fetching posts'

const deriveViewAllUrl = (items: PostOrPage[]): string | null => {
  if (items.length === 0) {
    return null
  }

  const firstUrl = items[0]?.url
  if (!firstUrl) {
    return null
  }

  try {
    const { origin } = new URL(firstUrl)
    return origin
  } catch {
    return firstUrl
  }
}

/**
 * Publications component that displays latest Ghost CMS posts
 * Supports featured posts, recent posts, and mixed display modes
 */
const Publications = () => {
  // Component state
  const [posts, setPosts] = useState<PostOrPage[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [showingFeatured, setShowingFeatured] = useState(true)
  const [showingMixed, setShowingMixed] = useState(false)

  /**
   * Merges recent and featured posts while avoiding duplicates
   * Priority: Most recent post → Featured posts → Remaining recent posts
   */
  const mergeAndDeduplicatePosts = (recentPosts: PostOrPage[], featuredPosts: PostOrPage[], limit: number) => {
    const usedIds = new Set<string>()
    const result: PostOrPage[] = []

    // Helper to add unique posts up to limit
    const addUnique = (posts: PostOrPage[]) => {
      posts.forEach(post => {
        if (!usedIds.has(post.id) && result.length < limit) {
          result.push(post)
          usedIds.add(post.id)
        }
      })
    }

    // Add most recent post first, then featured posts, then remaining recent posts
    addUnique(recentPosts.slice(0, 1))
    addUnique(featuredPosts)
    addUnique(recentPosts.slice(1))

    return result
  }

  /**
   * Fetches posts from Ghost CMS via the internal API to keep credentials server-side
   * Implements fallback strategies: featured posts → mixed content → recent posts only
   * HTTP-level retries are handled by ofetch in ghost-client.ts
   */
  const fetchPosts = useCallback(async () => {
    try {
      setLoading(true)
      setError(null)

      const [featuredResponse, recentResponse] = await Promise.all([
        fetchFeaturedPublications(POSTS_LIMIT),
        fetchRecentPublications(POSTS_LIMIT * 2)
      ])

      const featuredPosts = featuredResponse?.posts ?? []
      const recentPosts = recentResponse?.posts ?? []

      // Check if we have any successful responses
      const hasFeaturedSuccess = featuredResponse && !featuredResponse.error
      const hasRecentSuccess = recentResponse && !recentResponse.error

      if (featuredResponse?.error) {
        console.warn('Featured publications returned fallback:', featuredResponse.error)
      }

      if (recentResponse?.error) {
        console.warn('Recent publications returned fallback:', recentResponse.error)
      }

      // Determine content display strategy based on availability and success
      if (featuredPosts.length >= POSTS_LIMIT && hasFeaturedSuccess) {
        // Sufficient featured posts - show featured only
        setPosts(featuredPosts.slice(0, POSTS_LIMIT))
        setShowingFeatured(true)
        setShowingMixed(false)
      } else if (featuredPosts.length > 0 && hasFeaturedSuccess) {
        // Some featured posts - mix with recent
        const mergedPosts = mergeAndDeduplicatePosts(recentPosts, featuredPosts, POSTS_LIMIT)
        setPosts(mergedPosts)
        setShowingFeatured(false)
        setShowingMixed(true)
      } else if (recentPosts.length > 0 && hasRecentSuccess) {
        // No featured posts - show recent only
        setPosts(recentPosts.slice(0, POSTS_LIMIT))
        setShowingFeatured(false)
        setShowingMixed(false)
      } else {
        // No successful posts available
        const fallbackMessage =
          featuredResponse?.error ||
          recentResponse?.error ||
          (!featuredResponse && !recentResponse ? 'Unable to reach publications.' : ERROR_MESSAGE)

        setError(fallbackMessage)
        return
      }
    } catch (err) {
      console.error('Error fetching posts:', err)
      setError(ERROR_MESSAGE)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchPosts()
  }, [fetchPosts])

  /**
   * Manual retry function for users
   */
  const handleRetry = () => {
    fetchPosts()
  }

  /**
   * Renders the section header with title and subtitle
   */
  const renderSectionHeader = () => (
    <>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">Insights</h2>
      <p className="text-lg text-gray-300 max-w-4xl mb-8">
        Latest updates with featured consulting insights, technology trends, and industry best practices.
      </p>
    </>
  )

  /**
   * Renders loading skeleton cards while posts are being fetched
   */
  const renderLoadingState = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[...Array(POSTS_LIMIT)].map((_, i) => (
        <div key={i} className="bg-white border border-gray-200 rounded-lg shadow-md h-full overflow-hidden animate-pulse flex flex-col">
          {/* Image skeleton */}
          <div className="h-48 bg-gray-200"></div>

          {/* Header skeleton */}
          <div className="p-6">
            <div className="flex items-center justify-between mb-3">
              <div className="h-4 bg-gray-200 rounded w-20"></div>
              <div className="h-4 bg-gray-200 rounded w-16"></div>
            </div>
            <div className="h-6 bg-gray-200 rounded w-3/4 mb-3"></div>
            <div className="space-y-2 mb-4">
              <div className="h-3 bg-gray-200 rounded"></div>
              <div className="h-3 bg-gray-200 rounded w-5/6"></div>
              <div className="h-3 bg-gray-200 rounded w-4/6"></div>
            </div>
            <div className="flex gap-2 mb-4">
              <div className="h-5 bg-gray-200 rounded-full w-16"></div>
              <div className="h-5 bg-gray-200 rounded-full w-20"></div>
            </div>
            <div className="w-full h-10 bg-gray-200 rounded"></div>
          </div>
        </div>
      ))}
    </div>
  )

  /**
   * Renders empty state with custom message and subtitle
   */
  const renderEmptyState = (message: string, subtitle: string) => (
    <div className="text-center py-12">
      <p className="text-gray-300 mb-4">{message}</p>
      <p className="text-sm text-gray-400">{subtitle}</p>
    </div>
  )

  if (loading) {
    return (
      <section className={`py-16 ${BACKGROUND_GRADIENTS.section} relative overflow-hidden`}>
        {/* Background overlays for depth */}
        <div className={BACKGROUND_GRADIENTS.radial.primary}></div>
        <div className={BACKGROUND_GRADIENTS.radial.secondary}></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {renderSectionHeader()}
          {renderLoadingState()}
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section className={`py-16 ${BACKGROUND_GRADIENTS.section} relative overflow-hidden`}>
        {/* Background overlays for depth */}
        <div className={BACKGROUND_GRADIENTS.radial.primary}></div>
        <div className={BACKGROUND_GRADIENTS.radial.secondary}></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {renderSectionHeader()}
          <div className="text-center py-12">
            <p className="text-gray-300 mb-4">{error}</p>
            <p className="text-sm text-gray-400 mb-6">
              {error.includes('Ghost API') ? 'The Ghost CMS service may be temporarily unavailable. Please try again.' : 'Please try again.'}
            </p>
            <button
              onClick={handleRetry}
              className="inline-flex items-center px-4 py-2 border border-gray-600 rounded-lg text-sm font-medium text-gray-200 bg-gray-800 hover:bg-gray-700 transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      </section>
    )
  }

  if (posts.length === 0) {
    return (
      <section className={`py-16 ${BACKGROUND_GRADIENTS.section} relative overflow-hidden`}>
        {/* Background overlays for depth */}
        <div className={BACKGROUND_GRADIENTS.radial.primary}></div>
        <div className={BACKGROUND_GRADIENTS.radial.secondary}></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {renderSectionHeader()}
          {renderEmptyState('No publications yet.', 'Check back soon for the latest insights and updates.')}
        </div>
      </section>
    )
  }

  const renderPostCard = (post: PostOrPage) => (
    <div
      key={post.id}
      className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-lg shadow-lg hover:shadow-xl hover:border-gray-600/50 transition-all duration-300 h-full overflow-hidden flex flex-col hover:-translate-y-1"
    >
      {/* Feature Image or Placeholder */}
      <div className="relative h-48 overflow-hidden">
        {post.feature_image ? (
          <Image
            src={post.feature_image}
            alt={post.title || 'Publication'}
            fill
            className="object-cover"
            onError={() => {
              // Show placeholder if image fails to load
              const placeholderDiv = document.querySelector(`[data-placeholder="${post.id}"]`) as HTMLElement;
              if (placeholderDiv) {
                placeholderDiv.style.display = 'flex';
              }
            }}
          />
        ) : null}

        {/* Placeholder for posts without feature image or failed loads */}
        <div
          data-placeholder={post.id}
          className={`absolute inset-0 bg-gray-100 flex items-center justify-center ${
            post.feature_image ? 'hidden' : 'flex'
          }`}
        >
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-gray-200 flex items-center justify-center">
              <svg
                className="w-6 h-6 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">
              Publication
            </p>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className={`text-xs font-medium text-[${BRAND_COLORS.primary}] bg-[${BRAND_COLORS.primary}]/10 px-2 py-1 rounded`}>
            {post.published_at ? formatPostDate(post.published_at) : 'No date'}
          </span>
          {post.reading_time && (
            <span className="text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded">
              {post.reading_time} min read
            </span>
          )}
        </div>
        <h3 className="text-lg font-semibold text-white mb-3 line-clamp-2">
          {post.title || 'Untitled'}
        </h3>

        {/* Content */}
        <p className="text-sm text-gray-300 mb-4 line-clamp-3">
          {getPostExcerpt(post, 120)}
        </p>

        {/* Post Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.slice(0, 3).map((tag: Tag) => (
              <span
                key={tag.id}
                className={`text-xs bg-[${BRAND_COLORS.primary}]/10 text-[${BRAND_COLORS.primary}] px-2 py-1 rounded`}
              >
                {tag.name}
              </span>
            ))}
          </div>
        )}

        {/* Footer */}
        <Link
          href={post.url || '#'}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center justify-center w-full px-4 py-2 bg-gradient-to-r ${BRAND_COLORS.gradient.primary} hover:from-[${BRAND_COLORS.primaryLight}] hover:to-[${BRAND_COLORS.primary}] text-white text-sm font-medium rounded transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[${BRAND_COLORS.primary}]/30 hover:-translate-y-0.5`}
        >
          Read article →
        </Link>
      </div>
    </div>
  )

  /**
   * Renders "View more" link when posts limit is reached
   */
  const renderViewAllLink = () => {
    if (posts.length < POSTS_LIMIT) {
      return null
    }

    const href = deriveViewAllUrl(posts)
    if (!href) {
      return null
    }

    return (
      <div className="text-center mt-8">
        <Link
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center px-6 py-3 border border-gray-600 rounded-lg text-sm font-medium text-gray-200 bg-gray-800 hover:bg-gray-700 hover:border-[${BRAND_COLORS.primary}]/50 transition-all duration-300 hover:-translate-y-1`}
        >
          {showingFeatured || showingMixed ? 'View more publications' : 'View all publications'} →
        </Link>
      </div>
    )
  }

  return (
    <section id="insights" className={`py-16 ${BACKGROUND_GRADIENTS.section} relative overflow-hidden`}>
      {/* Background overlays for depth */}
      <div className={BACKGROUND_GRADIENTS.radial.primary}></div>
      <div className={BACKGROUND_GRADIENTS.radial.secondary}></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {renderSectionHeader()}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map(renderPostCard)}
        </div>
        {renderViewAllLink()}
      </div>
    </section>
  )
}

export default Publications
