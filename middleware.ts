import { NextRequest, NextResponse } from "next/server";

const CANONICAL_HOST = "marcusreboque.com.br";
const WWW_HOST = `www.${CANONICAL_HOST}`;

export function middleware(request: NextRequest) {
  const { nextUrl } = request;

  if (nextUrl.hostname === WWW_HOST) {
    const redirectUrl = nextUrl.clone();
    redirectUrl.hostname = CANONICAL_HOST;
    return NextResponse.redirect(redirectUrl, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/:path*"],
};
