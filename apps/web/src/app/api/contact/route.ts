import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  requestType?: string;
  message?: string;
  privacy?: string;
  website?: string;
};

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: NextRequest) {
  try {
    const payload = (await request.json()) as ContactPayload;

    const name = payload.name?.trim() || "";
    const email = payload.email?.trim() || "";
    const phone = payload.phone?.trim() || "";
    const requestType = payload.requestType?.trim() || "Informazioni generali";
    const message = payload.message?.trim() || "";
    const privacy = payload.privacy;
    const honeypot = payload.website?.trim() || "";

    if (honeypot) {
      return NextResponse.json({ ok: true });
    }

    if (!name || !email || !message || !privacy) {
      return NextResponse.json(
        { ok: false, message: "Campi obbligatori mancanti." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { ok: false, message: "Email non valida." },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { ok: false, message: "RESEND_API_KEY non configurata." },
        { status: 500 }
      );
    }

    const toEmail =
      process.env.CONTACT_TO_EMAIL || process.env.RESEND_CONTACT_TO_EMAIL || "lucianoiorio@hotmail.it";

    const fromEmail =
      process.env.RESEND_FROM_EMAIL || "Autolavaggio Iorio <onboarding@resend.dev>";

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone || "Non indicato");
    const safeRequestType = escapeHtml(requestType);
    const safeMessage = escapeHtml(message).replaceAll("\n", "<br />");

    const subject = `Nuova richiesta dal sito - ${requestType}`;

    const html = `
      <div style="font-family: Arial, sans-serif; color: #151A1F; line-height: 1.6;">
        <h1 style="margin:0 0 18px; font-size:24px;">Nuova richiesta dal sito Autolavaggio Iorio</h1>

        <table style="border-collapse: collapse; width: 100%; max-width: 680px;">
          <tr>
            <td style="padding:10px; border:1px solid #e5e7eb; font-weight:bold;">Nome</td>
            <td style="padding:10px; border:1px solid #e5e7eb;">${safeName}</td>
          </tr>
          <tr>
            <td style="padding:10px; border:1px solid #e5e7eb; font-weight:bold;">Email</td>
            <td style="padding:10px; border:1px solid #e5e7eb;">${safeEmail}</td>
          </tr>
          <tr>
            <td style="padding:10px; border:1px solid #e5e7eb; font-weight:bold;">Telefono</td>
            <td style="padding:10px; border:1px solid #e5e7eb;">${safePhone}</td>
          </tr>
          <tr>
            <td style="padding:10px; border:1px solid #e5e7eb; font-weight:bold;">Tipo richiesta</td>
            <td style="padding:10px; border:1px solid #e5e7eb;">${safeRequestType}</td>
          </tr>
        </table>

        <h2 style="margin:24px 0 10px; font-size:18px;">Messaggio</h2>
        <div style="padding:16px; border:1px solid #e5e7eb; background:#f9fafb; max-width:680px;">
          ${safeMessage}
        </div>

        <p style="margin-top:24px; color:#65717A; font-size:13px;">
          Il messaggio è stato inviato dal form contatti del sito.
        </p>
      </div>
    `;

    const text = `
Nuova richiesta dal sito Autolavaggio Iorio

Nome: ${name}
Email: ${email}
Telefono: ${phone || "Non indicato"}
Tipo richiesta: ${requestType}

Messaggio:
${message}
`;

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email,
      subject,
      html,
      text
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        { ok: false, message: "Errore durante l’invio dell’email." },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true, id: data?.id });
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      { ok: false, message: "Errore imprevisto durante l’invio." },
      { status: 500 }
    );
  }
}