import { defineField, defineType } from "sanity";

export const servicesPage = defineType({
  name: "servicesPage",
  title: "Pagina Servizi",
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
        defineField({ name: "text", title: "Testo", type: "text", rows: 3 }),
        defineField({ name: "primaryCta", title: "CTA primaria", type: "cta" }),
        defineField({ name: "secondaryCta", title: "CTA secondaria", type: "cta" })
      ]
    }),

    defineField({
      name: "intro",
      title: "Intro servizi",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
        defineField({ name: "title", title: "Titolo", type: "text", rows: 2 }),
        defineField({ name: "text", title: "Testo", type: "text", rows: 5 }),
        defineField({
          name: "highlights",
          title: "Punti evidenziati",
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
      name: "completeWash",
      title: "Lavaggio completo",
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
        })
      ]
    }),

    defineField({
      name: "servicesGrid",
      title: "Griglia servizi",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
        defineField({ name: "title", title: "Titolo", type: "text", rows: 2 }),
        defineField({ name: "text", title: "Testo", type: "text", rows: 3 }),
        defineField({
          name: "items",
          title: "Servizi",
          type: "array",
          of: [{ type: "serviceCard" }]
        })
      ]
    }),

    defineField({
      name: "process",
      title: "Fasi del lavaggio",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
        defineField({ name: "title", title: "Titolo", type: "text", rows: 2 }),
        defineField({ name: "text", title: "Testo", type: "text", rows: 3 }),
        defineField({
          name: "steps",
          title: "Fasi",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                defineField({ name: "title", title: "Titolo", type: "string" }),
                defineField({ name: "text", title: "Testo", type: "text", rows: 3 }),
                defineField({
                  name: "image",
                  title: "Immagine fase",
                  type: "image",
                  options: { hotspot: true }
                }),
                defineField({
                  name: "imageAlt",
                  title: "Alt immagine fase",
                  type: "string"
                })
              ]
            }
          ]
        })
      ]
    }),

    defineField({
      name: "extraInfo",
      title: "Prodotti, accessori e sala attesa",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
        defineField({ name: "title", title: "Titolo", type: "text", rows: 2 }),
        defineField({ name: "text", title: "Testo", type: "text", rows: 5 }),
        defineField({
          name: "items",
          title: "Punti",
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
        title: "Pagina Servizi"
      };
    }
  }
});