import type { Metadata } from "next";
import { AboutCta } from "@/components/sections/about/AboutCta/AboutCta";
import { AboutHero } from "@/components/sections/about/AboutHero/AboutHero";
import { AboutStory } from "@/components/sections/about/AboutStory/AboutStory";
import { AboutValues } from "@/components/sections/about/AboutValues/AboutValues";
import { sanityFetch } from "@/lib/sanity/fetch";
import { aboutPageQuery } from "@/lib/sanity/queries";
import styles from "./AboutPage.module.css";

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

export type AboutPageData = {
  seo?: SeoData;
  hero?: {
    eyebrow?: string;
    title?: string;
    text?: string;
    primaryCta?: CtaData;
    secondaryCta?: CtaData;
  };
  story?: {
    eyebrow?: string;
    title?: string;
    text?: string;
    sideLabel?: string;
    sideTitle?: string;
    sideText?: string;
    highlights?: Array<{
      label?: string;
      value?: string;
    }>;
  };
  industrial?: {
    eyebrow?: string;
    title?: string;
    text?: string;
    imageUrl?: string;
    imageAlt?: string;
    items?: Array<{
      title?: string;
      text?: string;
    }>;
  };
  values?: {
    eyebrow?: string;
    title?: string;
    text?: string;
    items?: Array<{
      title?: string;
      text?: string;
    }>;
  };
  advancedServices?: {
    eyebrow?: string;
    title?: string;
    text?: string;
    items?: Array<{
      title?: string;
      text?: string;
    }>;
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
  title: "Chi Siamo Autolavaggio Iorio | Autolavaggio camion Napoli",
  description:
    "Autolavaggio Iorio a Napoli: esperienza ventennale nel lavaggio manuale di auto, camion, furgoni, mezzi industriali e automezzi per igiene urbana."
};

function absoluteUrl(path = "/chi-siamo") {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  return new URL(path, siteUrl).toString();
}

export async function generateMetadata(): Promise<Metadata> {
  const data = await sanityFetch<AboutPageData>(aboutPageQuery);
  const seo = data?.seo;

  const title = seo?.title || defaultSeo.title;
  const description = seo?.description || defaultSeo.description;
  const canonical = absoluteUrl(seo?.canonicalPath || "/chi-siamo");

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

export default async function AboutPage() {
  const data = await sanityFetch<AboutPageData>(aboutPageQuery);

  return (
    <div className={styles.page}>
      <AboutHero data={data?.hero} />
      <AboutStory story={data?.story} industrial={data?.industrial} />
      <AboutValues values={data?.values} advancedServices={data?.advancedServices} />
      <AboutCta data={data?.finalCta} />
    </div>
  );
}