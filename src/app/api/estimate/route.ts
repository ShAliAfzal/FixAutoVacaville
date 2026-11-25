import { NextResponse } from "next/server";

type Body = {
  name?: string;
  phone?: string;
  email?: string;
  year?: string;
  make?: string;
  model?: string;
  service?: string;
  description?: string;
  preferredContact?: string;
  source?: string;
};

export async function POST(req: Request) {
  let body: Body;
  try {
    body = (await req.json()) as Body;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  const name = (body.name || "").trim();
  const phone = (body.phone || "").trim();

  if (!name || name.length < 2) {
    return NextResponse.json({ ok: false, error: "Name is required." }, { status: 400 });
  }
  if (!phone || phone.replace(/\D/g, "").length < 10) {
    return NextResponse.json(
      { ok: false, error: "A valid phone number is required." },
      { status: 400 },
    );
  }

  const payload = {
    ...body,
    name,
    phone,
    receivedAt: new Date().toISOString(),
  };

  const webhook = process.env.ESTIMATE_WEBHOOK_URL;

  if (webhook) {
    try {
      const res = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        return NextResponse.json(
          {
            ok: false,
            error: "We could not deliver your request. Please call the shop.",
          },
          { status: 502 },
        );
      }
      return NextResponse.json({ ok: true, delivered: true });
    } catch {
      return NextResponse.json(
        {
          ok: false,
          error: "We could not deliver your request. Please call the shop.",
        },
        { status: 502 },
      );
    }
  }

  // No CRM/webhook configured yet - accept the payload so the UX works in preview,
  // but flag that delivery is pending integration. Log for local/dev inspection.
  console.info("[estimate]", JSON.stringify(payload));
  return NextResponse.json({ ok: true, delivered: false });
}
