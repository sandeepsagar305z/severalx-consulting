import { NextRequest, NextResponse } from 'next/server'
import {
  fetchFeaturedPublications,
  fetchRecentPublications,
  fetchCaseStudies,
  GhostAPIError
} from '@/lib/ghost'

const COLLECTIONS = {
  featured: fetchFeaturedPublications,
  recent: fetchRecentPublications,
  'case-studies': fetchCaseStudies
} as const

type CollectionName = keyof typeof COLLECTIONS

const isValidCollection = (value: string | null): value is CollectionName => {
  return value !== null && value in COLLECTIONS
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const collection = searchParams.get('collection')
  const limitParam = searchParams.get('limit')
  const limit = limitParam ? Number(limitParam) : undefined

  if (!isValidCollection(collection)) {
    return NextResponse.json(
      { error: 'Invalid collection. Valid: featured, recent, case-studies' },
      { status: 400 }
    )
  }

  try {
    const data = await COLLECTIONS[collection](limit)
    return NextResponse.json(data)
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error'

    if (error instanceof GhostAPIError) {
      console.warn(`Ghost API error (${error.status}) for collection:${collection}`)
      return NextResponse.json(
        {
          posts: [],
          meta: { pagination: { page: 1, limit: limit ?? 6, pages: 0, total: 0 } },
          error: message
        },
        { status: error.status >= 500 ? 503 : 502 }
      )
    }

    const status = message.includes('not configured') ? 503 : 502
    console.error('Failed to fetch Ghost posts:', error)
    return NextResponse.json(
      {
        posts: [],
        meta: { pagination: { page: 1, limit: limit ?? 6, pages: 0, total: 0 } },
        error: message
      },
      { status }
    )
  }
}
