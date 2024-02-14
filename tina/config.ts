import { defineConfig } from "tinacms";
import { schema } from "./schema";


const branch =
  process.env.NEXT_PUBLIC_TINA_BRANCH ||
  process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  ''

const token = process.env.TINA_TOKEN;
const clientId = process.env.NEXT_PUBLIC_TINA_CLIENT_ID;
const indexerToken = process.env.TINA_INDEXER_TOKEN;


export default defineConfig({
  branch,
  token,
  clientId,
  build: {
    publicFolder: "public", // The public asset folder for your framework
    outputFolder: "admin", // within the public folder
  },
  schema,
  search: {
    tina: {
      indexerToken,
      stopwordLanguages: ['eng'],
    },
    indexBatchSize: 100,
    maxSearchIndexFieldLength: 100,
  },
  media: {

    // function that loads  the media store
    // @ts-ignore
    loadCustomStore: async () => {
      const pack = await import("next-tinacms-cloudinary");
      return pack.TinaCloudCloudinaryMediaStore;
    },
  },
});


