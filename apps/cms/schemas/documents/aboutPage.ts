import { defineField, defineType } from "sanity";

export const aboutPage = defineType({
  name: "aboutPage",
  title: "Pagina Chi Siamo",
  type: "document",
  fields: [
    defineField({
      name: "seo",
      title: "SEO",
      type: "seo"
    }),

    defineField({
      name: "hero",
      title: "Hero",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
        defineField({ name: "title", title: "Titolo", type: "text", rows: 2 }),
        defineField({ name: "text", title: "Testo", type: "text", rows: 4 }),
        defineField({ name: "primaryCta", title: "CTA primaria", type: "cta" }),
        defineField({ name: "secondaryCta", title: "CTA secondaria", type: "cta" })
      ]
    }),

    defineField({
      name: "story",
      title: "Storia aziendale",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
        defineField({ name: "title", title: "Titolo", type: "text", rows: 2 }),
        defineField({ name: "text", title: "Testo", type: "text", rows: 6 }),
        defineField({
          name: "sideLabel",
          title: "Etichetta box laterale",
          type: "string"
        }),
        defineField({
          name: "sideTitle",
          title: "Titolo box laterale",
          type: "string"
        }),
        defineField({
          name: "sideText",
          title: "Testo box laterale",
          type: "text",
          rows: 3
        }),
        defineField({
          name: "highlights",
          title: "Punti chiave",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                defineField({ name: "label", title: "Etichetta", type: "string" }),
                defineField({ name: "value", title: "Valore", type: "string" })
              ]
            }
          ]
        })
      ]
    }),

    defineField({
      name: "industrial",
      title: "Specializzazione mezzi industriali",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
        defineField({ name: "title", title: "Titolo", type: "text", rows: 2 }),
        defineField({ name: "text", title: "Testo", type: "text", rows: 5 }),
        defineField({
          name: "image",
          title: "Immagine",
          type: "image",
          options: { hotspot: true }
        }),
        defineField({
          name: "imageAlt",
          title: "Alt immagine",
          type: "string"
        }),
        defineField({
          name: "items",
          title: "Servizi / specializzazioni",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                defineField({ name: "title", title: "Titolo", type: "string" }),
                defineField({ name: "text", title: "Testo", type: "text", rows: 3 })
              ]
            }
          ]
        })
      ]
    }),

    defineField({
      name: "values",
      title: "Valori e punti di forza",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
        defineField({ name: "title", title: "Titolo", type: "text", rows: 2 }),
        defineField({ name: "text", title: "Testo", type: "text", rows: 3 }),
        defineField({
          name: "items",
          title: "Valori",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                defineField({ name: "title", title: "Titolo", type: "string" }),
                defineField({ name: "text", title: "Testo", type: "text", rows: 3 })
              ]
            }
          ]
        })
      ]
    }),

    defineField({
      name: "advancedServices",
      title: "Servizi evoluti e trattamenti specifici",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
        defineField({ name: "title", title: "Titolo", type: "text", rows: 2 }),
        defineField({ name: "text", title: "Testo", type: "text", rows: 4 }),
        defineField({
          name: "items",
          title: "Trattamenti",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                defineField({ name: "title", title: "Titolo", type: "string" }),
                defineField({ name: "text", title: "Testo", type: "text", rows: 3 })
              ]
            }
          ]
        })
      ]
    }),

    defineField({
      name: "finalCta",
      title: "CTA finale",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
        defineField({ name: "title", title: "Titolo", type: "text", rows: 2 }),
        defineField({ name: "text", title: "Testo", type: "text", rows: 3 }),
        defineField({ name: "primaryCta", title: "CTA primaria", type: "cta" }),
        defineField({ name: "secondaryCta", title: "CTA secondaria", type: "cta" })
      ]
    })
  ],
  preview: {
    prepare() {
      return {
        title: "Pagina Chi Siamo"
      };
    }
  }
});