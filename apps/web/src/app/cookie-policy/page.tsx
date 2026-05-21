import type { Metadata } from "next";
import { LegalPageTemplate } from "@/components/sections/legal/LegalPageTemplate/LegalPageTemplate";
import { sanityFetch } from "@/lib/sanity/fetch";
import { cookiePolicyPageQuery } from "@/lib/sanity/queries";

type LegalPageData = {
  seo?: {
    title?: string;
    description?: string;
    keywords?: string[];
    canonicalPath?: string;
    noIndex?: boolean;
    imageUrl?: string;
  };
  hero?: {
    eyebrow?: string;
    title?: string;
    text?: string;
  };
  lastUpdated?: string;
  sections?: Array<{
    title?: string;
    text?: string;
  }>;
};

const fallback = {
  eyebrow: "Cookie",
  title: "Cookie Policy",
  text: "Informativa sull’utilizzo dei cookie e tecnologie simili all’interno del sito di Autolavaggio Iorio.",
  lastUpdated: "Ultimo aggiornamento: Maggio 2026",
  sections: [
    {
      title: "Cosa sono i cookie",
      text:
        "I cookie sono piccoli file di testo che i siti visitati inviano al dispositivo dell’utente per migliorare l’esperienza di navigazione e raccogliere informazioni tecniche."
    },
    {
      title: "Cookie tecnici",
      text:
        "Il sito può utilizzare cookie tecnici necessari al corretto funzionamento delle pagine e dei servizi richiesti dall’utente."
    },
    {
      title: "Servizi di terze parti",
      text:
        "La presenza di contenuti esterni, come mappe Google o video YouTube, può comportare l’utilizzo di cookie o tecnologie simili da parte dei rispettivi fornitori."
    }
  ]
};

const defaultSeo = {
  title: "Cookie Policy | Autolavaggio Iorio",
  description: "Cookie Policy del sito Autolavaggio Iorio S.R.L."
};

function absoluteUrl(path = "/cookie-policy") {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  return new URL(path, siteUrl).toString();
}

export async function generateMetadata(): Promise<Metadata> {
  const data = await sanityFetch<LegalPageData>(cookiePolicyPageQuery);
  const seo = data?.seo;

  const title = seo?.title || defaultSeo.title;
  const description = seo?.description || defaultSeo.description;
  const canonical = absoluteUrl(seo?.canonicalPath || "/cookie-policy");

  return {
    title,
    description,
    keywords: seo?.keywords,
    alternates: { canonical },
    robots: seo?.noIndex ? { index: false, follow: false } : { index: true, follow: true }
  };
}

export default async function CookiePolicyPage() {
  const data = await sanityFetch<LegalPageData>(cookiePolicyPageQuery);

  return <LegalPageTemplate data={data} fallback={fallback} />;
}