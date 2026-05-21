import { defineField, defineType } from "sanity";

export const galleryPage = defineType({
  name: "galleryPage",
  title: "Pagina Gallery",
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
      title: "Intro Gallery",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
        defineField({ name: "title", title: "Titolo", type: "text", rows: 2 }),
        defineField({ name: "text", title: "Testo", type: "text", rows: 3 })
      ]
    }),

    defineField({
      name: "gallery",
      title: "Griglia immagini",
      type: "object",
      fields: [
        defineField({
          name: "images",
          title: "Immagini",
          type: "array",
          of: [{ type: "galleryImage" }]
        })
      ]
    }),

    defineField({
      name: "videoSection",
      title: "Sezione video YouTube",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
        defineField({ name: "title", title: "Titolo", type: "text", rows: 2 }),
        defineField({ name: "text", title: "Testo", type: "text", rows: 3 }),
        defineField({
          name: "youtubeUrl",
          title: "URL video YouTube",
          type: "string",
          description:
            "Puoi incollare un link YouTube normale, un link youtu.be oppure un URL embed."
        }),
        defineField({
          name: "videoTitle",
          title: "Titolo accessibile del video",
          type: "string",
          description: "Esempio: Video Autolavaggio Iorio a Napoli"
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
        title: "Pagina Gallery"
      };
    }
  }
});