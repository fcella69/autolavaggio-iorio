"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/Button/Button";
import styles from "./Header.module.css";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Chi Siamo", href: "/chi-siamo" },
  { label: "Servizi", href: "/servizi" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contatti", href: "/contatti" }
];

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo} aria-label="Autolavaggio Iorio">
        <Image src="/logo-placeholder.svg" alt="Autolavaggio Iorio" width={220} height={48} priority />
      </Link>

      <nav className={styles.desktopNav} aria-label="Menu principale">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={pathname === item.href ? styles.active : undefined}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <div className={styles.actions}>
        <Button href="/contatti" variant="primary">Contattaci</Button>
        <button
          className={styles.menuButton}
          type="button"
          aria-label="Apri menu"
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
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
              {item.label}
            </Link>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
