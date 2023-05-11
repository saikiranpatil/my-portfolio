import SanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = new SanityClient({
  projectId: import.meta.env.VITE_APP_PROJECT_ID,
  dataset: "production",
  apiVersion: "2023-01-01",
  token: import.meta.env.VITE_APP_SANITY_TOKEN,
  ignoreBrowserTokenWarning: true,
  useCdn: true, 
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
