"use client";

import type { CSSProperties, FormEvent } from "react";
import { useState } from "react";
import { Button } from "@/components/ui/Button/Button";
import { Container } from "@/components/ui/Container/Container";
import { sanityImageCss } from "@/lib/sanity/image";
import styles from "./ContactFormSection.module.css";

type ContactFormSectionProps = {
  data?: {
    eyebrow?: string;
    title?: string;
    text?: string;
    imageUrl?: string;
    imageAlt?: string;
    requestTypes?: string[];
    labels?: {
      name?: string;
      email?: string;
      phone?: string;
      requestType?: string;
      message?: string;
      privacy?: string;
      submit?: string;
    };
    messages?: {
      success?: string;
      error?: string;
    };
  };
};

const fallbackRequestTypes = [
  "Lavaggio auto a mano",
  "Lavaggio furgoni / veicoli commerciali",
  "Lavaggio camion / mezzi industriali",
  "Sanificazione auto",
  "Informazioni generali"
];

const fallbackLabels = {
  name: "Nome e cognome",
  email: "Email",
  phone: "Telefono",
  requestType: "Tipo di richiesta",
  message: "Messaggio",
  privacy: "Ho letto l’informativa privacy e acconsento al trattamento dei dati.",
  submit: "Invia richiesta"
};

const fallbackMessages = {
  success: "Richiesta inviata correttamente. Ti ricontatteremo appena possibile.",
  error: "Si è verificato un errore. Riprova tra qualche minuto o contattaci telefonicamente."
};

export function ContactFormSection({ data }: ContactFormSectionProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const labels = {
    ...fallbackLabels,
    ...data?.labels
  };

  const messages = {
    ...fallbackMessages,
    ...data?.messages
  };

  const requestTypes = data?.requestTypes?.length ? data.requestTypes : fallbackRequestTypes;

  const imageStyle = data?.imageUrl
    ? ({
        "--contact-form-image": sanityImageCss(data.imageUrl, {
          width: 800,
          height: 800,
          quality: 80,
          fit: "crop"
        })
      } as CSSProperties)
    : undefined;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    setStatus("loading");

    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      let result: { ok?: boolean; success?: boolean; error?: string } | null = null;

      try {
        result = await response.json();
      } catch {
        result = null;
      }

      if (!response.ok || (!result?.ok && !result?.success)) {
        throw new Error(result?.error || "Contact API error");
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.grid}>
          <div className={styles.copy}>
            <span className="eyebrow">{data?.eyebrow || "Richiedi informazioni"}</span>
            <h2>{data?.title || "Hai bisogno di informazioni?"}</h2>
            <p>
              {data?.text ||
                "Scrivici per ricevere informazioni sui servizi di lavaggio, sanificazione, trattamento interni o lavaggio di veicoli commerciali e mezzi industriali."}
            </p>

            <div
              className={`${styles.copyImage} ${data?.imageUrl ? styles.hasImage : ""}`}
              style={imageStyle}
              role="img"
              aria-label={data?.imageAlt || "Autolavaggio Iorio"}
            >
              {!data?.imageUrl ? <span>Immagine quadrata da Sanity</span> : null}
            </div>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              style={{
                position: "absolute",
                left: "-9999px",
                opacity: 0,
                pointerEvents: "none"
              }}
            />

            <div className={styles.field}>
              <label htmlFor="name">{labels.name}</label>
              <input id="name" name="name" type="text" required />
            </div>

            <div className={styles.field}>
              <label htmlFor="email">{labels.email}</label>
              <input id="email" name="email" type="email" required />
            </div>

            <div className={styles.field}>
              <label htmlFor="phone">{labels.phone}</label>
              <input id="phone" name="phone" type="tel" />
            </div>

            <div className={styles.field}>
              <label htmlFor="requestType">{labels.requestType}</label>
              <select id="requestType" name="requestType" defaultValue={requestTypes[0]}>
                {requestTypes.map((type) => (
                  <option value={type} key={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            <div className={styles.field}>
              <label htmlFor="message">{labels.message}</label>
              <textarea id="message" name="message" required />
            </div>

            <label className={styles.privacy}>
              <input name="privacy" type="checkbox" required />
              <span>{labels.privacy}</span>
            </label>

            {status === "success" ? (
              <div className={`${styles.status} ${styles.success}`}>{messages.success}</div>
            ) : null}

            {status === "error" ? (
              <div className={`${styles.status} ${styles.error}`}>{messages.error}</div>
            ) : null}

            <Button type="submit">
              {status === "loading" ? "Invio in corso..." : labels.submit}
            </Button>
          </form>
        </div>
      </Container>
    </section>
  );
}