import { Resend } from "resend";
import { NextRequest } from "next/server";

const MAX_NAME_LEN = 100;
const MAX_EMAIL_LEN = 254;
const MAX_MESSAGE_LEN = 5000;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// All valid subject values across all supported locales (en / de / tr)
const VALID_SUBJECTS = new Set([
  "Hiring / role opportunity",
  "Contract or project-based engagement",
  "Long-term client or consultancy",
  "Open-source collaboration",
  "Personal project",
  "Other",
  "Recruiting / Stellenangebot",
  "Vertrags- oder projektbasierte Zusammenarbeit",
  "Langfristige Zusammenarbeit oder Beratung",
  "Open-Source-Zusammenarbeit",
  "Persönliches Projekt",
  "Sonstiges",
  "İşe alım / rol fırsatı",
  "Sözleşmeli veya proje bazlı çalışma",
  "Uzun vadeli müşteri veya danışmanlık",
  "Açık kaynak iş birliği",
  "Kişisel proje",
  "Diğer",
]);

// IP → [count, window_start_ms]
const rateMap = new Map<string, [number, number]>();
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 3;

setInterval(() => {
  const now = Date.now();
  for (const [ip, [, start]] of rateMap) {
    if (now - start > WINDOW_MS) rateMap.delete(ip);
  }
}, WINDOW_MS);

function getIP(req: NextRequest): string {
  return (
    req.headers.get("cf-connecting-ip") ??
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
    "unknown"
  );
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateMap.get(ip);
  if (!entry || now - entry[1] > WINDOW_MS) {
    rateMap.set(ip, [1, now]);
    return false;
  }
  if (entry[0] >= MAX_PER_WINDOW) return true;
  entry[0]++;
  return false;
}

// Strips CR/LF to prevent email header injection
function stripControl(s: string): string {
  return s.replace(/[\r\n]+/g, " ").trim();
}

export async function POST(req: NextRequest) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return Response.json({ error: "Email service not configured" }, { status: 500 });
  }
  const resend = new Resend(apiKey);

  if (req.headers.get("content-type") !== "application/json") {
    return Response.json({ error: "Invalid content type" }, { status: 415 });
  }

  if (isRateLimited(getIP(req))) {
    return Response.json(
      { error: "Too many requests" },
      { status: 429, headers: { "Retry-After": String(Math.ceil(WINDOW_MS / 1000)) } },
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { name, email, subject, message, website } = body as Record<string, unknown>;

  // Honeypot: real users leave this empty; bots fill it
  if (website) return Response.json({ ok: true });

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof subject !== "string" ||
    typeof message !== "string"
  ) {
    return Response.json({ error: "Invalid fields" }, { status: 400 });
  }

  const safeName = stripControl(name);
  const safeEmail = stripControl(email);
  const safeSubject = stripControl(subject);
  const safeMessage = message.replace(/\r\n/g, "\n").replace(/\r/g, "\n").trim();

  if (!safeName || !safeEmail || !safeMessage) {
    return Response.json({ error: "Missing fields" }, { status: 400 });
  }

  if (safeName.length > MAX_NAME_LEN) {
    return Response.json({ error: "Name too long" }, { status: 400 });
  }
  if (safeEmail.length > MAX_EMAIL_LEN || !EMAIL_RE.test(safeEmail)) {
    return Response.json({ error: "Invalid email" }, { status: 400 });
  }
  if (safeSubject && !VALID_SUBJECTS.has(safeSubject)) {
    return Response.json({ error: "Invalid subject" }, { status: 400 });
  }
  if (safeMessage.length > MAX_MESSAGE_LEN) {
    return Response.json({ error: "Message too long" }, { status: 400 });
  }

  try {
    await resend.emails.send({
      from: "contact@mertincesu.com",
      to: "contact@mertincesu.com",
      replyTo: safeEmail,
      subject: `[mertincesu.com] ${safeSubject || "New message"}`,
      text: `From: ${safeName} <${safeEmail}>\n\n${safeMessage}`,
    });
  } catch {
    return Response.json({ error: "Failed to send" }, { status: 500 });
  }

  return Response.json({ ok: true });
}
