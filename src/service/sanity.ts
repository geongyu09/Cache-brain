import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "your-project-id",
  dataset: "your-dataset-name",
  useCdn: true,
  apiVersion: "2023-05-03",
  token: process.env.SANITY_SECRET_TOKEN,
});

export async function getPosts() {
  const posts = await client.fetch('*[_type == "post"]');
  return posts;
}

export async function createPost(post: Post) {
  const result = client.create(post);
  return result;
}

export async function updateDocumentTitle(_id, title) {
  const result = client.patch(_id).set({ title });
  return result;
}
