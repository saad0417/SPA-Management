const BASE_URL = "https://test.asrbpo.com";
const DEFAULT_DB = "test";
const SESSION_KEY = "spa_session";

export function saveSession(sessionData) {
  localStorage.setItem(SESSION_KEY, JSON.stringify(sessionData));
}

export function getSession() {
  const raw = localStorage.getItem(SESSION_KEY);
  if (!raw) return null;

  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export function clearSession() {
  localStorage.removeItem(SESSION_KEY);
}

export function isLoggedIn() {
  return !!getSession();
}

async function request(path, { body = {} } = {}) {
  const payload = {
    jsonrpc: "2.0",
    params: body || {},
  };

  const res = await fetch(`${BASE_URL}${path}`, {
    method: "POST",
    mode: "cors",
    // credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = await res.json();

  const result = data?.result ?? data;

  if (data?.error) {
    throw new Error(
      data.error?.data?.message ||
      data.error?.message ||
      "Odoo request failed"
    );
  }

  if (result?.success === false) {
    throw new Error(result.message || "Request failed");
  }

  return result;
}

export async function login(loginId, password, db = DEFAULT_DB) {
  const sessionPayload = await request("/spa/api/login", {
    body: {
      db,
      login: loginId,
      password,
    },
  });

  saveSession(sessionPayload);
  return sessionPayload;
}

export async function logout() {
  try {
    await request("/spa/api/logout");
  } catch {}

  clearSession();
}

export function apiPost(path, body = {}) {
  return request(path, { body });
}

export function apiGet(path, params = {}) {
  return request(path, { body: params });
}