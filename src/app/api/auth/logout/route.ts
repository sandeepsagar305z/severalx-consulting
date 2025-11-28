import { NextRequest, NextResponse } from 'next/server';
import { appendSetCookieHeaders } from '@/app/api/auth/utils';

const LIBRECHAT_API_BASE =
  process.env.LIBRECHAT_API_BASE ?? process.env.NEXT_PUBLIC_LIBRECHAT_URL ?? '';

export async function POST(request: NextRequest) {
  if (!LIBRECHAT_API_BASE) {
    return NextResponse.json({ message: 'LibreChat API base URL is not configured' }, { status: 500 });
  }

  try {
    const targetBase = LIBRECHAT_API_BASE.replace(/\/$/, '');
    const cookieHeader = request.headers.get('cookie') ?? '';

    const logoutResponse = await fetch(`${targetBase}/api/auth/logout`, {
      method: 'POST',
      headers: cookieHeader ? { cookie: cookieHeader } : undefined,
      redirect: 'manual',
    });

    const payload = await logoutResponse.json().catch(() => ({}));
    const response = NextResponse.json(payload ?? {}, { status: logoutResponse.status });
    appendSetCookieHeaders(logoutResponse, response);
    return response;
  } catch (error) {
    console.error('Logout error:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
