import type { Metadata } from "next";
import { Hero } from "@/components/sections/home/Hero/Hero";
import { HomeFinalCta } from "@/components/sections/home/HomeFinalCta/HomeFinalCta";
import { HomeGalleryPreview } from "@/components/sections/home/HomeGalleryPreview/HomeGalleryPreview";
import { HomeIntro } from "@/components/sections/home/HomeIntro/HomeIntro";
import { HomeServicesPreview } from "@/components/sections/home/HomeServicesPreview/HomeServicesPreview";
import { HomeWhyChoose } from "@/components/sections/home/HomeWhyChoose/HomeWhyChoose";
import { sanityFetch } from "@/lib/sanity/fetch";
import { homeQuery } from "@/lib/sanity/queries";

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

type HomePageData = {
  seo?: SeoData;
  hero?: {
    eyebrow?: string;
    title?: string;
    subtitle?: string;
    backgroundImageUrl?: string;
    backgroundImageAlt?: string;
    mobileBackgroundImageUrl?: string;
    mobileBackgroundImageAlt?: string;
    primaryCta?: CtaData;
    secondaryCta?: CtaData;
  };
  intro?: {
    eyebrow?: string;
    title?: string;
    text?: string;
    stat?: {
      label?: string;
      value?: string;
      text?: string;
    };
    points?: Array<{
      title?: string;
      text?: string;
    }>;
  };
  servicesPreview?: {
    eyebrow?: string;
    title?: string;
    text?: string;
    items?: Array<{
      label?: string;
      title?: string;
      description?: string;
      imageUrl?: string;
      imageAlt?: string;
    }>;
    cta?: CtaData;
  };
  whyChoose?: {
    eyebrow?: string;
    title?: string;
    text?: string;
    reasons?: Array<{
      title?: string;
      text?: string;
    }>;
  };
  galleryPreview?: {
    eyebrow?: string;
    title?: string;
    text?: string;
    images?: Array<{
      imageUrl?: string;
      alt?: string;
      caption?: string;
    }>;
    cta?: CtaData;
  };
  finalCta?: {
    eyebrow?: string;
    title?: string;
    text?: string;
    contactCards?: Array<{
      label?: string;
      value?: string;
    }>;
    primaryCta?: CtaData;
    secondaryCta?: CtaData;
  };
};

const defaultSeo = {
  title: "Autolavaggio Iorio | Autolavaggio a mano a Napoli",
  description:
    "Autolavaggio Iorio a Napoli: lavaggio a mano per auto, furgoni, camion e mezzi industriali, pulizia interni e sanificazione."
};

function absoluteUrl(path = "/") {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  return new URL(path, siteUrl).toString();
}

export async function generateMetadata(): Promise<Metadata> {
  const data = await sanityFetch<HomePageData>(homeQuery);
  const seo = data?.seo;

  const title = seo?.title || defaultSeo.title;
  const description = seo?.description || defaultSeo.description;
  const canonical = absoluteUrl(seo?.canonicalPath || "/");

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

export default async function HomePage() {
  const data = await sanityFetch<HomePageData>(homeQuery);

  return (
    <>
      <Hero data={data?.hero} />
      <HomeIntro data={data?.intro} />
      <HomeServicesPreview data={data?.servicesPreview} />
      <HomeWhyChoose data={data?.whyChoose} />
      <HomeGalleryPreview data={data?.galleryPreview} />
      <HomeFinalCta data={data?.finalCta} />
    </>
  );
}