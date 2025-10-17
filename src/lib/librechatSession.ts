"use client";

export const USER_STORAGE_KEY = "librechat_user";
export const AUTH_EVENT_NAME = "librechat-auth-changed";

export interface LibreChatUser {
  id: string;
  name?: string;
  username?: string;
  email?: string;
  company?: string;
}

export interface AuthStateChangeDetail {
  user: LibreChatUser | null;
}

const isBrowser = () => typeof window !== "undefined";

export function readStoredUser(): LibreChatUser | null {
  if (!isBrowser()) {
    return null;
  }

  try {
    const raw = window.localStorage.getItem(USER_STORAGE_KEY);
    if (!raw) {
      return null;
    }
    return JSON.parse(raw) as LibreChatUser;
  } catch (error) {
    console.warn("Unable to parse LibreChat user from storage", error);
    return null;
  }
}

function emitAuthState(detail: AuthStateChangeDetail) {
  if (!isBrowser()) {
    return;
  }
  window.dispatchEvent(new CustomEvent<AuthStateChangeDetail>(AUTH_EVENT_NAME, { detail }));
}

export function persistAuthState(
  user?: LibreChatUser | null,
  options: { silent?: boolean } = {},
) {
  if (!isBrowser()) {
    return;
  }

  let nextUser = readStoredUser();

  try {
    if (user !== undefined) {
      if (user) {
        window.localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
        nextUser = user;
      } else {
        window.localStorage.removeItem(USER_STORAGE_KEY);
        nextUser = null;
      }
    }
  } catch (error) {
    console.warn("Unable to persist LibreChat user state", error);
  }

  if (!options.silent) {
    emitAuthState({ user: nextUser ?? null });
  }
}

export function subscribeToAuthChanges(
  callback: (detail: AuthStateChangeDetail) => void,
): () => void {
  if (!isBrowser()) {
    return () => {};
  }

  const handler = (event: Event) => {
    const customEvent = event as CustomEvent<AuthStateChangeDetail>;
    callback(customEvent.detail);
  };

  window.addEventListener(AUTH_EVENT_NAME, handler);
  return () => window.removeEventListener(AUTH_EVENT_NAME, handler);
}

export function getFirstName(user: LibreChatUser | null): string | null {
  if (!user) {
    return null;
  }
  const source = user.name ?? user.username ?? user.email ?? "";
  if (!source) {
    return null;
  }
  const firstName = source.split(" ")[0] ?? source;
  return firstName.trim() || null;
}

export async function fetchLibreChatUser(): Promise<{
  ok: boolean;
  status: number;
  user: LibreChatUser | null;
}> {
  try {
    const response = await fetch("/api/auth/me", {
      method: "GET",
      credentials: "include",
      cache: "no-store",
    });

    if (response.ok) {
      const payload = await response.json().catch(() => ({}));
      const user = payload?.user ?? null;
      const success = Boolean(user);
      persistAuthState(user);
      return { ok: success, status: response.status, user };
    }

    if (response.status === 401 || response.status === 403) {
      persistAuthState(null);
    }

    return { ok: false, status: response.status, user: null };
  } catch (error) {
    console.warn("Unable to fetch LibreChat user", error);
    return { ok: false, status: 0, user: null };
  }
}

export async function logoutFromLibreChat(): Promise<boolean> {
  try {
    const response = await fetch('/api/auth/logout', {
      method: 'POST',
      credentials: 'include',
      cache: 'no-store',
    });

    persistAuthState(null);
    return response.ok;
  } catch (error) {
    console.warn('Unable to log out from LibreChat', error);
    persistAuthState(null);
    return false;
  }
}
