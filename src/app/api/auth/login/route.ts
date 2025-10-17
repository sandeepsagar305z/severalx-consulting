import { NextRequest, NextResponse } from 'next/server';
const LIBRECHAT_API_BASE =
  process.env.LIBRECHAT_API_BASE ??
  process.env.NEXT_PUBLIC_LIBRECHAT_API_BASE ??
  '';

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json({ message: 'Email and password are required' }, { status: 400 });
    }

    if (!LIBRECHAT_API_BASE) {
      throw new Error('LIBRECHAT_API_BASE is not configured');
    }

    const libreChatResponse = await fetch(`${LIBRECHAT_API_BASE.replace(/\/$/, '')}/api/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
      redirect: 'manual',
    });

    const payload = await libreChatResponse.json().catch(() => ({}));
    const response = NextResponse.json(payload, { status: libreChatResponse.status });

    const headers = libreChatResponse.headers as unknown as { getSetCookie?: () => string[] };
    const setCookieHeaders = headers.getSetCookie?.();
    if (setCookieHeaders && setCookieHeaders.length > 0) {
      setCookieHeaders.forEach((cookie) => {
        response.headers.append('set-cookie', cookie);
      });
    } else {
      const rawCookie = libreChatResponse.headers.get('set-cookie');
      if (rawCookie) {
        response.headers.append('set-cookie', rawCookie);
      }
    }

    return response;
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
