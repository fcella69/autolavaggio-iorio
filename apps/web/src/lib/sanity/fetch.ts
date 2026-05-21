import { sanityClient } from "./client";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;

export const isSanityConfigured = Boolean(projectId && projectId !== "your-project-id");

export async function sanityFetch<T>(
  query: string,
  params: Record<string, unknown> = {}
): Promise<T | null> {
  if (!isSanityConfigured) {
    return null;
  }

  try {
    return await sanityClient.fetch<T>(query, params, {
      next: { revalidate: 60 }
    });
  } catch (error) {
    console.warn("Sanity fetch failed:", error);
    return null;
  }
}