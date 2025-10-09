import 'server-only'
import { ofetch } from 'ofetch'
import type { PostOrPage, Pagination } from '@tryghost/content-api'

// Re-export official Ghost types
export type { PostOrPage, Pagination } from '@tryghost/content-api'

// Response type for our API
export interface GhostPostsResponse {
  posts: PostOrPage[]
  meta: { pagination: Pagination }
}

// Collection configurations
const COLLECTIONS = {
  featured: {
    limit: 3,
    filter: 'status:published+featured:true',
    include: ['tags', 'authors']
  },
  recent: {
    limit: 6,
    filter: 'status:published',
    include: ['tags', 'authors']
  },
  'case-studies': {
    limit: 10,
    filter: 'status:published+tag:case-study',
    include: ['tags', 'authors']
  }
} as const

const RETRY_STATUS_CODES = [408, 425, 429, 500, 502, 503, 504]

// Error class
export class GhostAPIError extends Error {
  constructor(message: string, public status: number) {
    super(message)
    this.name = 'GhostAPIError'
  }
}

// Credentials resolver
const getCredentials = () => {
  const url = process.env.GHOST_CONTENT_API_URL
  const key = process.env.GHOST_CONTENT_API_KEY

  if (!url || !key) {
    throw new GhostAPIError('Ghost API credentials not configured', 500)
  }

  return { url, key }
}

// Core fetch function
const ghostFetch = async (
  filter: string,
  limit: number,
  include: readonly string[]
): Promise<GhostPostsResponse> => {
  const { url, key } = getCredentials()
  const endpoint = new URL('/ghost/api/content/posts/', url)

  try {
    return await ofetch<GhostPostsResponse>(endpoint.toString(), {
      query: {
        key,
        filter,
        limit: limit.toString(),
        include: include.join(',')
      },
      headers: { Accept: 'application/json' },
      cache: 'no-store',
      retry: 3,
      retryDelay: 1000,
      retryStatusCodes: RETRY_STATUS_CODES,
      timeout: 5000,
      onResponseError({ response }) {
        throw new GhostAPIError(`Ghost API error: ${response.status}`, response.status)
      }
    })
  } catch (error) {
    if (error instanceof GhostAPIError) throw error

    const err = error as unknown as { status?: number; response?: { status?: number }; data?: { errors?: { message?: string }[] }; message?: string }
    const status = err?.status ?? err?.response?.status ?? 502
    const reason = err?.data?.errors?.[0]?.message ?? err?.message ?? 'Unknown error'

    throw new GhostAPIError(`Ghost API request failed - ${reason}`, status)
  }
}

// Public API: Collection fetchers
export const fetchFeaturedPublications = async (limit?: number) => {
  const config = COLLECTIONS.featured
  return ghostFetch(config.filter, limit ?? config.limit, config.include)
}

export const fetchRecentPublications = async (limit?: number) => {
  const config = COLLECTIONS.recent
  return ghostFetch(config.filter, limit ?? config.limit, config.include)
}

export const fetchCaseStudies = async (limit?: number) => {
  const config = COLLECTIONS['case-studies']
  return ghostFetch(config.filter, limit ?? config.limit, config.include)
}
