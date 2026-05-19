import { defineField, defineType } from "sanity";

export const settings = defineType({
  name: "settings",
  title: "Settings",
  type: "document",
  fields: [
    defineField({ name: "siteTitle", title: "Site title", type: "string" }),
    defineField({ name: "defaultSeo", title: "Default SEO", type: "seo" }),
    defineField({ name: "contactInfo", title: "Default contact info", type: "contactInfo" })
  ]
});
