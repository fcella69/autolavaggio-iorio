import { Hero } from "@/components/sections/home/Hero/Hero";
import { HomeFinalCta } from "@/components/sections/home/HomeFinalCta/HomeFinalCta";
import { HomeGalleryPreview } from "@/components/sections/home/HomeGalleryPreview/HomeGalleryPreview";
import { HomeIntro } from "@/components/sections/home/HomeIntro/HomeIntro";
import { HomeServicesPreview } from "@/components/sections/home/HomeServicesPreview/HomeServicesPreview";
import { HomeWhyChoose } from "@/components/sections/home/HomeWhyChoose/HomeWhyChoose";

export default function HomePage() {
  return (
    <>
      <Hero />
      <HomeIntro />
      <HomeServicesPreview />
      <HomeWhyChoose />
      <HomeGalleryPreview />
      <HomeFinalCta />
    </>
  );
}
