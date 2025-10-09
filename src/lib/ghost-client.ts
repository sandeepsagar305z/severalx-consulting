import { ofetch } from 'ofetch'
import type { PostOrPage } from '@tryghost/content-api'

// Re-export types (for client components)
export type { PostOrPage, Tag, Pagination } from '@tryghost/content-api'

export interface GhostPostsResponse {
  posts: PostOrPage[]
  meta: {
    pagination: {
      page: number
      limit: number
      pages: number
      total: number
      next?: number | null
      prev?: number | null
    }
  }
  error?: string
}

// Same retry status codes as server-side
const RETRY_STATUS_CODES = [408, 425, 429, 500, 502, 503, 504]

// Private: Internal API bridge (implementation detail - not exported)
const api = async (collection: string, limit?: number): Promise<GhostPostsResponse | null> => {
  try {
    const params = new URLSearchParams({ collection })
    if (limit) params.set('limit', limit.toString())

    return await ofetch<GhostPostsResponse>(`/api/publications?${params}`, {
      headers: { Accept: 'application/json' },
      cache: 'no-store',
      retry: 3,                    // Same retry count as server
      retryDelay: 1000,            // Same delay as server
      retryStatusCodes: RETRY_STATUS_CODES, // Same status codes
      timeout: 10000,              // 10s timeout (more tolerant than server)
      onResponseError({ response }) {
        throw new Error(`HTTP ${response.status}`)
      }
    })
  } catch (error) {
    console.error(`Failed to fetch collection "${collection}"`, error)
    return null
  }
}

// Public API: Clean function calls (no URL/implementation knowledge)
export const fetchFeaturedPublications = (limit?: number) => api('featured', limit)
export const fetchRecentPublications = (limit?: number) => api('recent', limit)
export const fetchCaseStudyPublications = (limit?: number) => api('case-studies', limit)

// Utilities (can run on client or server)
export const formatPostDate = (dateString: string): string => {
  try {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  } catch {
    return dateString
  }
}

export const getPostExcerpt = (post: PostOrPage, maxLength = 150): string => {
  if (post.custom_excerpt) return post.custom_excerpt

  if (post.excerpt) {
    return post.excerpt.length > maxLength
      ? post.excerpt.substring(0, maxLength).trim() + '...'
      : post.excerpt
  }

  const plainText = post.plaintext || ''
  return plainText.length > maxLength
    ? plainText.substring(0, maxLength).trim() + '...'
    : plainText
}
