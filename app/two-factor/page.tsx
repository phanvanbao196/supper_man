import { DEFAULT_LOCALE } from "@/lib/i18n";
import TwoFactorClient from "./two-factor-client";

export default async function TwoFactorPage() {
  const locale = DEFAULT_LOCALE;
  return <TwoFactorClient locale={locale} />;
}
