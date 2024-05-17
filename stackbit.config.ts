import { ContentfulContentSource } from '@stackbit/cms-contentful'

export default {
    stackbitVersion: "~0.6.0",
  contentSources: [
    new ContentfulContentSource({
      spaceId: process.env.CONTENTFUL_SPACE_ID,
      environment: process.env.CONTENTFUL_ENVIRONMENT,
      previewToken: process.env.CONTENTFUL_PREVIEW_TOKEN,
      accessToken: process.env.CONTENTFUL_MANAGEMENT_TOKEN,
    }),
  ],
  modelExtensions: {
    // page definitions, field extensions, etc ...
  },
}