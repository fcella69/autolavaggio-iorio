import { defineField, defineType } from "sanity";

export const privacyPolicyPage = defineType({
  name: "privacyPolicyPage",
  title: "Privacy Policy page",
  type: "document",
  fields: [
    defineField({ name: "seo", title: "SEO", type: "seo" }),
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "content", title: "Content", type: "array", of: [{ type: "block" }] })
  ]
});
