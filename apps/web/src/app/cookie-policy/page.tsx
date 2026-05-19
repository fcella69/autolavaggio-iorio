import type { Metadata } from "next";
import { LegalPageTemplate } from "@/components/sections/legal/LegalPageTemplate/LegalPageTemplate";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Cookie Policy di Autolavaggio Iorio."
};

export default function CookiePolicyPage() {
  return (
    <LegalPageTemplate title="Cookie Policy">
      <p>
        Testo placeholder. La configurazione cookie definitiva dipendera dagli strumenti integrati
        nel sito.
      </p>
      <h2>Cookie tecnici</h2>
      <p>Eventuali cookie tecnici saranno usati per il corretto funzionamento del sito.</p>
      <h2>Cookie di terze parti</h2>
      <p>Da definire dopo l&apos;integrazione di mappe, analytics o video incorporati.</p>
    </LegalPageTemplate>
  );
}
