import { defineField, defineType } from "sanity";

export const settings = defineType({
  name: "settings",
  title: "Impostazioni sito",
  type: "document",
  fields: [
    defineField({
      name: "siteName",
      title: "Nome sito",
      type: "string",
      initialValue: "Autolavaggio Iorio"
    }),
    defineField({
      name: "siteUrl",
      title: "URL sito",
      type: "url",
      description: "Esempio: https://www.autolavaggioiorio.it"
    }),
    defineField({
      name: "favicon",
      title: "Favicon",
      type: "image",
      options: { hotspot: true },
      description:
        "Icona del sito mostrata nella scheda del browser. Consigliato formato quadrato."
    }),
    defineField({
      name: "appleTouchIcon",
      title: "Apple touch icon",
      type: "image",
      options: { hotspot: true },
      description:
        "Icona usata da iPhone/iPad quando il sito viene salvato nella schermata Home. Consigliato 512x512."
    }),
    defineField({
      name: "defaultSeoImage",
      title: "Immagine SEO predefinita",
      type: "image",
      options: { hotspot: true },
      description: "Immagine usata come fallback per condivisioni social e Open Graph."
    })
  ],
  preview: {
    prepare() {
      return {
        title: "Impostazioni sito"
      };
    }
  }
});