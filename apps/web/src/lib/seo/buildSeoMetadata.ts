import type { Metadata } from "next";

type SeoInput = {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
};

export function buildSeoMetadata({ title, description, path = "/", image }: SeoInput): Metadata {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const resolvedTitle = title || "Autolavaggio Iorio | Autolavaggio a mano a Napoli";
  const resolvedDescription =
    description || "Autolavaggio a mano a Napoli per auto, furgoni e mezzi industriali.";

  return {
    title: resolvedTitle,
    description: resolvedDescription,
    alternates: {
      canonical: `${siteUrl}${path}`
    },
    openGraph: {
      title: resolvedTitle,
      description: resolvedDescription,
      url: `${siteUrl}${path}`,
      images: image ? [{ url: image }] : undefined
    }
  };
}
