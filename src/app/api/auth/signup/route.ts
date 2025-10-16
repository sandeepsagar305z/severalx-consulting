import { NextRequest, NextResponse } from 'next/server';
import * as bcrypt from 'bcryptjs';

// This is a simple in-memory store - in production, you'd use a database
interface User {
  id: string;
  name: string;
  email: string;
  company: string;
  password: string;
  createdAt: string;
}

const users: User[] = [];

async function createTransporter() {
  // Reuse the same transporter logic from contact route
  if (process.env.USE_MOCK_EMAIL === 'true') {
    const { default: nodemailer } = await import('nodemailer');
    return nodemailer.createTransport({
      jsonTransport: true
    });
  }

  const port = parseInt(process.env.SMTP_PORT || '587');
  const secure = typeof process.env.SMTP_SECURE !== 'undefined'
    ? process.env.SMTP_SECURE === 'true'
    : port === 465;

  const config = {
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
  };

  const { default: nodemailer } = await import('nodemailer');
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return nodemailer.createTransport(config as any);
}

export async function POST(request: NextRequest) {
  try {
    const { name, email, company, password } = await request.json();

    if (!name || !email || !company || !password) {
      return NextResponse.json({ message: 'All fields are required' }, { status: 400 });
    }

    // Check if user already exists
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
      return NextResponse.json({ message: 'User already exists' }, { status: 400 });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create user
    const user = {
      id: Date.now().toString(),
      name,
      email,
      company,
      password: hashedPassword,
      createdAt: new Date().toISOString(),
    };

    users.push(user);

    // Send welcome email
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const transporter = await createTransporter() as any;

      const welcomeEmail = {
        from: `"Severalx Consulting" <${process.env.SMTP_FROM_EMAIL}>`,
        to: email,
        subject: 'Welcome to Severalx Consulting Chat',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%); color: white; padding: 40px; border-radius: 12px;">
            <div style="text-align: center; margin-bottom: 30px;">
              <h1 style="background: linear-gradient(to right, #63b583, #4a9666); -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin: 0; font-size: 28px;">Welcome to Severalx Consulting!</h1>
            </div>
            <p style="color: #e5e5e5; font-size: 16px; line-height: 1.6;">Hi ${name},</p>
            <p style="color: #e5e5e5; font-size: 16px; line-height: 1.6;">Thank you for signing up! You can now access our AI consulting assistant at <a href="https://chat.severalxconsulting.com" style="color: #63b583; text-decoration: none; font-weight: bold;">chat.severalxconsulting.com</a></p>
            <div style="background: rgba(99,181,131,0.1); border: 1px solid rgba(99,181,131,0.2); border-radius: 8px; padding: 20px; margin: 20px 0;">
              <h3 style="color: #63b583; margin: 0 0 15px 0;">Your account details:</h3>
              <ul style="color: #e5e5e5; padding-left: 20px;">
                <li><strong>Name:</strong> ${name}</li>
                <li><strong>Email:</strong> ${email}</li>
                <li><strong>Company:</strong> ${company}</li>
              </ul>
            </div>
            <p style="color: #e5e5e5; font-size: 16px; line-height: 1.6;">If you have any questions, feel free to reply to this email.</p>
            <div style="text-align: center; margin-top: 30px;">
              <a href="https://chat.severalxconsulting.com" style="background: linear-gradient(to right, #63b583, #4a9666); color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold; display: inline-block;">Access Chat Now</a>
            </div>
            <p style="color: #888; font-size: 14px; text-align: center; margin-top: 30px;">Best regards,<br>The Severalx Consulting Team</p>
          </div>
        `,
      };

      await transporter.sendMail(welcomeEmail);
    } catch (emailError) {
      console.error('Failed to send welcome email:', emailError);
      // Don't fail the signup if email fails
    }

    return NextResponse.json({ message: 'Account created successfully' });
  } catch (error) {
    console.error('Signup error:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
