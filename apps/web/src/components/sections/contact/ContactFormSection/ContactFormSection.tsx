"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/Button/Button";
import { Container } from "@/components/ui/Container/Container";
import { Section } from "@/components/ui/Section/Section";
import styles from "./ContactFormSection.module.css";

export function ContactFormSection() {
  const [status, setStatus] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("Invio in corso...");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const response = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(Object.fromEntries(formData.entries())),
      headers: {
        "Content-Type": "application/json"
      }
    });

    setStatus(response.ok ? "Richiesta registrata. Collegare un servizio email per l'invio reale." : "Controlla i campi e riprova.");
    if (response.ok) {
      form.reset();
    }
  }

  return (
    <Section>
      <Container>
        <div className="content-grid">
          <div>
            <span className="eyebrow">Scrivici</span>
            <h2 className="section-heading">Richiedi informazioni.</h2>
            <p className="section-lead">
              Il form è validato lato API e pronto per un futuro collegamento email o CRM.
            </p>
          </div>
          <form className={styles.form} onSubmit={handleSubmit}>
            <label>
              Nome
              <input name="name" required minLength={2} />
            </label>
            <label>
              Email
              <input name="email" type="email" required />
            </label>
            <label>
              Telefono
              <input name="phone" type="tel" />
            </label>
            <label>
              Messaggio
              <textarea name="message" required minLength={10} rows={5} />
            </label>
            <label className={styles.privacy}>
              <input name="privacy" type="checkbox" value="accepted" required />
              Accetto il trattamento dei dati secondo la Privacy Policy.
            </label>
            <Button type="submit">Invia richiesta</Button>
            {status ? <p className={styles.status}>{status}</p> : null}
          </form>
        </div>
      </Container>
    </Section>
  );
}
