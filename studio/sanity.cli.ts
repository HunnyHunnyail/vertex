import { defineCliConfig } from 'sanity/cli'

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }
  return v
}

const projectId = assertValue(
  process.env.SANITY_STUDIO_PROJECT_ID,
  'Missing environment variable: SANITY_STUDIO_PROJECT_ID'
)
const dataset = assertValue(
  process.env.SANITY_STUDIO_DATASET,
  'Missing environment variable: SANITY_STUDIO_DATASET'
)

export default defineCliConfig({
  api: {
    projectId,
    dataset,
  },
  typegen: {
    path: '../{app,components,sanity,lib}/**/*.{ts,tsx}',
    generates: '../sanity.types.ts',
    overloadClientMethods: true,
  },
})
