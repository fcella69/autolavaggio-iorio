import { defineField, defineType } from "sanity";

export const header = defineType({
  name: "header",
  title: "Header",
  type: "document",
  fields: [
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      options: { hotspot: true },
      description:
        "Logo principale da mostrare nell’header. Per questo sito è consigliato il logo in bianco o comunque leggibile su fondo scuro."
    }),
    defineField({
      name: "logoAlt",
      title: "Alt logo",
      type: "string",
      initialValue: "Autolavaggio Iorio"
    }),
    defineField({
      name: "logoHref",
      title: "Link logo",
      type: "string",
      initialValue: "/"
    }),
    defineField({
      name: "cta",
      title: "CTA header",
      type: "cta"
    })
  ],
  preview: {
    prepare() {
      return {
        title: "Header"
      };
    }
  }
});