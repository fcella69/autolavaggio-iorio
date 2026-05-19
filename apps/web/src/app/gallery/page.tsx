import type { Metadata } from "next";
import { GalleryCta } from "@/components/sections/gallery/GalleryCta/GalleryCta";
import { GalleryGrid } from "@/components/sections/gallery/GalleryGrid/GalleryGrid";
import { GalleryHero } from "@/components/sections/gallery/GalleryHero/GalleryHero";
import { GalleryVideo } from "@/components/sections/gallery/GalleryVideo/GalleryVideo";
import styles from "./GalleryPage.module.css";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Gallery fotografica di Autolavaggio Iorio a Napoli."
};

export default function GalleryPage() {
  return (
    <div className={styles.page}>
      <GalleryHero />
      <GalleryGrid />
      <GalleryVideo />
      <GalleryCta />
    </div>
  );
}
