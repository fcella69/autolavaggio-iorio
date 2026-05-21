import { defineField, defineType } from "sanity";

export const contactPage = defineType({
  name: "contactPage",
  title: "Pagina Contatti",
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
      name: "infoCards",
      title: "Card informazioni rapide",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "label", title: "Etichetta", type: "string" }),
            defineField({ name: "value", title: "Valore", type: "text", rows: 2 }),
            defineField({
              name: "href",
              title: "Link opzionale",
              type: "string",
              description: "Esempio: tel:+393382350148, mailto:email@dominio.it, Google Maps URL"
            })
          ]
        }
      ]
    }),

    defineField({
      name: "formSection",
      title: "Sezione form",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
        defineField({ name: "title", title: "Titolo", type: "text", rows: 2 }),
        defineField({ name: "text", title: "Testo", type: "text", rows: 3 }),
        defineField({
          name: "image",
          title: "Immagine quadrata sotto il testo",
          type: "image",
          options: { hotspot: true },
          description: "Immagine quadrata mostrata sotto il testo a sinistra del form."
        }),
        defineField({
          name: "imageAlt",
          title: "Alt immagine",
          type: "string",
          description: "Testo alternativo dell’immagine per accessibilità e SEO."
        }),
        defineField({
          name: "requestTypes",
          title: "Tipologie richiesta",
          type: "array",
          of: [{ type: "string" }]
        }),
        defineField({
          name: "labels",
          title: "Etichette form",
          type: "object",
          fields: [
            defineField({ name: "name", title: "Nome", type: "string" }),
            defineField({ name: "email", title: "Email", type: "string" }),
            defineField({ name: "phone", title: "Telefono", type: "string" }),
            defineField({ name: "requestType", title: "Tipo richiesta", type: "string" }),
            defineField({ name: "message", title: "Messaggio", type: "string" }),
            defineField({ name: "privacy", title: "Testo consenso privacy", type: "text", rows: 2 }),
            defineField({ name: "submit", title: "Testo pulsante invio", type: "string" })
          ]
        }),
        defineField({
          name: "messages",
          title: "Messaggi form",
          type: "object",
          fields: [
            defineField({ name: "success", title: "Messaggio successo", type: "text", rows: 2 }),
            defineField({ name: "error", title: "Messaggio errore", type: "text", rows: 2 })
          ]
        })
      ]
    }),
    defineField({
      name: "mapSection",
      title: "Sezione mappa",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
        defineField({ name: "title", title: "Titolo", type: "text", rows: 2 }),
        defineField({ name: "text", title: "Testo", type: "text", rows: 3 }),
        defineField({ name: "address", title: "Indirizzo", type: "text", rows: 2 }),
        defineField({
          name: "mapEmbedUrl",
          title: "Google Maps embed URL o iframe",
          type: "string",
          description:
            "Puoi incollare il solo URL embed di Google Maps oppure l’intero codice iframe. Verrà usato solo il valore src."
        }),
        defineField({
          name: "googleMapsUrl",
          title: "Link Google Maps",
          type: "url",
          description: "Link normale per aprire la posizione su Google Maps."
        }),
        defineField({ name: "ctaLabel", title: "Testo pulsante mappa", type: "string" })
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
        title: "Pagina Contatti"
      };
    }
  }
});