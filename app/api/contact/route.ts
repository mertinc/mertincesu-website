import { Resend } from "resend";
import { NextRequest } from "next/server";

const MAX_NAME_LEN = 100;
const MAX_EMAIL_LEN = 254;
const MAX_SUBJECT_LEN = 200;
const MAX_MESSAGE_LEN = 5000;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// IP → [count, window_start_ms]
const rateMap = new Map<string, [number, number]>();
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 3;

// Periodically evict expired entries to prevent unbounded memory growth
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
    return Response.json({ error: "Too many requests" }, { status: 429 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { name, email, subject, message } = body as Record<string, unknown>;

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof subject !== "string" ||
    typeof message !== "string"
  ) {
    return Response.json({ error: "Invalid fields" }, { status: 400 });
  }

  if (!name.trim() || !email.trim() || !message.trim()) {
    return Response.json({ error: "Missing fields" }, { status: 400 });
  }

  if (name.length > MAX_NAME_LEN) {
    return Response.json({ error: "Name too long" }, { status: 400 });
  }
  if (email.length > MAX_EMAIL_LEN || !EMAIL_RE.test(email)) {
    return Response.json({ error: "Invalid email" }, { status: 400 });
  }
  if (subject.length > MAX_SUBJECT_LEN) {
    return Response.json({ error: "Subject too long" }, { status: 400 });
  }
  if (message.length > MAX_MESSAGE_LEN) {
    return Response.json({ error: "Message too long" }, { status: 400 });
  }

  try {
    await resend.emails.send({
      from: "contact@mertincesu.com",
      to: "contact@mertincesu.com",
      replyTo: email,
      subject: `[mertincesu.com] ${subject || "New message"}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    });
  } catch {
    return Response.json({ error: "Failed to send" }, { status: 500 });
  }

  return Response.json({ ok: true });
}
