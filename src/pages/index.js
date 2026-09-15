import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

/* ------------------------------------------------------------------ */
/* Icons: 20px, 1.5px stroke, currentColor                             */
/* ------------------------------------------------------------------ */
const Icon = {
  Bridge: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M4 7h16" /><path d="M4 17h16" /><path d="m15 3 4 4-4 4" /><path d="m9 13-4 4 4 4" />
    </svg>
  ),
  Pay: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 10h18" /><path d="M7 15h3" />
    </svg>
  ),
  Wallet: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M3 7a2 2 0 0 1 2-2h13v4" /><rect x="3" y="7" width="18" height="12" rx="2" /><path d="M16 13h.01" />
    </svg>
  ),
  Tools: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="m14.5 6.5 3 3" /><path d="M4 20l7.5-7.5" /><path d="M14 4.5a4 4 0 0 0 5.5 5.5L17 12.5 11.5 7 14 4.5Z" />
    </svg>
  ),
  Arrow: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M5 12h14" /><path d="m13 6 6 6-6 6" />
    </svg>
  ),
  Chevron: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="m9 6 6 6-6 6" />
    </svg>
  ),
  Terminal: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="m5 7 5 5-5 5" /><path d="M12 17h7" />
    </svg>
  ),
  Server: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <rect x="4" y="4" width="16" height="16" rx="2" /><path d="M4 10h16" /><path d="M4 15h16" />
    </svg>
  ),
  Trending: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="m3 17 6-6 4 4 8-9" /><path d="M15 6h6v6" />
    </svg>
  ),
};

/* ------------------------------------------------------------------ */
/* Content — every section of the homepage is defined here.            */
/* Card variants: 'pathway' (icon, title, audience, one CTA link) and  */
/* 'links' (icon, title linking to its section, plus deep links).      */
/* ------------------------------------------------------------------ */
const HOME = {
  hero: {
    titleLines: ["Embed Ethereum's economy", 'in your product.'],
    lede:
      'Gnosis EEZ gives fintechs open finance components with consumer-grade guardrails: yield, ' +
      'savings, investing and payments that reach mainnet assets and liquidity in the same ' +
      'transaction. The guides here take you from nothing to a result you can verify on-chain.',
    actions: [
      { label: 'Start building', to: '/developers/quickstart', icon: Icon.Terminal, primary: true },
      { label: 'Knowledge hub', to: '/technicalguides', icon: Icon.Tools },
    ],
  },
  sections: [
    {
      title: 'Open finance for your app',
      sub: 'Three bundles of open finance components, each with 0-1 guides that end in a result you can verify on-chain.',
      variant: 'pathway',
      cards: [
        {
          icon: Icon.Wallet,
          title: 'Yield inside your wallet',
          body: 'For trading and payment apps already selling a money market fund. A rail swap on the same fee model.',
          to: '/start/embedded-components/yield-in-your-wallet',
        },
        {
          icon: Icon.Pay,
          title: 'Spend and Save',
          body: 'For wallets and challengers that want a card without carrying a balance sheet.',
          to: '/start/embedded-components/spend-and-save',
        },
        {
          icon: Icon.Trending,
          title: 'Full Investing Suite',
          body: 'For brokers and neobanks adding tokenised assets and self-custodial crypto.',
          to: '/start/embedded-components/full-investing-suite',
        },
      ],
    },
    {
      title: 'Build directly on the chain',
      sub: 'Core building blocks for shipping directly on Gnosis Chain. Each title opens the full section.',
      variant: 'links',
      cards: [
        {
          icon: Icon.Terminal,
          title: 'Deploy contracts',
          to: '/developers/Overview',
          links: [
            ['Quickstart', '/developers/quickstart'],
            ['Verify smart contracts', '/developers/Verify Smart Contracts/'],
          ],
        },
        {
          icon: Icon.Bridge,
          title: 'Move assets across chains',
          to: '/bridges',
          links: [
            ['Use Gnosis Bridge', '/bridges/usebridges'],
            ['Arbitrary Message Bridge', '/bridges/using-amb'],
          ],
        },
        {
          icon: Icon.Wallet,
          title: 'Build with smart accounts',
          to: '/technicalguides/wallets-and-accounts',
          links: [
            ['Account abstraction', '/technicalguides/wallets-and-accounts/account-abstraction/'],
            ['EIP-7702 on Gnosis', '/technicalguides/wallets-and-accounts/smart-eoas/eip-7702'],
          ],
        },
        {
          icon: Icon.Server,
          title: 'Read chain data',
          to: '/tools',
          links: [
            ['RPC providers', '/tools/rpc-providers/'],
            ['Block explorers', '/tools/block-explorers/'],
          ],
        },
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */
/* Components                                                          */
/* ------------------------------------------------------------------ */
function Hero({hero}) {
  return (
    <section className={styles.hero}>
      <h1 className={styles.heroTitle}>
        {hero.titleLines.map((line) => (
          <React.Fragment key={line}>
            <span className={styles.heroLine}>{line}</span>{' '}
          </React.Fragment>
        ))}
      </h1>
      <p className={styles.heroLede}>{hero.lede}</p>
      <div className={styles.heroActions}>
        {hero.actions.map(({label, to, icon: I, primary}) => (
          <Link key={to} className={primary ? styles.btnPrimary : styles.btnSecondary} to={to}>
            <I width="16" height="16" />
            {label}
          </Link>
        ))}
      </div>
    </section>
  );
}

function PathwayCard({icon: I, title, body, to}) {
  return (
    <Link className={styles.pathway} to={to}>
      <span className={styles.pathwayTop}>
        <span className={styles.pathwayIcon}>
          <I width="22" height="22" />
        </span>
      </span>
      <span className={styles.pathwayBody}>
        <span className={styles.pathwayTitle}>{title}</span>
        <span className={styles.pathwayAudience}>{body}</span>
      </span>
      <span className={styles.pathwayFoot}>
        <span className={styles.pathwayCta}>
          Start <Icon.Arrow width="14" height="14" />
        </span>
      </span>
    </Link>
  );
}

function LinksCard({icon: I, title, to, links}) {
  return (
    <div className={styles.useCase}>
      <Link to={to} className={styles.useCaseHead}>
        <I width="18" height="18" className={styles.useCaseIcon} />
        <span>{title}</span>
        <Icon.Arrow width="14" height="14" className={styles.useCaseHeadArrow} />
      </Link>
      <ul className={styles.useCaseList}>
        {links.map(([label, href]) => (
          <li key={href}>
            <Link to={href} className={styles.useCaseLink}>
              <span>{label}</span>
              <Icon.Chevron width="16" height="16" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

const CARDS = {pathway: PathwayCard, links: LinksCard};
const GRIDS = {pathway: styles.pathwayGrid, links: styles.useCaseGrid};

function Section({title, sub, variant, cards}) {
  const Card = CARDS[variant];
  return (
    <section className={styles.section}>
      <div className={styles.sectionHead}>
        <h2 className={styles.sectionTitle}>{title}</h2>
        {sub && <p className={styles.sectionSub}>{sub}</p>}
      </div>
      <div className={GRIDS[variant]}>
        {cards.map((card) => (
          <Card key={card.title} {...card} />
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <main className={styles.page}>
        <Hero hero={HOME.hero} />
        {HOME.sections.map((s) => (
          <Section key={s.title} {...s} />
        ))}
      </main>
    </Layout>
  );
}
