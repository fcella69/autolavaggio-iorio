import type { Metadata } from "next";
import { ServicesCta } from "@/components/sections/services/ServicesCta/ServicesCta";
import { ServicesGrid } from "@/components/sections/services/ServicesGrid/ServicesGrid";
import { ServicesHero } from "@/components/sections/services/ServicesHero/ServicesHero";
import { ServicesProcess } from "@/components/sections/services/ServicesProcess/ServicesProcess";
import styles from "./ServicesPage.module.css";

export const metadata: Metadata = {
  title: "Servizi",
  description: "Servizi di lavaggio auto, furgoni, camion e sanificazione a Napoli."
};

export default function ServicesPage() {
  return (
    <div className={styles.page}>
      <ServicesHero />
      <ServicesGrid />
      <ServicesProcess />
      <ServicesCta />
    </div>
  );
}
