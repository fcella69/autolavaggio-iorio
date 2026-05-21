type SanityImageFit = "crop" | "max" | "fill" | "clip" | "min" | "scale";

type SanityImageOptions = {
  width?: number;
  height?: number;
  quality?: number;
  fit?: SanityImageFit;
};

export function optimizeSanityImage(
  imageUrl?: string | null,
  options: SanityImageOptions = {}
) {
  if (!imageUrl) {
    return undefined;
  }

  const isSanityImage = imageUrl.includes("cdn.sanity.io/images/");

  if (!isSanityImage) {
    return imageUrl;
  }

  const url = new URL(imageUrl);

  url.searchParams.set("auto", "format");
  url.searchParams.set("q", String(options.quality ?? 80));

  if (options.width) {
    url.searchParams.set("w", String(options.width));
  }

  if (options.height) {
    url.searchParams.set("h", String(options.height));
  }

  if (options.fit) {
    url.searchParams.set("fit", options.fit);
  } else if (options.width && options.height) {
    url.searchParams.set("fit", "crop");
  } else {
    url.searchParams.set("fit", "max");
  }

  return url.toString();
}

export function sanityImageCss(
  imageUrl?: string | null,
  options: SanityImageOptions = {}
) {
  const optimizedUrl = optimizeSanityImage(imageUrl, options);

  return optimizedUrl ? `url(${optimizedUrl})` : undefined;
}