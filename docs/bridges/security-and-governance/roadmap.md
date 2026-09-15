---
title: Roadmap
sidebar_position: 3
description: Gnosis is investing significant resources into trust-minimization of its Bridges, to ensure trust and safety of users.
keywords: [bridge roadmap, trustless bridge, light client, zksnark]
---

### Fast Confirmation Rule(FCR) integration

Fast Confirmation Rule is a new Ethereum feature that provides a very strong assurance a block will not be reorged within 1 slot (12 seconds), a 98% reduction from the approximately 13-minute time to finality. Integrating FCR into bridges improves the bridging time down to seconds without sacrificing the security. Full details [below](#what-is-fcr).

### Hashi - A cross chain protocol based on distributed trust of the underlying security mechanisms (shipped, later deprecated)

:::warning
🚨 The Hashi integration initiative — originally approved under [GIP‑93](https://forum.gnosis.io/t/gip-93-should-gnosisdao-support-the-integration-of-hashi-within-gnosis-chains-canonical-bridges/8245) and subsequently implemented across both the AMB & xDAI bridges—is formally **deprecated**.

Read the entire forum details [here](https://forum.gnosis.io/t/deprecation-notice-hashi-on-gnosis-canonical-bridges-ends-maintenance/11467)
:::

Hashi, a cross chain protocol based on distributed trust of the underlying security mechanisms
Hashi is an EVM Hash Oracle Aggregator designed to enhance cross-chain bridge security by aggregating block headers from various sources. By requiring validation from multiple independent mechanisms, Hashi ensures greater resilience against security incidents. It supports 15+ General Message Passing bridges and ZK light clients, promoting redundancy and reducing reliance on single mechanisms. Integrating Hashi into Gnosis Chain's bridges strengthens security, decentralization, and interoperability. This initiative aims to set a new standard for cross-chain transactions, enhancing user confidence and bolstering the Gnosis ecosystem's security posture. [Check out the proposal](https://forum.gnosis.io/t/gip-93-should-gnosisdao-support-the-integration-of-hashi-within-gnosis-chains-canonical-bridges/8245) .

### Telepathy, zkSNARK-enabled Light Client bridge validator ✅

> > Telepathy has been deprecated from Succinct Lab

Succinct Lab's zkSNARK-enabled Light Client, Telepathy, launched in July 2023, has emerged as a key component of the AMB bridge ecosystem. Utilizing zkSNARKs, Telepathy provides validity proofs, ensuring trustless verification of transaction events across chains. This solution has become one of the most active bridge validators in the AMB network, enhancing security and reliability for cross-chain transactions.

After successful audits and release, we aim to gradually migrate our canonical bridges to Hashi’s distributed trust model.

---

## What is FCR?

The Fast Confirmation Rule (FCR) is a new Ethereum feature that provides a very strong assurance a block will not be reorged within 1 slot (12 seconds), a 98% reduction from the approximately 13-minute time to finality.

FCR works by counting attestations in real-time. If there is overwhelming support for a block and robustness checks are passed, the block is fast-confirmed.

FCR comes with two core assumptions. First, it assumes the network is synchronous, meaning attestations are delivered within about 8 seconds. Second, it assumes there is no adversary with more than 25% stake, slightly less than the 33% maximum adversarial stake that finality can withstand. If these assumptions hold, any fast-confirmed block will, with certainty, be finalized.
These assumptions are reasonable and usually hold. In the rare case that they do not, it can cause either a liveness or a safety failure. A liveness failure means it may take longer than 12 seconds to fast-confirm a block. Eventually, the rule automatically falls back to finality. This is a feature, not a bug: FCR falls back to a more secure confirmation rule when needed. A safety failure means that a fast-confirmed block is reorged. With FCR, reorg risk is extremely small. ethPandaOps has conducted experiment by replaying historical Ethereum beacon chain data(a year) through FCR from consensus clients, the result shows that there is [zero false confirmation](https://ethpandaops.io/posts/fcr-simulator/).

## Why Gnosis bridges integrate FCR?

By integrating FCR, it can drastically decrease the current bridging time from Ethereum.

## How would it work in Gnosis bridges?

By default, the processing rules are the following:

| Source Chain | Destination Chain | Processing rule          |
| ------------ | ----------------- | ------------------------ |
| Ethereum     | Gnosis Chain      | FCR (~12s)               |
| Gnosis Chain | Ethereum          | Block finality (~5 mins) |

1. Bridges smart contracts: No modification.
2. Bridge validators logic:
   1. Based on the bridging directions, process the bridging tx accordingly.

   2. The bridge validators run their own nodes, which ensure that the network synchrony of the FCR assumption is satisfied. We require bridge validator to run different clients to ensure client diversity.

   3. In case of hardfork or instability of the network, bridge validator will default to block finality. An alert is raised when a FCR-confirmed processed tx is not later included in the finalized block.

3. Monitoring: Monitoring system will be built to track the following metrics:
   1. Fast confirmed block by each clients
   2. Reorgs event

## Q&A

1. Can user choose FCR or block finality when they initiate the bridging?

No, by default, all bridging txs from Ethereum use FCR, while all bridging txs from Gnosis Chain use block finality. Except in the case where network is unstable or during hardfork period, block finality is the default.

## Reference

1. https://fastconfirm.it/
