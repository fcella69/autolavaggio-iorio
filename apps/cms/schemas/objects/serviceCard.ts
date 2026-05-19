import { defineField, defineType } from "sanity";

export const serviceCard = defineType({
  name: "serviceCard",
  title: "Service card",
  type: "object",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
    defineField({ name: "image", title: "Image", type: "image", options: { hotspot: true } })
  ]
});
