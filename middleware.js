import { NextResponse } from "next/server";

const BOT_UA_PATTERNS = [
  /bot/i,
  /crawler/i,
  /spider/i,
  /facebookexternalhit/i,
  /slurp/i,
  /bingpreview/i,
  /wget/i,
  /curl/i,
  /python-requests/i,
];

const ROBOTS_HEADER =
  "noindex, nofollow, noarchive, nosnippet, noimageindex, notranslate, noai, noimageai";

export function middleware(request) {
  const userAgent = request.headers.get("user-agent") || "";

  if (BOT_UA_PATTERNS.some((pattern) => pattern.test(userAgent))) {
    return new NextResponse("Forbidden", {
      status: 403,
      headers: {
        "X-Robots-Tag": ROBOTS_HEADER,
      },
    });
  }

  const response = NextResponse.next();
  response.headers.set("X-Robots-Tag", ROBOTS_HEADER);
  return response;
}

export const config = {
  matcher: "/:path*",
  runtime: "experimental-edge",
};
