const seoProjection = `
  seo {
    title,
    description,
    keywords,
    canonicalPath,
    noIndex,
    "imageUrl": image.asset->url
  }
`;

const ctaProjection = `
  label,
  href,
  text
`;

const serviceCardProjection = `
  label,
  title,
  description,
  "imageUrl": image.asset->url,
  imageAlt
`;

const galleryImageProjection = `
  alt,
  caption,
  "imageUrl": image.asset->url
`;

export const settingsQuery = `
*[_type == "settings"][0] {
  siteName,
  siteUrl,
  "faviconUrl": favicon.asset->url,
  "appleTouchIconUrl": appleTouchIcon.asset->url,
  "defaultSeoImageUrl": defaultSeoImage.asset->url
}
`;

export const headerQuery = `
*[_type == "header"][0] {
  "logoUrl": logo.asset->url,
  logoAlt,
  logoHref,
  cta {
    ${ctaProjection}
  }
}
`;

export const footerQuery = `
*[_type == "footer"][0] {
  "logoUrl": logo.asset->url,
  logoAlt,
  description,
  contacts[] {
    label,
    value,
    href
  },
  navigation[] {
    label,
    href
  },
  legalLinks[] {
    label,
    href
  },
  companyInfo {
    businessName,
    vatNumber,
    address
  },
  copyright
}
`;

export const homeQuery = `
*[_type == "home"][0] {
  ${seoProjection},
  hero {
    eyebrow,
    title,
    subtitle,
    "backgroundImageUrl": backgroundImage.asset->url,
    backgroundImageAlt,
    "mobileBackgroundImageUrl": mobileBackgroundImage.asset->url,
    mobileBackgroundImageAlt,
    primaryCta {
      ${ctaProjection}
    },
    secondaryCta {
      ${ctaProjection}
    }
  },
  intro {
    eyebrow,
    title,
    text,
    stat {
      label,
      value,
      text
    },
    points[] {
      title,
      text
    }
  },
  servicesPreview {
    eyebrow,
    title,
    text,
    items[] {
      ${serviceCardProjection}
    },
    cta {
      ${ctaProjection}
    }
  },
  whyChoose {
    eyebrow,
    title,
    text,
    reasons[] {
      title,
      text
    }
  },
  galleryPreview {
    eyebrow,
    title,
    text,
    images[] {
      ${galleryImageProjection}
    },
    cta {
      ${ctaProjection}
    }
  },
  finalCta {
    eyebrow,
    title,
    text,
    contactCards[] {
      label,
      value
    },
    primaryCta {
      ${ctaProjection}
    },
    secondaryCta {
      ${ctaProjection}
    }
  }
}
`;

export const contactPageQuery = `
*[_type == "contactPage"][0] {
  ${seoProjection},
  hero {
    eyebrow,
    title,
    text,
    primaryCta {
      ${ctaProjection}
    },
    secondaryCta {
      ${ctaProjection}
    }
  },
  infoCards[] {
    label,
    value,
    href
  },
  formSection {
    eyebrow,
    title,
    text,
    "imageUrl": image.asset->url,
    imageAlt,
    requestTypes,
    labels {
      name,
      email,
      phone,
      requestType,
      message,
      privacy,
      submit
    },
    messages {
      success,
      error
    }
  },
  mapSection {
    eyebrow,
    title,
    text,
    address,
    mapEmbedUrl,
    googleMapsUrl,
    ctaLabel
  },
  finalCta {
    eyebrow,
    title,
    text,
    primaryCta {
      ${ctaProjection}
    },
    secondaryCta {
      ${ctaProjection}
    }
  }
}
`;

export const aboutPageQuery = `
*[_type == "aboutPage"][0] {
  ${seoProjection},
  hero {
    eyebrow,
    title,
    text,
    primaryCta {
      ${ctaProjection}
    },
    secondaryCta {
      ${ctaProjection}
    }
  },
  story {
    eyebrow,
    title,
    text,
    sideLabel,
    sideTitle,
    sideText,
    highlights[] {
      label,
      value
    }
  },
  industrial {
    eyebrow,
    title,
    text,
    "imageUrl": image.asset->url,
    imageAlt,
    items[] {
      title,
      text
    }
  },
  values {
    eyebrow,
    title,
    text,
    items[] {
      title,
      text
    }
  },
  advancedServices {
    eyebrow,
    title,
    text,
    items[] {
      title,
      text
    }
  },
  finalCta {
    eyebrow,
    title,
    text,
    primaryCta {
      ${ctaProjection}
    },
    secondaryCta {
      ${ctaProjection}
    }
  }
}
`;

export const servicesPageQuery = `
*[_type == "servicesPage"][0] {
  ${seoProjection},
  hero {
    eyebrow,
    title,
    text,
    primaryCta {
      ${ctaProjection}
    },
    secondaryCta {
      ${ctaProjection}
    }
  },
  intro {
    eyebrow,
    title,
    text,
    highlights[] {
      label,
      value
    }
  },
  completeWash {
    eyebrow,
    title,
    text,
    "imageUrl": image.asset->url,
    imageAlt
  },
  servicesGrid {
    eyebrow,
    title,
    text,
    items[] {
      label,
      title,
      description
    }
  },
  process {
    eyebrow,
    title,
    text,
    steps[] {
      title,
      text,
      "imageUrl": image.asset->url,
      imageAlt
    }
  },
  extraInfo {
    eyebrow,
    title,
    text,
    items[] {
      title,
      text
    }
  },
  finalCta {
    eyebrow,
    title,
    text,
    primaryCta {
      ${ctaProjection}
    },
    secondaryCta {
      ${ctaProjection}
    }
  }
}
`;

export const galleryPageQuery = `
*[_type == "galleryPage"][0] {
  ${seoProjection},
  hero {
    eyebrow,
    title,
    text,
    primaryCta {
      ${ctaProjection}
    },
    secondaryCta {
      ${ctaProjection}
    }
  },
  intro {
    eyebrow,
    title,
    text
  },
  gallery {
    images[] {
      ${galleryImageProjection}
    }
  },
  videoSection {
    eyebrow,
    title,
    text,
    youtubeUrl,
    videoTitle
  },
  finalCta {
    eyebrow,
    title,
    text,
    primaryCta {
      ${ctaProjection}
    },
    secondaryCta {
      ${ctaProjection}
    }
  }
}
`;


export const privacyPolicyPageQuery = `
*[_type == "privacyPolicyPage"][0] {
  ${seoProjection},
  hero {
    eyebrow,
    title,
    text
  },
  lastUpdated,
  sections[] {
    title,
    text
  }
}
`;

export const cookiePolicyPageQuery = `
*[_type == "cookiePolicyPage"][0] {
  ${seoProjection},
  hero {
    eyebrow,
    title,
    text
  },
  lastUpdated,
  sections[] {
    title,
    text
  }
}
`;