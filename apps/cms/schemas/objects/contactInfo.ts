import { defineField, defineType } from "sanity";

export const contactInfo = defineType({
  name: "contactInfo",
  title: "Contact info",
  type: "object",
  fields: [
    defineField({ name: "companyName", title: "Company name", type: "string" }),
    defineField({ name: "address", title: "Address", type: "string" }),
    defineField({ name: "phone", title: "Phone", type: "string" }),
    defineField({ name: "email", title: "Email", type: "string" }),
    defineField({ name: "hours", title: "Opening hours", type: "array", of: [{ type: "string" }] })
  ]
});
