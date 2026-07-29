import { NextResponse } from 'next/server';
import { EMAIL } from '@/lib/socialLinks';

// Sends the contact form via Resend (https://resend.com — free tier is plenty).
// Setup: create a Resend account with the site's contact email, generate an API key,
// then set RESEND_API_KEY in Vercel (Project → Settings → Environment Variables).
// Until the key is set this returns 503 and the form falls back to WhatsApp,
// so nothing breaks in the meantime.
//
// The onboarding@resend.dev sender works without domain verification but can only
// deliver to the Resend account owner's own address — which is exactly what this
// does. When the custom domain is live, verify it in Resend and switch `from`
// to something like contact@<domain> for better deliverability.

const MAX_LENGTHS = { name: 200, email: 320, message: 5000 };

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: 'Email is not configured' }, { status: 503 });
  }

  let body: { name?: string; email?: string; message?: string; company?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }

  // Honeypot: the visible form never fills "company". Bots do. Pretend success.
  if (body.company) {
    return NextResponse.json({ ok: true });
  }

  const name = body.name?.trim() ?? '';
  const email = body.email?.trim() ?? '';
  const message = body.message?.trim() ?? '';

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
  }
  if (
    name.length > MAX_LENGTHS.name ||
    email.length > MAX_LENGTHS.email ||
    message.length > MAX_LENGTHS.message ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  ) {
    return NextResponse.json({ error: 'Invalid input' }, { status: 400 });
  }

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: [EMAIL],
      reply_to: email,
      subject: `New project inquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    }),
  });

  if (!response.ok) {
    return NextResponse.json({ error: 'Failed to send' }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
