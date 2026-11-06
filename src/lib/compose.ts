import { selfData } from "@/constant";

/**
 * Deep links that open a webmail compose window already addressed.
 *
 * Gmail: the old `?view=cm&fs=1` form is dead — Google now needs the `/u/0/`
 * path segment and `tf=cm`, and the old parameters land on a blank page.
 *
 * Outlook: personal (Outlook.com) and work/school (Microsoft 365) are
 * different hosts and a link to one does not work on the other, so both are
 * offered.
 *
 * Spaces are encoded as %20 rather than `+`. URLSearchParams would emit `+`,
 * which Outlook renders as literal plus signs in the subject and body.
 *
 * Known limits: Gmail's `/u/0/` targets the visitor's first signed-in Google
 * account, a signed-out visitor hits a login page, and Mobile Safari does not
 * honour these links. The address is therefore also offered to copy.
 */

const enc = (s: string) => encodeURIComponent(s);

const query = (
  parts: Record<string, string | undefined>,
  trailing?: Record<string, string>
) =>
  [
    ...Object.entries(parts)
      .filter(([, v]) => v)
      .map(([k, v]) => `${k}=${enc(v as string)}`),
    ...Object.entries(trailing ?? {}).map(([k, v]) => `${k}=${v}`),
  ].join("&");

export function gmailComposeUrl(subject?: string, body?: string): string {
  return `https://mail.google.com/mail/u/0/?${query(
    { to: selfData.email, su: subject, body },
    { tf: "cm" }
  )}`;
}

export type OutlookAccount = "personal" | "work";

export function outlookComposeUrl(
  account: OutlookAccount,
  subject?: string,
  body?: string
): string {
  const host =
    account === "work"
      ? "https://outlook.office.com/mail/deeplink/compose"
      : "https://outlook.live.com/mail/0/deeplink/compose";

  return `${host}?${query({ to: selfData.email, subject, body })}`;
}
