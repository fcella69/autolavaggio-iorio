import { aboutPage } from "./documents/aboutPage";
import { contactPage } from "./documents/contactPage";
import { cookiePolicyPage } from "./documents/cookiePolicyPage";
import { footer } from "./documents/footer";
import { galleryPage } from "./documents/galleryPage";
import { header } from "./documents/header";
import { home } from "./documents/home";
import { privacyPolicyPage } from "./documents/privacyPolicyPage";
import { servicesPage } from "./documents/servicesPage";
import { settings } from "./documents/settings";
import { contactInfo } from "./objects/contactInfo";
import { cta } from "./objects/cta";
import { galleryImage } from "./objects/galleryImage";
import { seo } from "./objects/seo";
import { serviceCard } from "./objects/serviceCard";

export const schemaTypes = [
  seo,
  galleryImage,
  serviceCard,
  contactInfo,
  cta,
  home,
  aboutPage,
  servicesPage,
  galleryPage,
  contactPage,
  privacyPolicyPage,
  cookiePolicyPage,
  header,
  footer,
  settings
];
