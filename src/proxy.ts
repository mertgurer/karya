import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n";
import { NextRequest } from "next/server";

export default async function proxy(request: NextRequest) {
  const handleI18nRouting = createMiddleware(routing);
  const response = handleI18nRouting(request);

  return response;
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
