import 'server-only'

export const token = process.env.SANITY_API_READ_TOKEN

export function assertToken(): string {
  if (!token) {
    throw new Error(
      'Missing environment variable: SANITY_API_READ_TOKEN. A Viewer token is required for server-side dataset queries.'
    )
  }
  return token
}
