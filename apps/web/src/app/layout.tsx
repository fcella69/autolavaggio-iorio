import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import { Header } from "@/components/layout/Header/Header";
import { Footer } from "@/components/layout/Footer/Footer";
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

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: {
    default: "Autolavaggio Iorio | Autolavaggio a mano a Napoli",
    template: "%s | Autolavaggio Iorio"
  },
  description:
    "Autolavaggio a mano a Napoli per auto, furgoni, camion e mezzi industriali.",
  openGraph: {
    title: "Autolavaggio Iorio | Autolavaggio a mano a Napoli",
    description:
      "Servizi professionali di lavaggio, pulizia interni e sanificazione a Napoli.",
    type: "website",
    locale: "it_IT"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className={`${inter.variable} ${sora.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
