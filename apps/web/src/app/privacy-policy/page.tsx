import type { Metadata } from "next";
import { LegalPageTemplate } from "@/components/sections/legal/LegalPageTemplate/LegalPageTemplate";
import { sanityFetch } from "@/lib/sanity/fetch";
import { privacyPolicyPageQuery } from "@/lib/sanity/queries";

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
  eyebrow: "Privacy",
  title: "Privacy Policy",
  text: "Informativa sul trattamento dei dati personali raccolti attraverso il sito di Autolavaggio Iorio.",
  lastUpdated: "Ultimo aggiornamento: Maggio 2026",
  sections: [
    {
      title: "Titolare del trattamento",
      text:
        "Il titolare del trattamento è Autolavaggio Iorio S.R.L., con sede in Via Agnano Astroni, 131/123 - 80125 Napoli."
    },
    {
      title: "Dati raccolti",
      text:
        "Attraverso il modulo di contatto possono essere raccolti nome, email, telefono, tipologia di richiesta e contenuto del messaggio inviato volontariamente dall’utente."
    },
    {
      title: "Finalità del trattamento",
      text:
        "I dati vengono utilizzati esclusivamente per rispondere alle richieste inviate tramite il sito e per fornire informazioni sui servizi dell’autolavaggio."
    }
  ]
};

const defaultSeo = {
  title: "Privacy Policy | Autolavaggio Iorio",
  description: "Privacy Policy del sito Autolavaggio Iorio S.R.L."
};

function absoluteUrl(path = "/privacy-policy") {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  return new URL(path, siteUrl).toString();
}

export async function generateMetadata(): Promise<Metadata> {
  const data = await sanityFetch<LegalPageData>(privacyPolicyPageQuery);
  const seo = data?.seo;

  const title = seo?.title || defaultSeo.title;
  const description = seo?.description || defaultSeo.description;
  const canonical = absoluteUrl(seo?.canonicalPath || "/privacy-policy");

  return {
    title,
    description,
    keywords: seo?.keywords,
    alternates: { canonical },
    robots: seo?.noIndex ? { index: false, follow: false } : { index: true, follow: true }
  };
}

export default async function PrivacyPolicyPage() {
  const data = await sanityFetch<LegalPageData>(privacyPolicyPageQuery);

  return <LegalPageTemplate data={data} fallback={fallback} />;
}