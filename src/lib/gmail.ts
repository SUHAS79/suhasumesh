import { selfData } from "@/constant";

/**
 * Builds a Gmail compose URL.
 *
 * The old `?view=cm&fs=1` form is dead — Google now needs the `/u/0/` path
 * segment and `tf=cm`, and the old parameters land on a blank page.
 *
 * Caveats worth knowing: `/u/0/` targets the visitor's FIRST signed-in Google
 * account, a visitor who is not signed in hits a login page, and these links
 * do not open compose in Mobile Safari. Every place this is used therefore
 * also offers a plain mailto fallback.
 */
export function gmailComposeUrl(subject?: string, body?: string): string {
  const params = new URLSearchParams({ to: selfData.email });
  if (subject) params.set("su", subject);
  if (body) params.set("body", body);
  params.set("tf", "cm");
  return `https://mail.google.com/mail/u/0/?${params.toString()}`;
}

/** Plain mailto with the same content — works in every mail client. */
export function mailtoUrl(subject?: string, body?: string): string {
  const params = new URLSearchParams();
  if (subject) params.set("subject", subject);
  if (body) params.set("body", body);
  const qs = params.toString();
  return `mailto:${selfData.email}${qs ? `?${qs}` : ""}`;
}
