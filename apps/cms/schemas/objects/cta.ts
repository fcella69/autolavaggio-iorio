import { defineField, defineType } from "sanity";

export const cta = defineType({
  name: "cta",
  title: "CTA",
  type: "object",
  fields: [
    defineField({ name: "label", title: "Label", type: "string" }),
    defineField({ name: "href", title: "Link", type: "string" }),
    defineField({ name: "text", title: "Supporting text", type: "text", rows: 2 })
  ]
});
