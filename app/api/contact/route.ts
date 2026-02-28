import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => null);
    if (!body) return NextResponse.json({ error: "Invalid request body" }, { status: 400 });

    const { name, email, message } = body;
    if (!name || !email || !message) return NextResponse.json({ error: "All fields required" }, { status: 400 });

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return NextResponse.json({ error: "Invalid email" }, { status: 400 });

    const sanitize = (str: string) => str.replace(/<[^>]*>/g, "").trim();
    const safeName = sanitize(String(name)).slice(0, 100);
    const safeEmail = sanitize(String(email)).slice(0, 100);
    const safeMessage = sanitize(String(message)).slice(0, 2000);

    await resend.emails.send({
      from: "Bayou Innovation Hub <onboarding@resend.dev>",
      to: "SE_LA_AI@Outlook.com",
      subject: `New message from ${safeName}`,
      html: `<h2>New Contact Form Submission</h2><p><strong>Name:</strong> ${safeName}</p><p><strong>Email:</strong> ${safeEmail}</p><p><strong>Message:</strong></p><p>${safeMessage}</p>`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Failed to send message." }, { status: 500 });
  }
}
