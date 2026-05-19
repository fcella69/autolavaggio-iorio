import { defineField, defineType } from "sanity";

export const galleryPage = defineType({
  name: "galleryPage",
  title: "Gallery page",
  type: "document",
  fields: [
    defineField({ name: "seo", title: "SEO", type: "seo" }),
    defineField({ name: "heroTitle", title: "Hero title", type: "string" }),
    defineField({ name: "heroText", title: "Hero text", type: "text", rows: 3 }),
    defineField({ name: "images", title: "Images", type: "array", of: [{ type: "galleryImage" }] }),
    defineField({ name: "videoUrl", title: "Video URL", type: "url" }),
    defineField({ name: "cta", title: "CTA", type: "cta" })
  ]
});
