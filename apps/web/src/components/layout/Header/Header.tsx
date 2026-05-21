"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/Button/Button";
import styles from "./Header.module.css";
import { optimizeSanityImage } from "@/lib/sanity/image";

type HeaderProps = {
  data?: {
    logoUrl?: string;
    logoAlt?: string;
    logoHref?: string;
    cta?: {
      label?: string;
      href?: string;
    };
  } | null;
};

const navItems = [
  { label: "Home", href: "/" },
  { label: "Chi Siamo", href: "/chi-siamo" },
  { label: "Servizi", href: "/servizi" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contatti", href: "/contatti" }
];

export function Header({ data }: HeaderProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const logoHref = data?.logoHref || "/";
  const ctaLabel = data?.cta?.label || "Contattaci";
  const ctaHref = data?.cta?.href || "/contatti";
  const optimizedLogoUrl = optimizeSanityImage(data?.logoUrl, {
    width: 420,
    quality: 90,
    fit: "max"
  });

  return (
    <header className={styles.header}>
      <Link href={logoHref} className={styles.logoBadge} aria-label="Vai alla home">
        <span className={styles.logoCircle}>
          {optimizedLogoUrl ? (
            <img src={optimizedLogoUrl} alt={data?.logoAlt || "Autolavaggio Iorio"} />
          ) : (
            <span className={styles.logoFallback}>
              <strong>Iorio</strong>
              <small>Car Wash</small>
            </span>
          )}
        </span>
      </Link>

      <nav className={styles.desktopNav} aria-label="Menu principale">
        {navItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={isActive ? styles.active : undefined}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className={styles.actions}>
        <Button href={ctaHref} variant="primary" className={styles.headerCta}>
          {ctaLabel}
        </Button>

        <button
          className={`${styles.menuButton} ${isOpen ? styles.menuButtonOpen : ""}`}
          type="button"
          aria-label={isOpen ? "Chiudi menu" : "Apri menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {isOpen ? (
        <nav className={styles.mobileNav} aria-label="Menu mobile">
          <div className={styles.mobileNavInner}>
            {navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={isActive ? styles.mobileActive : undefined}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}

            <Button href={ctaHref} variant="primary" className={styles.mobileCta}>
              {ctaLabel}
            </Button>
          </div>
        </nav>
      ) : null}
    </header>
  );
}