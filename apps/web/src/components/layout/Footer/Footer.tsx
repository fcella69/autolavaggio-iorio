import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container/Container";
import styles from "./Footer.module.css";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Chi Siamo", href: "/chi-siamo" },
  { label: "Servizi", href: "/servizi" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contatti", href: "/contatti" }
];

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Container className={styles.grid}>
        <div>
          <Image src="/logo-placeholder.svg" alt="Autolavaggio Iorio" width={220} height={48} />
          <p>
            Autolavaggio a mano a Napoli per auto, veicoli commerciali e mezzi industriali.
          </p>
        </div>
        <div>
          <h2>Menu</h2>
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>{item.label}</Link>
          ))}
        </div>
        <div>
          <h2>Contatti</h2>
          <p>Via Agnano Astroni, 123/131 - Napoli</p>
          <p>Tel. da definire</p>
          <p>Email da definire</p>
        </div>
        <div>
          <h2>Orari</h2>
          <p>Lun - Sab: 08:00 - 19:00</p>
          <p>Domenica: chiuso</p>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/cookie-policy">Cookie Policy</Link>
        </div>
      </Container>
      <Container>
        <div className={styles.bottom}>
          <span>Autolavaggio Iorio S.R.L.</span>
          <span>P.IVA e dati societari da completare</span>
        </div>
      </Container>
    </footer>
  );
}
