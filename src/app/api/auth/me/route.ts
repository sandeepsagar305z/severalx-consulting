import { NextRequest, NextResponse } from 'next/server';

const LIBRECHAT_API_BASE =
  process.env.LIBRECHAT_API_BASE ?? process.env.NEXT_PUBLIC_LIBRECHAT_API_BASE ?? '';

function appendSetCookieHeaders(from: Response, to: NextResponse) {
  const headers = from.headers as unknown as { getSetCookie?: () => string[] };
  const cookies = headers.getSetCookie?.();
  if (cookies && cookies.length > 0) {
    cookies.forEach((cookie) => {
      to.headers.append('set-cookie', cookie);
    });
    return;
  }

  const rawCookie = from.headers.get('set-cookie');
  if (rawCookie) {
    to.headers.append('set-cookie', rawCookie);
  }
}

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
