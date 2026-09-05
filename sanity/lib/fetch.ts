import 'server-only'
import type { QueryParams } from 'next-sanity'
import { client } from './client'

export async function sanityFetch<T>({
  query,
  params = {},
  tags,
  revalidate = 3600,
}: {
  query: string
  params?: QueryParams
  tags?: string[]
  revalidate?: number | false
}): Promise<T> {
  const nextOptions =
    tags && tags.length > 0 ? { tags, revalidate: false as const } : { revalidate }

  return client.fetch<T>(query, params, {
    next: nextOptions,
  })
}
