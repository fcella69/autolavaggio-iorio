import { defineField, defineType } from "sanity";

export const serviceCard = defineType({
  name: "serviceCard",
  title: "Service card",
  type: "object",
  fields: [
    defineField({
      name: "label",
      title: "Etichetta",
      type: "string",
      description: "Esempio: Servizio 01, Lavaggio, Sanificazione"
    }),
    defineField({
      name: "title",
      title: "Titolo",
      type: "string",
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "description",
      title: "Descrizione",
      type: "text",
      rows: 3
    }),
    defineField({
      name: "image",
      title: "Immagine",
      type: "image",
      options: { hotspot: true }
    }),
    defineField({
      name: "imageAlt",
      title: "Alt immagine",
      type: "string",
      description: "Testo alternativo utile per accessibilità e SEO."
    })
  ]
});