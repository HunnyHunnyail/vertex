import { defineCliConfig } from 'sanity/cli'

const projectId =
  process.env.SANITY_STUDIO_PROJECT_ID ||
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ||
  'om6fpf93'

const dataset =
  process.env.SANITY_STUDIO_DATASET ||
  process.env.NEXT_PUBLIC_SANITY_DATASET ||
  'production'

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
