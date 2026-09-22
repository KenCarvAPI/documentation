"use client";
// Shared site header for build.gnosischain.com, in the docs navbar style.
// IDENTICAL copies live in:
//   gnosis-general/ecosystem/components/SiteHeader/
//   gnosischain-docs/src/components/SiteHeader/
// Plain React + a CSS module only (no Tailwind, no Next/Docusaurus imports)
// so the same file runs in both apps. Edit one copy, then copy it over.
//
// Colours come from the docs' --gc-* tokens when present (so the docs
// light/dark switch works) and fall back to the navy dark palette elsewhere.

import { useState, type ReactNode } from "react";
import styles from "./SiteHeader.module.css";

export type SiteKey = "ecosystem" | "docs";

const SITES: { key: SiteKey; label: string; href: string }[] = [
  { key: "ecosystem", label: "Ecosystem", href: "/" },
  { key: "docs", label: "Docs", href: "/docs/" },
];

const SOCIALS = [
  {
    label: "GitHub",
    href: "https://github.com/gnosischain",
    path: "M17 8a9 9 0 0 0-2.85 17.54c.45.08.62-.2.62-.43v-1.6c-2.5.54-3.03-1.06-3.03-1.06-.41-1.04-1-1.32-1-1.32-.82-.56.06-.55.06-.55.9.06 1.38.93 1.38.93.8 1.38 2.11.98 2.62.75.08-.58.31-.98.57-1.2-2-.23-4.1-1-4.1-4.45 0-.98.35-1.79.93-2.42-.1-.23-.4-1.15.09-2.39 0 0 .75-.24 2.47.92a8.6 8.6 0 0 1 4.5 0c1.72-1.16 2.47-.92 2.47-.92.49 1.24.18 2.16.09 2.39.58.63.93 1.44.93 2.42 0 3.46-2.11 4.22-4.12 4.44.32.28.61.83.61 1.67v2.48c0 .24.16.52.63.43A9 9 0 0 0 17 8Z",
  },
  {
    label: "X",
    href: "https://twitter.com/gnosischain",
    path: "M21.6 10h2.4l-5.25 6 6.15 8.1h-4.8l-3.78-4.93L12 24.1H9.6l5.6-6.4L9.3 10h4.92l3.42 4.5L21.6 10Zm-.84 12.66h1.33L13.5 11.3h-1.43l8.69 11.36Z",
  },
  {
    label: "Discord",
    href: "https://discord.gg/gnosis",
    path: "M23.4 11.3a15 15 0 0 0-3.7-1.15l-.47.96a13.9 13.9 0 0 0-4.46 0l-.47-.96a15 15 0 0 0-3.7 1.15C8.24 14.83 7.6 18.3 7.92 21.7a15.2 15.2 0 0 0 4.57 2.3c.37-.5.7-1.03.98-1.59a9.8 9.8 0 0 1-1.55-.75l.38-.3a10.8 10.8 0 0 0 9.4 0l.38.3c-.5.3-1.02.55-1.55.75.28.56.61 1.09.98 1.59a15.2 15.2 0 0 0 4.57-2.3c.38-3.95-.65-7.38-2.68-10.4ZM13.9 19.6c-.9 0-1.63-.82-1.63-1.83s.72-1.84 1.63-1.84 1.65.83 1.63 1.84c0 1.01-.72 1.83-1.63 1.83Zm6.2 0c-.9 0-1.63-.82-1.63-1.83s.72-1.84 1.63-1.84 1.65.83 1.63 1.84c0 1.01-.72 1.83-1.63 1.83Z",
  },
];

const JOIN = { label: "Join us", href: "https://tally.so/r/3lrN05" };

type Props = {
  /** Which site this header is rendered on. Shown as the wordmark and the active pill. */
  current: SiteKey;
  /** URL of the white Gnosis wordmark. Differs per app (public/ vs static/img/). */
  logoSrc: string;
  /** Rendered before the logo (docs: the mobile sidebar toggle). */
  start?: ReactNode;
  /** Rendered in the middle of the row (docs: search). */
  center?: ReactNode;
  /** Rendered after the links (docs: colour-mode toggle). */
  end?: ReactNode;
  /** Show the header's own phone menu. Off on docs, which has its own sidebar. */
  mobileMenu?: boolean;
};

function BarsIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" />
    </svg>
  );
}

function SocialLinks({ className }: { className: string }) {
  return (
    <>
      {SOCIALS.map((s) => (
        <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label} className={className}>
          <svg viewBox="0 0 34 34" aria-hidden="true">
            <path d={s.path} />
          </svg>
        </a>
      ))}
    </>
  );
}

export default function SiteHeader({ current, logoSrc, start, center, end, mobileMenu = true }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const here = SITES.find((s) => s.key === current) ?? SITES[0];

  return (
    <header className={styles.header}>
      <div className={styles.brand}>
        {start}
        <a href="/" className={styles.logo} aria-label="Gnosis home">
          <img src={logoSrc} alt="Gnosis" width={118} height={26} />
        </a>
        <span className={styles.wordmark}>{here.label}</span>
      </div>

      {center && <div className={styles.center}>{center}</div>}

      <div className={styles.actions}>
        <nav className={styles.pills} aria-label="Site">
          {SITES.map((s) => (
            <a
              key={s.key}
              href={s.href}
              className={styles.pill}
              aria-current={s.key === here.key ? "page" : undefined}
            >
              {s.label}
            </a>
          ))}
        </nav>
        <span className={styles.divider} aria-hidden="true" />
        <SocialLinks className={styles.social} />
        <a href={JOIN.href} target="_blank" rel="noreferrer" className={styles.join}>
          {JOIN.label}
        </a>
        {end}
      </div>

      {mobileMenu && (
        <button type="button" className={styles.menuButton} aria-label="Open menu" onClick={() => setMenuOpen(true)}>
          <BarsIcon />
        </button>
      )}

      {mobileMenu && menuOpen && (
        <div className={styles.overlay} onClick={() => setMenuOpen(false)}>
          <div className={styles.panel} role="dialog" aria-label="Menu" onClick={(e) => e.stopPropagation()}>
            <div className={styles.panelTop}>
              <img src={logoSrc} alt="Gnosis" width={100} height={22} className={styles.panelLogo} />
              <button type="button" className={styles.closeButton} aria-label="Close menu" onClick={() => setMenuOpen(false)}>
                <CloseIcon />
              </button>
            </div>
            {SITES.map((s) => (
              <a key={s.key} href={s.href} className={styles.panelLink} aria-current={s.key === here.key ? "page" : undefined}>
                {s.label}
              </a>
            ))}
            <div className={styles.panelSocials}>
              <SocialLinks className={styles.social} />
            </div>
            <a href={JOIN.href} target="_blank" rel="noreferrer" className={styles.panelJoin}>
              {JOIN.label}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
