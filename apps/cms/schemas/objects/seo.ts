import { defineField, defineType } from "sanity";

export const seo = defineType({
  name: "seo",
  title: "SEO",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "SEO title",
      type: "string",
      description: "Titolo SEO della pagina. Consigliato: massimo 55-60 caratteri.",
      validation: (Rule) => Rule.max(65)
    }),
    defineField({
      name: "description",
      title: "Meta description",
      type: "text",
      rows: 3,
      description: "Descrizione SEO. Consigliato: massimo 150-160 caratteri.",
      validation: (Rule) => Rule.max(170)
    }),
    defineField({
      name: "keywords",
      title: "Keyword principali",
      type: "array",
      of: [{ type: "string" }],
      description: "Parole chiave utili come riferimento editoriale. Non abusarne."
    }),
    defineField({
      name: "canonicalPath",
      title: "Canonical path",
      type: "string",
      description: "Esempio: / oppure /servizi. Lascia vuoto per usare la URL standard."
    }),
    defineField({
      name: "image",
      title: "Social image / OG image",
      type: "image",
      options: { hotspot: true }
    }),
    defineField({
      name: "noIndex",
      title: "No index",
      type: "boolean",
      initialValue: false,
      description: "Attiva solo per pagine che non devono essere indicizzate."
    })
  ]
});