import { defineField, defineType } from "sanity";

export const aboutPage = defineType({
  name: "aboutPage",
  title: "About page",
  type: "document",
  fields: [
    defineField({ name: "seo", title: "SEO", type: "seo" }),
    defineField({ name: "heroTitle", title: "Hero title", type: "string" }),
    defineField({ name: "heroText", title: "Hero text", type: "text", rows: 3 }),
    defineField({ name: "storyTitle", title: "Story title", type: "string" }),
    defineField({ name: "storyText", title: "Story text", type: "text", rows: 5 }),
    defineField({ name: "storyImage", title: "Story image", type: "image", options: { hotspot: true } }),
    defineField({ name: "values", title: "Values", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "cta", title: "CTA", type: "cta" })
  ]
});
