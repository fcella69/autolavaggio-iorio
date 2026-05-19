import type { Metadata } from "next";
import { LegalPageTemplate } from "@/components/sections/legal/LegalPageTemplate/LegalPageTemplate";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy di Autolavaggio Iorio."
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPageTemplate title="Privacy Policy">
      <p>
        Testo placeholder. I contenuti definitivi dovranno essere verificati con il consulente
        privacy prima della pubblicazione.
      </p>
      <h2>Titolare del trattamento</h2>
      <p>Autolavaggio Iorio S.R.L., Via Agnano Astroni, 123/131 - Napoli.</p>
      <h2>Finalita</h2>
      <p>Gestione richieste di contatto e comunicazioni relative ai servizi.</p>
    </LegalPageTemplate>
  );
}
