import Link from "next/link";
import { Container } from "@/components/ui/Container/Container";
import styles from "./Footer.module.css";
import { optimizeSanityImage } from "@/lib/sanity/image";

type FooterProps = {
  data?: {
    logoUrl?: string;
    logoAlt?: string;
    description?: string;
    contacts?: Array<{
      label?: string;
      value?: string;
      href?: string;
    }>;
    navigation?: Array<{
      label?: string;
      href?: string;
    }>;
    legalLinks?: Array<{
      label?: string;
      href?: string;
    }>;
    companyInfo?: {
      businessName?: string;
      vatNumber?: string;
      address?: string;
    };
    copyright?: string;
  } | null;
};

const fallbackNavigation = [
  { label: "Home", href: "/" },
  { label: "Chi Siamo", href: "/chi-siamo" },
  { label: "Servizi", href: "/servizi" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contatti", href: "/contatti" }
];

const fallbackContacts = [
  {
    label: "Indirizzo",
    value: "Via Agnano Astroni, 131/123 - 80125 Napoli",
    href: "/contatti#mappa"
  },
  {
    label: "Telefono",
    value: "+39 338 235 0148",
    href: "tel:+393382350148"
  },
  {
    label: "Email",
    value: "lucianoiorio@hotmail.it",
    href: "mailto:lucianoiorio@hotmail.it"
  }
];

const fallbackLegalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Cookie Policy", href: "/cookie-policy" }
];

export function Footer({ data }: FooterProps) {
  const navigation = data?.navigation?.length ? data.navigation : fallbackNavigation;
  const contacts = data?.contacts?.length ? data.contacts : fallbackContacts;
  const legalLinks = data?.legalLinks?.length ? data.legalLinks : fallbackLegalLinks;

  const businessName = data?.companyInfo?.businessName || "Autolavaggio Iorio S.R.L.";
  const vatNumber = data?.companyInfo?.vatNumber || "P.IVA 09235831212";
  const address = data?.companyInfo?.address || "Via Agnano Astroni, 131/123 - 80125 Napoli";

  const optimizedLogoUrl = optimizeSanityImage(data?.logoUrl, {
    width: 520,
    quality: 90,
    fit: "max"
  });

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.top}>
          <div className={styles.brand}>
            <Link href="/" className={styles.logoWrap} aria-label="Vai alla home">
              {optimizedLogoUrl ? (
                <img src={optimizedLogoUrl} alt={data?.logoAlt || "Autolavaggio Iorio"} />
              ) : (
                <span className={styles.logoFallback}>
                  <strong>Iorio</strong>
                  <small>Car Wash</small>
                </span>
              )}
            </Link>

            <p>
              {data?.description ||
                "Autolavaggio Iorio a Napoli Nord: lavaggio auto a mano, furgoni, camion, mezzi industriali, pulizia interni e sanificazione."}
            </p>
          </div>

          <div className={styles.columns}>
            <div className={styles.column}>
              <h3>Menu</h3>
              <nav aria-label="Menu footer">
                {navigation.map((item, index) => (
                  <Link href={item.href || "/"} key={`${item.label}-${index}`}>
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div className={styles.column}>
              <h3>Contatti</h3>
              <div className={styles.contactList}>
                {contacts.map((item, index) => {
                  const content = (
                    <>
                      <span>{item.label}</span>
                      <strong>{item.value}</strong>
                    </>
                  );

                  if (item.href) {
                    return (
                      <a href={item.href} key={`${item.label}-${index}`}>
                        {content}
                      </a>
                    );
                  }

                  return (
                    <div key={`${item.label}-${index}`}>
                      {content}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className={styles.column}>
              <h3>Azienda</h3>
              <div className={styles.companyInfo}>
                <strong>{businessName}</strong>
                <span>{vatNumber}</span>
                <span>{address}</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>
            {data?.copyright ||
              `© ${new Date().getFullYear()} Autolavaggio Iorio S.R.L. Tutti i diritti riservati.`}
          </p>

          <div className={styles.legal}>
            {legalLinks.map((item, index) => (
              <Link href={item.href || "/"} key={`${item.label}-${index}`}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}