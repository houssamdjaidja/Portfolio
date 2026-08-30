import { NextRequest, NextResponse } from "next/server";
import dns from "node:dns";

dns.setDefaultResultOrder("ipv4first");

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || "";
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID || "";

async function sendTelegramMessage(body: unknown) {
  let lastError: unknown;

  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      const res = await fetch(
        `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
          cache: "no-store",
          signal: AbortSignal.timeout(15000),
        }
      );

      if (res.ok) return res;

      const err = await res.text();
      lastError = new Error(`Telegram API error: ${err}`);
    } catch (err) {
      lastError = err;
    }

    if (attempt < 2) {
      await new Promise((r) => setTimeout(r, 1000 * (attempt + 1)));
    }
  }

  throw lastError;
}

export async function POST(req: NextRequest) {
  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
    return NextResponse.json(
      { error: "Telegram bot not configured" },
      { status: 500 }
    );
  }

  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "All fields required" }, { status: 400 });
    }

    const text = [
      "New Portfolio Message",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      "",
      `Message:`,
      message,
    ].join("\n");

    await sendTelegramMessage({ chat_id: Number(TELEGRAM_CHAT_ID), text });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Server error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}