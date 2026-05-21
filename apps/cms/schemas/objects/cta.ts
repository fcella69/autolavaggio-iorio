import { defineField, defineType } from "sanity";

export const cta = defineType({
  name: "cta",
  title: "CTA",
  type: "object",
  fields: [
    defineField({
      name: "label",
      title: "Testo pulsante",
      type: "string"
    }),
    defineField({
      name: "href",
      title: "Link",
      type: "string",
      description: "Esempio: /contatti, /servizi, tel:+393382350148"
    }),
    defineField({
      name: "text",
      title: "Testo di supporto",
      type: "text",
      rows: 2
    })
  ]
});