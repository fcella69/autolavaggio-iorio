import { defineField, defineType } from "sanity";

export const contactPage = defineType({
  name: "contactPage",
  title: "Contact page",
  type: "document",
  fields: [
    defineField({ name: "seo", title: "SEO", type: "seo" }),
    defineField({ name: "heroTitle", title: "Hero title", type: "string" }),
    defineField({ name: "heroText", title: "Hero text", type: "text", rows: 3 }),
    defineField({ name: "contactInfo", title: "Contact info", type: "contactInfo" }),
    defineField({ name: "mapEmbedUrl", title: "Map embed URL", type: "url" }),
    defineField({ name: "cta", title: "CTA", type: "cta" })
  ]
});
