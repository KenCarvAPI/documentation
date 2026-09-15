// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Gnosis Chain",
  tagline:
    "Build apps, payments and infrastructure on Gnosis Chain: an EVM network with 5-second blocks, near-zero fees and a stablecoin as gas.",
  url: "https://docs.gnosischain.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",
  favicon: "img/favicon.ico",
  scripts: [
    {
      src: "/js/analytics-consent.js",
      async: true,
    },
  ],
  customFields: {
    GOOGLE_ANALYTICS_ID: process.env.GOOGLE_ANALYTICS_ID ?? "G-YVPQSCP6S7",
  },

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "gnosischain", // Usually your GitHub org/user name.
  projectName: "documentation", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: "docs",
          editUrl: "https://github.com/gnosischain/documentation/tree/main",
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          showLastUpdateTime: true,
        },
        // Updates blog archived to /archives/Updates (not published).
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.scss"),
        },
        // gtag: {
        //   trackingID: process.env.GOOGLE_ANALYTICS_ID ?? "G-YVPQSCP6S7", // staging by default
        //   anonymizeIP: true,
        // },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/thumbnail.png",
      announcementBar: {
        id: "eez_validator_retirement",
        content:
          "Update: Gnosis Chain will be retiring the validator set upon the formal migration to the Ethereum Economic Zone",
        isCloseable: true,
      },
      colorMode: {
        defaultMode: "dark", // Set default mode to dark
        disableSwitch: false, // Enable the theme switch
        respectPrefersColorScheme: false, // Do not change theme based on user preference
      },
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      navbar: {
        logo: {
          alt: "Gnosis Chain",
          src: "img/gnosis.svg",
          srcDark: "img/gnosis.svg",
          width: 118,
          height: 26,
        },
        items: [
          {
            type: "docSidebar",
            position: "left",
            sidebarId: "start",
            label: "Start here",
          },
          {
            type: "docSidebar",
            position: "left",
            sidebarId: "developers",
            label: "Build",
          },
          {
            type: "docSidebar",
            position: "left",
            sidebarId: "bridges",
            label: "Bridges",
          },
          {
            type: "docSidebar",
            position: "left",
            sidebarId: "tools",
            label: "Tools",
          },
          {
            type: "docSidebar",
            position: "left",
            sidebarId: "technicalGuides",
            label: "Knowledge hub",
          },
          {
            type: "docSidebar",
            position: "left",
            sidebarId: "faq",
            label: "FAQ",
          },
          {
            href: "https://ecosystem.gnosischain.com/",
            position: "right",
            label: "Ecosystem",
          },
          {
            href: "https://faucet.chiadochain.net",
            position: "right",
            label: "Faucet",
          },
          {
            href: "https://github.com/gnosischain",
            position: "right",
            "aria-label": "GitHub",
            html: `<svg class="socialButton" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.75" y="0.75" width="32.5" height="32.5" rx="8"/><path d="M17 8a9 9 0 0 0-2.85 17.54c.45.08.62-.2.62-.43v-1.6c-2.5.54-3.03-1.06-3.03-1.06-.41-1.04-1-1.32-1-1.32-.82-.56.06-.55.06-.55.9.06 1.38.93 1.38.93.8 1.38 2.11.98 2.62.75.08-.58.31-.98.57-1.2-2-.23-4.1-1-4.1-4.45 0-.98.35-1.79.93-2.42-.1-.23-.4-1.15.09-2.39 0 0 .75-.24 2.47.92a8.6 8.6 0 0 1 4.5 0c1.72-1.16 2.47-.92 2.47-.92.49 1.24.18 2.16.09 2.39.58.63.93 1.44.93 2.42 0 3.46-2.11 4.22-4.12 4.44.32.28.61.83.61 1.67v2.48c0 .24.16.52.63.43A9 9 0 0 0 17 8Z"/></svg>`,
          },
          {
            href: "https://twitter.com/gnosischain",
            position: "right",
            "aria-label": "X",
            html: `<svg class="socialButton" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.75" y="0.75" width="32.5" height="32.5" rx="8"/><path d="M21.6 10h2.4l-5.25 6 6.15 8.1h-4.8l-3.78-4.93L12 24.1H9.6l5.6-6.4L9.3 10h4.92l3.42 4.5L21.6 10Zm-.84 12.66h1.33L13.5 11.3h-1.43l8.69 11.36Z"/></svg>`,
          },
          {
            href: "http://discord.gg/gnosis",
            position: "right",
            "aria-label": "Discord",
            html: `<svg class="socialButton" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.75" y="0.75" width="32.5" height="32.5" rx="8"/><path d="M23.4 11.3a15 15 0 0 0-3.7-1.15l-.47.96a13.9 13.9 0 0 0-4.46 0l-.47-.96a15 15 0 0 0-3.7 1.15C8.24 14.83 7.6 18.3 7.92 21.7a15.2 15.2 0 0 0 4.57 2.3c.37-.5.7-1.03.98-1.59a9.8 9.8 0 0 1-1.55-.75l.38-.3a10.8 10.8 0 0 0 9.4 0l.38.3c-.5.3-1.02.55-1.55.75.28.56.61 1.09.98 1.59a15.2 15.2 0 0 0 4.57-2.3c.38-3.95-.65-7.38-2.68-10.4ZM13.9 19.6c-.9 0-1.63-.82-1.63-1.83s.72-1.84 1.63-1.84 1.65.83 1.63 1.84c0 1.01-.72 1.83-1.63 1.83Zm6.2 0c-.9 0-1.63-.82-1.63-1.83s.72-1.84 1.63-1.84 1.65.83 1.63 1.84c0 1.01-.72 1.83-1.63 1.83Z"/></svg>`,
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Build",
            items: [
              { label: "Start here", to: "/start" },
              { label: "Quickstart", to: "/developers/quickstart" },
              { label: "Developer overview", to: "/developers/Overview" },
              { label: "Bridges", to: "/bridges" },
              { label: "Tools", to: "/tools" },
            ],
          },
          {
            title: "Network",
            items: [
              { label: "Network details", to: "/about/networks/" },
              { label: "Chiado testnet", to: "/about/networks/chiado" },
              { label: "Faucets", to: "/tools/Faucets" },
              { label: "Blockscout", href: "https://gnosis.blockscout.com" },
              { label: "Gnosis Bridge", href: "https://bridge.gnosischain.com" },
            ],
          },
          {
            title: "Community",
            items: [
              { label: "Discord", href: "https://discord.gg/gnosis" },
              { label: "Telegram", href: "https://t.me/gnosischain" },
              { label: "X", href: "https://twitter.com/gnosischain" },
              { label: "GitHub", href: "https://github.com/gnosischain" },
              { label: "Ecosystem", href: "https://ecosystem.gnosischain.com/" },
            ],
          },
          {
            title: "More",
            items: [
              { label: "FAQ", to: "/faq/others" },
              { label: "Useful contracts", to: "/developers/Usefulcontracts" },
              { label: "llms.txt", to: "pathname:///llms.txt" },
              { label: "Careers", href: "https://gnosis.io/careers/" },
              { label: "Media kit", href: "https://www.gnosis.io/press" },
              { label: "Terms of use", to: "/terms-conditions" },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Gnosis.`,
      },
      algolia: {
        appId: process.env.ALGOLIA_ID ?? "key",
        apiKey: process.env.ALGOLIA_KEY ?? "key",
        indexName: process.env.ALGOLIA_INDEX ?? "index",
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["solidity"], // all languages: https://prismjs.com/#supported-languages
      },
      metadata: [
        {
          name: "google-site-verification",
          content: "P--3KGPeNoGjwcr2ZM1-m42FLjd8WL_Ly7XWTedX2U4",
        },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    }),

  plugins: [
    [require.resolve("docusaurus-plugin-sass"), {}],
    [
      "@docusaurus/plugin-client-redirects",
      {
        // The /concepts section moved to /about; external sites still link the old paths
        createRedirects(existingPath) {
          if (existingPath.startsWith("/about/")) {
            return [existingPath.replace("/about/", "/concepts/")];
          }
          return undefined;
        },
        redirects: [
          // Chain Specifications recategorized: consensus history, legacy forks,
          // merged contracts page, and security pages moved out of /about/specs
          {
            to: "/about/specs/consensus/history/aura",
            from: "/about/specs/consensus/aura",
          },
          {
            to: "/about/specs/consensus/history/posdao",
            from: "/about/specs/consensus/posdao",
          },
          {
            to: "/about/specs/consensus/",
            from: "/about/specs/consensus/proof-of-stake",
          },
          {
            to: "/about/specs/hard-forks/legacy/1604400",
            from: "/about/specs/hard-forks/1604400",
          },
          {
            to: "/about/specs/hard-forks/legacy/2508800",
            from: "/about/specs/hard-forks/2508800",
          },
          {
            to: "/about/specs/hard-forks/legacy/7298030",
            from: "/about/specs/hard-forks/7298030",
          },
          {
            to: "/about/specs/hard-forks/legacy/9186425",
            from: "/about/specs/hard-forks/9186425",
          },
          {
            to: "/about/specs/hard-forks/legacy/16101500",
            from: "/about/specs/hard-forks/16101500",
          },
          {
            to: "/about/specs/hard-forks/legacy/19040000",
            from: "/about/specs/hard-forks/19040000",
          },
          {
            to: "/about/specs/hard-forks/legacy/21735000",
            from: "/about/specs/hard-forks/21735000",
          },
          {
            to: "/about/specs/hard-forks/legacy/spec.json-update",
            from: "/about/specs/hard-forks/spec.json-update",
          },
          {
            to: "/about/specs/contracts-and-addresses",
            from: [
              "/about/specs/deposit-contracts",
              "/about/specs/gbc",
              "/about/specs/gbc/upgradeability",
            ],
          },
          {
            to: "/about/security/bug-bounty",
            from: "/about/specs/bug-bounty",
          },
          {
            to: "/about/security/security-audit",
            from: "/about/specs/security-audit",
          },
          // Tools section folders kebab-cased and web3-name-sdk moved under
          // user-onboarding
          {
            to: "/tools/rpc-providers/",
            from: "/tools/RPC Providers/",
          },
          {
            to: "/tools/block-explorers/",
            from: "/tools/Blockchain Explorers/",
          },
          {
            to: "/tools/block-explorers/blockscout",
            from: "/tools/Blockchain Explorers/blockscout",
          },
          {
            to: "/tools/block-explorers/tenderly",
            from: "/tools/Blockchain Explorers/tenderly",
          },
          {
            to: "/tools/indexers-analytics/",
            from: "/tools/Indexer & Analytics",
          },
          {
            to: "/tools/indexers-analytics/covalent",
            from: "/tools/Indexer & Analytics/covalent",
          },
          {
            to: "/tools/indexers-analytics/dune",
            from: "/tools/Indexer & Analytics/dune",
          },
          {
            to: "/tools/indexers-analytics/envio",
            from: "/tools/Indexer & Analytics/envio",
          },
          {
            to: "/tools/indexers-analytics/moralis",
            from: "/tools/Indexer & Analytics/moralis",
          },
          {
            to: "/tools/indexers-analytics/subquery",
            from: "/tools/Indexer & Analytics/subquery",
          },
          {
            to: "/tools/indexers-analytics/the-graph",
            from: "/tools/Indexer & Analytics/the-graph",
          },
          {
            to: "/tools/oracles/",
            from: "/tools/Oracle Providers",
          },
          {
            to: "/tools/oracles/api3",
            from: "/tools/Oracle Providers/api3",
          },
          {
            to: "/tools/oracles/chainlink",
            from: "/tools/Oracle Providers/chainlink",
          },
          {
            to: "/tools/oracles/chronicle",
            from: "/tools/Oracle Providers/chronicle",
          },
          {
            to: "/tools/oracles/dia",
            from: "/tools/Oracle Providers/dia",
          },
          {
            to: "/tools/oracles/gas-price",
            from: "/tools/Oracle Providers/gas-price",
          },
          {
            to: "/tools/oracles/pyth",
            from: "/tools/Oracle Providers/pyth",
          },
          {
            to: "/tools/oracles/tellor",
            from: "/tools/Oracle Providers/tellor",
          },
          {
            to: "/tools/oracles/supraoracles/",
            from: "/tools/Oracle Providers/supraoracles/",
          },
          {
            to: "/tools/oracles/supraoracles/vrf",
            from: "/tools/Oracle Providers/supraoracles/vrf",
          },
          {
            to: "/tools/user-onboarding/",
            from: "/tools/User Onboarding/",
          },
          {
            to: "/tools/user-onboarding/openfort",
            from: "/tools/User Onboarding/openfort",
          },
          {
            to: "/tools/user-onboarding/reown",
            from: "/tools/User Onboarding/reown",
          },
          {
            to: "/tools/user-onboarding/web3-name-sdk",
            from: "/tools/web3-name-sdk",
          },
          // Slug typo fixed (brige -> bridge)
          {
            to: "/bridges/bridge-limits",
            from: "/bridges/brige-limits",
          },
          // Knowledge hub recategorized: AA / signers / Pectra grouped under
          // Wallets & Accounts, ramps promoted out of About, one-page
          // categories merged into Integration Guides
          {
            to: "/technicalguides/wallets-and-accounts/account-abstraction/",
            from: "/technicalguides/account-abstraction",
          },
          {
            to: "/technicalguides/wallets-and-accounts/account-abstraction/zerodev-guide",
            from: "/technicalguides/account-abstraction/zerodev-guide",
          },
          {
            to: "/technicalguides/wallets-and-accounts/account-abstraction/particle-network",
            from: "/technicalguides/account-abstraction/particle-network",
          },
          {
            to: "/technicalguides/wallets-and-accounts/account-abstraction/safe-aa-infra/",
            from: "/technicalguides/account-abstraction/Safe and supported AA infra providers",
          },
          {
            to: "/technicalguides/wallets-and-accounts/account-abstraction/safe-aa-infra/integration-guide-for-safe",
            from: "/technicalguides/account-abstraction/Safe and supported AA infra providers/integration-guide-for-safe",
          },
          {
            to: "/technicalguides/wallets-and-accounts/account-abstraction/safe-aa-infra/gelato",
            from: "/technicalguides/account-abstraction/Safe and supported AA infra providers/gelato",
          },
          {
            to: "/technicalguides/wallets-and-accounts/account-abstraction/safe-aa-infra/pimlico",
            from: "/technicalguides/account-abstraction/Safe and supported AA infra providers/pimilico",
          },
          {
            to: "/technicalguides/wallets-and-accounts/embedded-signers/",
            from: "/technicalguides/custom-signers",
          },
          {
            to: "/technicalguides/wallets-and-accounts/embedded-signers/privy",
            from: "/technicalguides/custom-signers/privy",
          },
          {
            to: "/technicalguides/wallets-and-accounts/embedded-signers/dynamic",
            from: "/technicalguides/custom-signers/dynamic",
          },
          {
            to: "/technicalguides/wallets-and-accounts/smart-eoas/eip-7702",
            from: "/technicalguides/Pectra/eip-7702",
          },
          {
            to: "/technicalguides/wallets-and-accounts/smart-eoas/eip-5792",
            from: "/technicalguides/Pectra/eip-5792",
          },
          {
            to: "/technicalguides/integration-guides/cow-swap-widget",
            from: "/technicalguides/DeFi/Deploy A Cow Swap Widget",
          },
          {
            to: "/technicalguides/integration-guides/secret-network",
            from: "/technicalguides/Confidential Computing/secret-network",
          },
          {
            to: "/technicalguides/payments-and-ramps/uramp",
            from: ["/about/uRamp", "/concepts/uRamp"],
          },
          {
            to: "/technicalguides/payments-and-ramps/third-party-onramps",
            from: ["/about/third-parties", "/concepts/third-parties"],
          },
          // Updates blog archived to /archives/Updates; nothing under /updates is published
          {
            to: "/",
            from: [
              "/updates",
              "/updates/20221210-merge",
              "/updates/20221208-temporary-bootnodes",
              "/updates/202212-bridges-pause",
            ],
          },
          // "About Gnosis Chain" merged into the Start here page; the rest of /about
          // now sits under the Knowledge hub sidebar and keeps its URLs
          {
            to: "/start",
            from: ["/about", "/start/about-gnosis-chain"],
          },
          // Run a node archived to /archives/Node; the section is no longer published
          {
            to: "/",
            from: [
              "/node",
              "/node/architecture",
              "/node/rewards-penalties",
              "/node/Node Tools/dappnode",
              "/node/Node Tools/eth-docker",
              "/node/Node Tools/sedge",
              "/node/Node Tools/stereum",
              "/node/management/migrating-validator",
              "/node/management/monitoring-node",
              "/node/management/monitoring-validators",
              "/node/management/voluntary-exit",
              "/node/management/withdrawals",
              "/node/manual",
              "/node/manual/configure-server",
              "/node/manual/beacon/lighthouse",
              "/node/manual/beacon/lodestar",
              "/node/manual/beacon/nimbus",
              "/node/manual/beacon/teku",
              "/node/manual/execution/erigon",
              "/node/manual/execution/geth",
              "/node/manual/execution/nethermind",
              "/node/manual/execution/reth",
              "/node/manual/validator/deposit",
              "/node/manual/validator/verify",
              "/node/manual/validator/generate-keys",
              "/node/manual/validator/generate-keys/cli",
              "/node/manual/validator/generate-keys/wagyu",
              "/node/manual/validator/Run Client/lighthouse",
              "/node/manual/validator/Run Client/lodestar",
              "/node/manual/validator/Run Client/nimbus",
              "/node/manual/validator/Run Client/teku",
              "/node/participate-validator/liquid-staking",
              "/node/participate-validator/swarm",
              "/node/participate-validator/swarm/a-quickstart-swarm",
              "/node/participate-validator/swarm/b-docker-swarm",
              "/node/participate-validator/swarm/c-dappnode-swarm",
            ],
          },
          // Bridges FAQs merged into the master FAQ as its Bridging subsection
          {
            to: "/faq/others",
            from: "/faq/bridges",
          },
          // Node FAQs and Validators FAQ archived to /archives/FAQ
          {
            to: "/faq/others",
            from: [
              "/faq/node",
              "/faq/Node FAQs/changingwc",
              "/faq/Node FAQs/depositWithdrawalReward",
              "/faq/Node FAQs/generalQuestions",
              "/faq/Node FAQs/monitoring",
              "/faq/Node FAQs/offlineAndSyncIssue",
              "/faq/Node FAQs/runningNode",
              "/faq/Node FAQs/staking",
            ],
          },
          {
            to: "/about/communication",
            from: "/developers/communication",
          },
          // Optimism on Gnosis was deprecated in March 2023; page archived to /archives/Optimism
          {
            to: "/about/networks/",
            from: "/about/networks/optimism",
          },
          // Truffle was sunset by Consensys in 2023; pages archived to /archives/Truffle
          {
            to: "/developers/dev-environment/hardhat",
            from: "/developers/dev-environment/truffle",
          },
          {
            to: "/developers/Verify Smart Contracts/",
            from: "/developers/Verify Smart Contracts/truffle",
          },
        ],
      },
    ],
    [
      "docusaurus-plugin-generate-llms-txt",
      {
        outputFile: "llms.txt", // defaults to llms.txt if not specified
      },
    ],
  ],
};

module.exports = config;
