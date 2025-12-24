import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

const RATE_LIMIT = new Map<string, number[]>()
const LIMIT = 5 // max requests
const WINDOW = 10 * 60 * 1000 // 10 minutes

function isRateLimited(ip: string) {
  const now = Date.now()
  const timestamps = RATE_LIMIT.get(ip) || []
  const recent = timestamps.filter((t) => now - t < WINDOW)

  if (recent.length >= LIMIT) return true

  recent.push(now)
  RATE_LIMIT.set(ip, recent)
  return false
}

export async function POST(req: Request) {
  try {
    const ip =
      req.headers.get("x-forwarded-for") ||
      req.headers.get("x-real-ip") ||
      "unknown"

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { success: false, error: "Too many requests" },
        { status: 429 }
      )
    }

    const { token, name, email, company, phone, service, message } =
      await req.json()

    /* ✅ reCAPTCHA verification */
    const captchaRes = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
      }
    )

    const captcha = await captchaRes.json()
    if (!captcha.success || captcha.score < 0.5) {
      return NextResponse.json(
        { success: false, error: "Captcha failed" },
        { status: 400 }
      )
    }

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    /* ✅ Admin email */
    await transporter.sendMail({
      from: `"Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: "New Contact Form Submission",
      html: `
        <h3>New Message</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Company:</b> ${company || "-"}</p>
        <p><b>Phone:</b> ${phone || "-"}</p>
        <p><b>Service:</b> ${service}</p>
        <p><b>Message:</b></p>
        <p>${message}</p>
      `,
    })

    /* ✅ Auto-reply */
    await transporter.sendMail({
      from: `"Support Team" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "We received your message",
      html: `
        <p>Hi ${name},</p>
        <p>Thanks for contacting us. Our team will reach out shortly.</p>
        <br/>
        <p>Regards,<br/>Team</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error(err)
    return NextResponse.json(
      { success: false },
      { status: 500 }
    )
  }
}
