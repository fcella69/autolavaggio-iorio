import { defineField, defineType } from "sanity";

export const cookiePolicyPage = defineType({
  name: "cookiePolicyPage",
  title: "Cookie Policy",
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
        defineField({ name: "text", title: "Testo introduttivo", type: "text", rows: 3 })
      ]
    }),
    defineField({
      name: "lastUpdated",
      title: "Ultimo aggiornamento",
      type: "string",
      description: "Esempio: Ultimo aggiornamento: Maggio 2026"
    }),
    defineField({
      name: "sections",
      title: "Sezioni contenuto",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "title", title: "Titolo sezione", type: "string" }),
            defineField({
              name: "text",
              title: "Testo sezione",
              type: "text",
              rows: 8,
              description: "Puoi incollare anche paragrafi lunghi. Gli a capo vengono mantenuti."
            })
          ]
        }
      ]
    })
  ],
  preview: {
    prepare() {
      return {
        title: "Cookie Policy"
      };
    }
  }
});