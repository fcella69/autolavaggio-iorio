import { NextResponse } from "next/server";

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  message?: unknown;
  privacy?: unknown;
};

function isNonEmptyString(value: unknown, minLength = 1): value is string {
  return typeof value === "string" && value.trim().length >= minLength;
}

function isValidEmail(value: unknown): value is string {
  return typeof value === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  if (
    !isNonEmptyString(payload.name, 2) ||
    !isValidEmail(payload.email) ||
    !isNonEmptyString(payload.message, 10) ||
    payload.privacy !== "accepted"
  ) {
    return NextResponse.json({ error: "Invalid form fields" }, { status: 422 });
  }

  const sanitized = {
    name: payload.name.trim(),
    email: payload.email.trim(),
    phone: typeof payload.phone === "string" ? payload.phone.trim() : "",
    message: payload.message.trim()
  };

  console.info("Contact request received", sanitized);

  return NextResponse.json({
    ok: true,
    message: "Contact request accepted. Configure an email provider to deliver it."
  });
}
