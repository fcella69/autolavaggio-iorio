import { defineField, defineType } from "sanity";

export const footer = defineType({
  name: "footer",
  title: "Footer",
  type: "document",
  fields: [
    defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
    defineField({ name: "contactInfo", title: "Contact info", type: "contactInfo" }),
    defineField({ name: "companyDetails", title: "Company details", type: "text", rows: 3 })
  ]
});
