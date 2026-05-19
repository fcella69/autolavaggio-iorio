import type { Metadata } from "next";
import { AboutCta } from "@/components/sections/about/AboutCta/AboutCta";
import { AboutHero } from "@/components/sections/about/AboutHero/AboutHero";
import { AboutStory } from "@/components/sections/about/AboutStory/AboutStory";
import { AboutValues } from "@/components/sections/about/AboutValues/AboutValues";
import styles from "./AboutPage.module.css";

export const metadata: Metadata = {
  title: "Chi Siamo",
  description: "Scopri Autolavaggio Iorio, autolavaggio a mano a Napoli."
};

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <AboutHero />
      <AboutStory />
      <AboutValues />
      <AboutCta />
    </div>
  );
}
