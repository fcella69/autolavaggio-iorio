import type { Metadata } from "next";
import { ContactCta } from "@/components/sections/contact/ContactCta/ContactCta";
import { ContactFormSection } from "@/components/sections/contact/ContactFormSection/ContactFormSection";
import { ContactHero } from "@/components/sections/contact/ContactHero/ContactHero";
import { ContactInfo } from "@/components/sections/contact/ContactInfo/ContactInfo";
import { ContactMap } from "@/components/sections/contact/ContactMap/ContactMap";
import { sanityFetch } from "@/lib/sanity/fetch";
import { contactPageQuery } from "@/lib/sanity/queries";
import styles from "./ContactPage.module.css";

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

export type ContactPageData = {
  seo?: SeoData;
  hero?: {
    eyebrow?: string;
    title?: string;
    text?: string;
    primaryCta?: CtaData;
    secondaryCta?: CtaData;
  };
  infoCards?: Array<{
    label?: string;
    value?: string;
    href?: string;
  }>;
  formSection?: {
    eyebrow?: string;
    title?: string;
    text?: string;
    imageUrl?: string;
    imageAlt?: string;
    requestTypes?: string[];
    labels?: {
      name?: string;
      email?: string;
      phone?: string;
      requestType?: string;
      message?: string;
      privacy?: string;
      submit?: string;
    };
    messages?: {
      success?: string;
      error?: string;
    };
  };
  mapSection?: {
    eyebrow?: string;
    title?: string;
    text?: string;
    address?: string;
    mapEmbedUrl?: string;
    googleMapsUrl?: string;
    ctaLabel?: string;
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
  title: "Contatti Autolavaggio Iorio | Autolavaggio a Napoli Nord",
  description:
    "Contatta Autolavaggio Iorio a Napoli: siamo in Via Agnano Astroni, 131/123. Lavaggio auto a mano, furgoni, camion, mezzi industriali e sanificazione."
};

function absoluteUrl(path = "/contatti") {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  return new URL(path, siteUrl).toString();
}

export async function generateMetadata(): Promise<Metadata> {
  const data = await sanityFetch<ContactPageData>(contactPageQuery);
  const seo = data?.seo;

  const title = seo?.title || defaultSeo.title;
  const description = seo?.description || defaultSeo.description;
  const canonical = absoluteUrl(seo?.canonicalPath || "/contatti");

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

export default async function ContactPage() {
  const data = await sanityFetch<ContactPageData>(contactPageQuery);

  return (
    <div className={styles.page}>
      <ContactHero data={data?.hero} />
      <ContactInfo data={data?.infoCards} />
      <ContactFormSection data={data?.formSection} />
      <ContactMap data={data?.mapSection} />
      <ContactCta data={data?.finalCta} />
    </div>
  );
}