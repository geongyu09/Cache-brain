import { createClient } from "@sanity/client";
console.log();

export const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  useCdn: true,
  apiVersion: "2023-09-07",
  token: process.env.SANITY_SECRET_TOKEN,
});
