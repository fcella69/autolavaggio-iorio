import { defineField, defineType } from "sanity";

export const home = defineType({
  name: "home",
  title: "Home",
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
        defineField({
          name: "eyebrow",
          title: "Eyebrow",
          type: "string",
          initialValue: "Autolavaggio a Napoli"
        }),
        defineField({
          name: "title",
          title: "Titolo",
          type: "text",
          rows: 2,
          validation: (Rule) => Rule.required()
        }),
        defineField({
          name: "subtitle",
          title: "Sottotitolo",
          type: "text",
          rows: 3
        }),
        defineField({
          name: "backgroundImage",
          title: "Immagine di sfondo Hero desktop",
          type: "image",
          options: { hotspot: true },
          description:
            "Immagine larga per desktop. Ideale 4:3 o panoramica, senza testi dentro l’immagine."
        }),
        defineField({
          name: "backgroundImageAlt",
          title: "Alt immagine Hero desktop",
          type: "string",
          description: "Descrizione dell’immagine desktop per accessibilità e SEO."
        }),
        defineField({
          name: "mobileBackgroundImage",
          title: "Immagine Hero mobile",
          type: "image",
          options: { hotspot: true },
          description:
            "Immagine verticale per smartphone. Ideale formato 9:16, senza testi dentro l’immagine."
        }),
        defineField({
          name: "mobileBackgroundImageAlt",
          title: "Alt immagine Hero mobile",
          type: "string",
          description: "Descrizione dell’immagine mobile per accessibilità e SEO."
        }),
        defineField({
          name: "primaryCta",
          title: "CTA primaria",
          type: "cta"
        }),
        defineField({
          name: "secondaryCta",
          title: "CTA secondaria",
          type: "cta"
        })
      ]
    }),

    defineField({
      name: "intro",
      title: "Intro",
      type: "object",
      fields: [
        defineField({
          name: "eyebrow",
          title: "Eyebrow",
          type: "string"
        }),
        defineField({
          name: "title",
          title: "Titolo",
          type: "text",
          rows: 2
        }),
        defineField({
          name: "text",
          title: "Testo",
          type: "text",
          rows: 4
        }),
        defineField({
          name: "stat",
          title: "Box statistica / esperienza",
          type: "object",
          fields: [
            defineField({
              name: "label",
              title: "Etichetta",
              type: "string"
            }),
            defineField({
              name: "value",
              title: "Valore grande",
              type: "string",
              description: "Esempio: 20+"
            }),
            defineField({
              name: "text",
              title: "Testo descrittivo",
              type: "text",
              rows: 3
            })
          ]
        }),
        defineField({
          name: "points",
          title: "Punti chiave",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                defineField({
                  name: "title",
                  title: "Titolo",
                  type: "string"
                }),
                defineField({
                  name: "text",
                  title: "Testo",
                  type: "text",
                  rows: 2
                })
              ]
            }
          ]
        })
      ]
    }),

    defineField({
      name: "servicesPreview",
      title: "Anteprima servizi",
      type: "object",
      fields: [
        defineField({
          name: "eyebrow",
          title: "Eyebrow",
          type: "string"
        }),
        defineField({
          name: "title",
          title: "Titolo",
          type: "text",
          rows: 2
        }),
        defineField({
          name: "text",
          title: "Testo laterale / descrittivo",
          type: "text",
          rows: 3
        }),
        defineField({
          name: "items",
          title: "Servizi in evidenza",
          type: "array",
          of: [{ type: "serviceCard" }]
        }),
        defineField({
          name: "cta",
          title: "CTA",
          type: "cta"
        })
      ]
    }),

    defineField({
      name: "whyChoose",
      title: "Perché sceglierci",
      type: "object",
      fields: [
        defineField({
          name: "eyebrow",
          title: "Eyebrow",
          type: "string"
        }),
        defineField({
          name: "title",
          title: "Titolo",
          type: "text",
          rows: 2
        }),
        defineField({
          name: "text",
          title: "Testo",
          type: "text",
          rows: 3
        }),
        defineField({
          name: "reasons",
          title: "Motivi",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                defineField({
                  name: "title",
                  title: "Titolo",
                  type: "string"
                }),
                defineField({
                  name: "text",
                  title: "Testo",
                  type: "text",
                  rows: 3
                })
              ]
            }
          ]
        })
      ]
    }),

    defineField({
      name: "galleryPreview",
      title: "Anteprima gallery",
      type: "object",
      fields: [
        defineField({
          name: "eyebrow",
          title: "Eyebrow",
          type: "string"
        }),
        defineField({
          name: "title",
          title: "Titolo",
          type: "text",
          rows: 2
        }),
        defineField({
          name: "text",
          title: "Testo",
          type: "text",
          rows: 3
        }),
        defineField({
          name: "images",
          title: "Immagini anteprima",
          type: "array",
          of: [{ type: "galleryImage" }]
        }),
        defineField({
          name: "cta",
          title: "CTA",
          type: "cta"
        })
      ]
    }),

    defineField({
      name: "finalCta",
      title: "CTA finale",
      type: "object",
      fields: [
        defineField({
          name: "eyebrow",
          title: "Eyebrow",
          type: "string"
        }),
        defineField({
          name: "title",
          title: "Titolo",
          type: "text",
          rows: 2
        }),
        defineField({
          name: "text",
          title: "Testo",
          type: "text",
          rows: 3
        }),
        defineField({
          name: "contactCards",
          title: "Box contatti rapidi",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                defineField({
                  name: "label",
                  title: "Etichetta",
                  type: "string"
                }),
                defineField({
                  name: "value",
                  title: "Valore",
                  type: "string"
                })
              ]
            }
          ]
        }),
        defineField({
          name: "primaryCta",
          title: "CTA primaria",
          type: "cta"
        }),
        defineField({
          name: "secondaryCta",
          title: "CTA secondaria",
          type: "cta"
        })
      ]
    })
  ],
  preview: {
    prepare() {
      return {
        title: "Home"
      };
    }
  }
});