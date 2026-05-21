import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import { Footer } from "@/components/layout/Footer/Footer";
import { Header } from "@/components/layout/Header/Header";
import { sanityFetch } from "@/lib/sanity/fetch";
import { footerQuery, headerQuery, settingsQuery } from "@/lib/sanity/queries";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap"
});

type SettingsData = {
  siteName?: string;
  siteUrl?: string;
  faviconUrl?: string;
  appleTouchIconUrl?: string;
  defaultSeoImageUrl?: string;
};

type HeaderData = {
  logoUrl?: string;
  logoAlt?: string;
  logoHref?: string;
  cta?: {
    label?: string;
    href?: string;
    text?: string;
  };
};

type FooterData = {
  logoUrl?: string;
  logoAlt?: string;
  description?: string;
  contacts?: Array<{
    label?: string;
    value?: string;
    href?: string;
  }>;
  navigation?: Array<{
    label?: string;
    href?: string;
  }>;
  legalLinks?: Array<{
    label?: string;
    href?: string;
  }>;
  companyInfo?: {
    businessName?: string;
    vatNumber?: string;
    address?: string;
  };
  copyright?: string;
};

export async function generateMetadata(): Promise<Metadata> {
  const settings = await sanityFetch<SettingsData>(settingsQuery);

  return {
    metadataBase: new URL(
      settings?.siteUrl || process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
    ),
    title: {
      default: settings?.siteName || "Autolavaggio Iorio",
      template: `%s | ${settings?.siteName || "Autolavaggio Iorio"}`
    },
    icons: {
      icon: settings?.faviconUrl
        ? [
            {
              url: settings.faviconUrl
            }
          ]
        : [
            {
              url: "/favicon.ico"
            }
          ],
      apple: settings?.appleTouchIconUrl
        ? [
            {
              url: settings.appleTouchIconUrl
            }
          ]
        : undefined
    },
    openGraph: {
      siteName: settings?.siteName || "Autolavaggio Iorio",
      images: settings?.defaultSeoImageUrl
        ? [
            {
              url: settings.defaultSeoImageUrl,
              width: 1200,
              height: 630,
              alt: settings?.siteName || "Autolavaggio Iorio"
            }
          ]
        : undefined
    }
  };
}

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [header, footer] = await Promise.all([
    sanityFetch<HeaderData>(headerQuery),
    sanityFetch<FooterData>(footerQuery)
  ]);

  return (
    <html lang="it" className={`${inter.variable} ${sora.variable}`}>
      <body>
        <Header data={header} />
        <main>{children}</main>
        <Footer data={footer} />
      </body>
    </html>
  );
}