import type { Metadata } from "next";
import { ServicesCta } from "@/components/sections/services/ServicesCta/ServicesCta";
import { ServicesGrid } from "@/components/sections/services/ServicesGrid/ServicesGrid";
import { ServicesHero } from "@/components/sections/services/ServicesHero/ServicesHero";
import { ServicesIntro } from "@/components/sections/services/ServicesIntro/ServicesIntro";
import { ServicesProcess } from "@/components/sections/services/ServicesProcess/ServicesProcess";
import { sanityFetch } from "@/lib/sanity/fetch";
import { servicesPageQuery } from "@/lib/sanity/queries";
import styles from "./ServicesPage.module.css";

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

export type ServicesPageData = {
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
    highlights?: Array<{
      label?: string;
      value?: string;
    }>;
  };
  completeWash?: {
    eyebrow?: string;
    title?: string;
    text?: string;
    imageUrl?: string;
    imageAlt?: string;
  };
  servicesGrid?: {
    eyebrow?: string;
    title?: string;
    text?: string;
    items?: Array<{
      label?: string;
      title?: string;
      description?: string;
    }>;
  };
  process?: {
    eyebrow?: string;
    title?: string;
    text?: string;
    steps?: Array<{
      title?: string;
      text?: string;
      imageUrl?: string;
      imageAlt?: string;
    }>;
  };
  extraInfo?: {
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
  title: "Servizi Autolavaggio Iorio | Autolavaggio a mano Napoli Nord",
  description:
    "Scopri i servizi di Autolavaggio Iorio a Napoli Nord: lavaggio auto a mano, pulizia interni, sanificazione, lavaggio furgoni, moto, motori e mezzi industriali."
};

function absoluteUrl(path = "/servizi") {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  return new URL(path, siteUrl).toString();
}

export async function generateMetadata(): Promise<Metadata> {
  const data = await sanityFetch<ServicesPageData>(servicesPageQuery);
  const seo = data?.seo;

  const title = seo?.title || defaultSeo.title;
  const description = seo?.description || defaultSeo.description;
  const canonical = absoluteUrl(seo?.canonicalPath || "/servizi");

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

export default async function ServicesPage() {
  const data = await sanityFetch<ServicesPageData>(servicesPageQuery);

  return (
    <div className={styles.page}>
      <ServicesHero data={data?.hero} />
      <ServicesIntro intro={data?.intro} completeWash={data?.completeWash} />
      <ServicesGrid data={data?.servicesGrid} />
      <ServicesProcess process={data?.process} extraInfo={data?.extraInfo} />
      <ServicesCta data={data?.finalCta} />
    </div>
  );
}