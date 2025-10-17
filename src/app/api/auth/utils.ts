import { NextResponse } from 'next/server';

export function appendSetCookieHeaders(from: Response, to: NextResponse) {
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
