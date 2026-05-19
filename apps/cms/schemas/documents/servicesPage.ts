import { defineField, defineType } from "sanity";

export const servicesPage = defineType({
  name: "servicesPage",
  title: "Services page",
  type: "document",
  fields: [
    defineField({ name: "seo", title: "SEO", type: "seo" }),
    defineField({ name: "heroTitle", title: "Hero title", type: "string" }),
    defineField({ name: "heroText", title: "Hero text", type: "text", rows: 3 }),
    defineField({ name: "services", title: "Services", type: "array", of: [{ type: "serviceCard" }] }),
    defineField({ name: "processSteps", title: "Process steps", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "cta", title: "CTA", type: "cta" })
  ]
});
