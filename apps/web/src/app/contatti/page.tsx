import type { Metadata } from "next";
import { ContactCta } from "@/components/sections/contact/ContactCta/ContactCta";
import { ContactFormSection } from "@/components/sections/contact/ContactFormSection/ContactFormSection";
import { ContactHero } from "@/components/sections/contact/ContactHero/ContactHero";
import { ContactInfo } from "@/components/sections/contact/ContactInfo/ContactInfo";
import { ContactMap } from "@/components/sections/contact/ContactMap/ContactMap";
import styles from "./ContactPage.module.css";

export const metadata: Metadata = {
  title: "Contatti",
  description: "Contatti, indirizzo e orari di Autolavaggio Iorio a Napoli."
};

export default function ContactPage() {
  return (
    <div className={styles.page}>
      <ContactHero />
      <ContactInfo />
      <ContactFormSection />
      <ContactMap />
      <ContactCta />
    </div>
  );
}
