import { NextRequest, NextResponse } from 'next/server';
import { appendSetCookieHeaders } from '@/app/api/auth/utils';

const LIBRECHAT_API_BASE =
  process.env.LIBRECHAT_API_BASE ?? process.env.NEXT_PUBLIC_LIBRECHAT_URL ?? '';

export async function GET(request: NextRequest) {
  if (!LIBRECHAT_API_BASE) {
    return NextResponse.json({ error: 'LibreChat API base URL is not configured' }, { status: 500 });
  }

  try {
    const targetBase = LIBRECHAT_API_BASE.replace(/\/$/, '');
    const cookieHeader = request.headers.get('cookie') ?? '';

    const refreshResponse = await fetch(`${targetBase}/api/auth/refresh`, {
      method: 'POST',
      headers: cookieHeader ? { cookie: cookieHeader } : undefined,
      redirect: 'manual',
    });

    const payload = await refreshResponse.json().catch(() => ({}));

    if (!refreshResponse.ok || typeof payload?.token !== 'string') {
      const unauthorized = NextResponse.json({ user: null }, { status: 401 });
      appendSetCookieHeaders(refreshResponse, unauthorized);
      return unauthorized;
    }

    const response = NextResponse.json({ user: payload?.user ?? null }, { status: 200 });
    appendSetCookieHeaders(refreshResponse, response);
    return response;
  } catch (error) {
    console.error('LibreChat session refresh error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
