import { NextRequest, NextResponse } from 'next/server'
import * as nodemailer from 'nodemailer'
import { generateAdminEmailTemplate, generateAutoResponseTemplate } from '@/lib/email-templates'

function buildTimestamp(): string {
  return new Date().toLocaleString('en-US', {
    timeZone: 'America/Los_Angeles',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  })
}

async function createTransporter() {
  // Use mock transporter only if explicitly enabled, regardless of environment
  if (process.env.USE_MOCK_EMAIL === 'true') {
    console.log('🔧 Using mock email transporter (explicitly enabled)')
    const { default: nodemailer } = await import('nodemailer')
    return nodemailer.createTransport({
      jsonTransport: true // Logs emails to console instead of sending
    })
  }

  const port = parseInt(process.env.SMTP_PORT || '587')
  const secure = typeof process.env.SMTP_SECURE !== 'undefined'
    ? process.env.SMTP_SECURE === 'true'
    : port === 465

  const config: any = {
    host: process.env.SMTP_HOST,
    port,
    secure,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS as string,
    },
    requireTLS: process.env.SMTP_REQUIRE_TLS ? process.env.SMTP_REQUIRE_TLS === 'true' : (port === 587),
    tls: {
      rejectUnauthorized: process.env.SMTP_REJECT_UNAUTHORIZED === 'true' ? true : false,
      minVersion: 'TLSv1.2',
    },
    name: process.env.SMTP_NAME,
    pool: true,
    maxConnections: 3,
    maxMessages: 50,
    connectionTimeout: 30000,
    socketTimeout: 30000,
    greetingTimeout: 20000,
    debug: process.env.SMTP_DEBUG === 'true',
    logger: process.env.SMTP_DEBUG === 'true',
  }

  return nodemailer.createTransport(config)
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, message, service } = body

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Name, email, and message are required fields.' }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Please provide a valid email address.' }, { status: 400 })
    }

    const requiredEnvVars = ['SMTP_HOST', 'SMTP_PORT', 'SMTP_USER', 'SMTP_PASS', 'SMTP_FROM_EMAIL', 'SMTP_TO_EMAIL']
    const missingEnvVars = requiredEnvVars.filter((envVar) => !process.env[envVar])
    if (missingEnvVars.length > 0) {
      console.error('Missing environment variables:', missingEnvVars)
      return NextResponse.json({ error: 'Server configuration error. Please contact support.' }, { status: 500 })
    }

    const transporter = await createTransporter()

    try {
      await transporter.verify()
    } catch (e: any) {
      console.error('SMTP verification failed:', e.message)
      console.error('SMTP config:', {
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        user: process.env.SMTP_USER ? '***' : 'undefined',
        pass: process.env.SMTP_PASS ? '***' : 'undefined',
        secure: process.env.SMTP_SECURE,
      })
      return NextResponse.json({ error: 'Email service is currently unavailable. Please try again later.' }, { status: 500 })
    }

    const timestamp = buildTimestamp()

    const adminMailOptions = {
      from: `"Severalx Consulting Contact Form" <${process.env.SMTP_FROM_EMAIL}>`,
      to: process.env.SMTP_TO_EMAIL,
      subject: `New Contact Form Submission from ${name}`,
      html: generateAdminEmailTemplate({
        name,
        email,
        phone: phone || 'Not provided',
        service: service || 'Not specified',
        message,
        timestamp,
      }),
      replyTo: email,
    }

    const userMailOptions = {
      from: `"Severalx Consulting" <${process.env.SMTP_FROM_EMAIL}>`,
      to: email,
      subject: 'Thank you for contacting Severalx Consulting - We will be in touch soon!',
      html: generateAutoResponseTemplate({
        name,
        email,
        phone: phone || 'Not provided',
        service: service || 'Not specified',
        message,
        timestamp,
        responseTime: 'within 24-48 hours',
        companyPhone: '(646) 345-1741',
        companyWebsite: 'https://severalx.com',
        calendarLink: 'https://severalx.com',
      }),
    }

    const results = await Promise.allSettled([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(userMailOptions),
    ])

    if (results[0].status === 'rejected') {
      console.error('Failed to send admin email:', results[0].reason)
      return NextResponse.json({ error: 'Failed to send confirmation email. Please try again or contact us directly.' }, { status: 500 })
    }

    if (results[1].status === 'rejected') {
      console.warn('Failed to send user auto-response email:', results[1].reason)
      // Still return success since admin email was sent
    }

    return NextResponse.json({
      success: true,
      message: 'Your message has been sent successfully! We will be in touch soon.'
    })
  } catch (error: any) {
    console.error('Contact form error:', error)
    return NextResponse.json({ error: 'An unexpected error occurred. Please try again later.' }, { status: 500 })
  }
}
