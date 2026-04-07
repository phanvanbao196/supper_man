import { Suspense } from "react";
import { DEFAULT_LOCALE } from "@/lib/i18n";
import TwoFactorClient from "./two-factor-client";

export default async function TwoFactorPage() {
  const locale = DEFAULT_LOCALE;
  return (
    <Suspense fallback={null}>
      <TwoFactorClient locale={locale} />
    </Suspense>
  );
}
