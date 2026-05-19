import { defineField, defineType } from "sanity";

export const header = defineType({
  name: "header",
  title: "Header",
  type: "document",
  fields: [
    defineField({ name: "logoLight", title: "Logo light", type: "image" }),
    defineField({ name: "logoDark", title: "Logo dark", type: "image" }),
    defineField({ name: "cta", title: "Header CTA", type: "cta" })
  ]
});
