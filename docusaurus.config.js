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
  baseUrl: process.env.DOCS_BASE_URL || "/",
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
          // Right-hand links (Ecosystem, socials, CTA) live in the shared
          // site header rendered by src/theme/Navbar/Content, not here.
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
          // Slug typo fixed (brige -> bridge)
          {
            to: "/bridges/bridge-limits",
            from: "/bridges/brige-limits",
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
