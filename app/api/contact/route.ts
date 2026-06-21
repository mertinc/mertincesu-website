import { Resend } from "resend";
import { NextRequest } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY!);

// IP → [count, window_start_ms]
const rateMap = new Map<string, [number, number]>();
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 3;

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
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown";
  if (isRateLimited(ip)) {
    return Response.json({ error: "Too many requests" }, { status: 429 });
  }

  const { name, email, subject, message } = await req.json();

  if (!name || !email || !message) {
    return Response.json({ error: "Missing fields" }, { status: 400 });
  }

  await resend.emails.send({
    from: "contact@mertincesu.com",
    to: "contact@mertincesu.com",
    replyTo: email,
    subject: `[mertincesu.com] ${subject || "New message"}`,
    text: `From: ${name} <${email}>\n\n${message}`,
  });

  return Response.json({ ok: true });
}
