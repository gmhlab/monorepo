import { NextRequest, NextResponse } from "next/server";

const COOKIE_NAME = "site-auth";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 7; // 7 days

async function hashPassword(password: string): Promise<string> {
  const data = new TextEncoder().encode(password);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(hashBuffer))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const password = formData.get("password") as string | null;
  const redirect = (formData.get("redirect") as string | null) || "/";

  const sitePassword = process.env.SITE_PASSWORD;
  if (!sitePassword || !password) {
    const url = request.nextUrl.clone();
    url.pathname = "/password-gate";
    url.searchParams.set("redirect", redirect);
    url.searchParams.set("error", "1");
    return NextResponse.redirect(url);
  }

  if (password !== sitePassword) {
    const url = request.nextUrl.clone();
    url.pathname = "/password-gate";
    url.searchParams.set("redirect", redirect);
    url.searchParams.set("error", "1");
    return NextResponse.redirect(url);
  }

  const hash = await hashPassword(sitePassword);
  const url = request.nextUrl.clone();
  url.pathname = redirect;
  url.search = "";

  const response = NextResponse.redirect(url);
  response.cookies.set(COOKIE_NAME, hash, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
    maxAge: COOKIE_MAX_AGE,
  });

  return response;
}
