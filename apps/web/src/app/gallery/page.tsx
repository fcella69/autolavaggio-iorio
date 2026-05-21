import type { Metadata } from "next";
import { GalleryCta } from "@/components/sections/gallery/GalleryCta/GalleryCta";
import { GalleryGrid } from "@/components/sections/gallery/GalleryGrid/GalleryGrid";
import { GalleryHero } from "@/components/sections/gallery/GalleryHero/GalleryHero";
import { GalleryVideo } from "@/components/sections/gallery/GalleryVideo/GalleryVideo";
import { sanityFetch } from "@/lib/sanity/fetch";
import { galleryPageQuery } from "@/lib/sanity/queries";
import styles from "./GalleryPage.module.css";

type SeoData = {
  title?: string;
  description?: string;
  keywords?: string[];
  canonicalPath?: string;
  noIndex?: boolean;
  imageUrl?: string;
};

type CtaData = {
  label?: string;
  href?: string;
  text?: string;
};

export type GalleryPageData = {
  seo?: SeoData;
  hero?: {
    eyebrow?: string;
    title?: string;
    text?: string;
    primaryCta?: CtaData;
    secondaryCta?: CtaData;
  };
  intro?: {
    eyebrow?: string;
    title?: string;
    text?: string;
  };
  gallery?: {
    images?: Array<{
      imageUrl?: string;
      alt?: string;
      caption?: string;
    }>;
  };
  videoSection?: {
    eyebrow?: string;
    title?: string;
    text?: string;
    youtubeUrl?: string;
    videoTitle?: string;
  };
  finalCta?: {
    eyebrow?: string;
    title?: string;
    text?: string;
    primaryCta?: CtaData;
    secondaryCta?: CtaData;
  };
};

const defaultSeo = {
  title: "Gallery Autolavaggio Iorio | Lavaggio auto a Napoli Nord",
  description:
    "Guarda la gallery di Autolavaggio Iorio a Napoli Nord: immagini e video dei servizi di lavaggio auto a mano, furgoni, camion e mezzi industriali."
};

function absoluteUrl(path = "/gallery") {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  return new URL(path, siteUrl).toString();
}

export async function generateMetadata(): Promise<Metadata> {
  const data = await sanityFetch<GalleryPageData>(galleryPageQuery);
  const seo = data?.seo;

  const title = seo?.title || defaultSeo.title;
  const description = seo?.description || defaultSeo.description;
  const canonical = absoluteUrl(seo?.canonicalPath || "/gallery");

  return {
    title,
    description,
    keywords: seo?.keywords,
    alternates: {
      canonical
    },
    robots: seo?.noIndex
      ? {
          index: false,
          follow: false
        }
      : {
          index: true,
          follow: true
        },
    openGraph: {
      title,
      description,
      url: canonical,
      type: "website",
      locale: "it_IT",
      images: seo?.imageUrl
        ? [
            {
              url: seo.imageUrl,
              width: 1200,
              height: 630,
              alt: title
            }
          ]
        : undefined
    }
  };
}

export default async function GalleryPage() {
  const data = await sanityFetch<GalleryPageData>(galleryPageQuery);

  return (
    <div className={styles.page}>
      <GalleryHero data={data?.hero} />
      <GalleryGrid intro={data?.intro} gallery={data?.gallery} />
      <GalleryVideo data={data?.videoSection} />
      <GalleryCta data={data?.finalCta} />
    </div>
  );
}