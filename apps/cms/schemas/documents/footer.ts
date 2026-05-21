import { defineField, defineType } from "sanity";

export const footer = defineType({
  name: "footer",
  title: "Footer",
  type: "document",
  fields: [
    defineField({
      name: "logo",
      title: "Logo footer",
      type: "image",
      options: { hotspot: true },
      description: "Logo mostrato nel footer. Verrà convertito visivamente in bianco dal CSS."
    }),
    defineField({
      name: "logoAlt",
      title: "Alt logo",
      type: "string",
      initialValue: "Autolavaggio Iorio"
    }),
    defineField({
      name: "description",
      title: "Descrizione footer",
      type: "text",
      rows: 3
    }),
    defineField({
      name: "contacts",
      title: "Contatti",
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
              description: "Esempio: tel:+393382350148, mailto:lucianoiorio@hotmail.it, /contatti"
            })
          ]
        }
      ]
    }),
    defineField({
      name: "navigation",
      title: "Navigazione",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "label", title: "Etichetta", type: "string" }),
            defineField({ name: "href", title: "Link", type: "string" })
          ]
        }
      ]
    }),
    defineField({
      name: "legalLinks",
      title: "Link legali",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "label", title: "Etichetta", type: "string" }),
            defineField({ name: "href", title: "Link", type: "string" })
          ]
        }
      ]
    }),
    defineField({
      name: "companyInfo",
      title: "Informazioni aziendali",
      type: "object",
      fields: [
        defineField({
          name: "businessName",
          title: "Ragione sociale",
          type: "string"
        }),
        defineField({
          name: "vatNumber",
          title: "Partita IVA",
          type: "string"
        }),
        defineField({
          name: "address",
          title: "Indirizzo",
          type: "text",
          rows: 2
        })
      ]
    }),
    defineField({
      name: "copyright",
      title: "Copyright",
      type: "string",
      description: "Esempio: © 2026 Autolavaggio Iorio S.R.L. Tutti i diritti riservati."
    })
  ],
  preview: {
    prepare() {
      return {
        title: "Footer"
      };
    }
  }
});