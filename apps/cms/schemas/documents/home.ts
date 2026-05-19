import { defineField, defineType } from "sanity";

export const home = defineType({
  name: "home",
  title: "Home",
  type: "document",
  fields: [
    defineField({ name: "seo", title: "SEO", type: "seo" }),
    defineField({ name: "heroTitle", title: "Hero title", type: "string" }),
    defineField({ name: "heroSubtitle", title: "Hero subtitle", type: "text", rows: 3 }),
    defineField({ name: "heroImage", title: "Hero image", type: "image", options: { hotspot: true } }),
    defineField({ name: "introTitle", title: "Intro title", type: "string" }),
    defineField({ name: "introText", title: "Intro text", type: "text", rows: 4 }),
    defineField({ name: "services", title: "Services preview", type: "array", of: [{ type: "serviceCard" }] }),
    defineField({ name: "gallery", title: "Gallery preview", type: "array", of: [{ type: "galleryImage" }] }),
    defineField({ name: "finalCta", title: "Final CTA", type: "cta" })
  ]
});
