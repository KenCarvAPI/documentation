---
sidebar_position: 1
title: "Guide: Read a Price Feed"
description: Read a live Chainlink price feed on Gnosis Chain from a script in under five minutes, and verify the answer on Blockscout.
keywords: [price feed, chainlink, oracle, viem, gnosis]
---

# Read a Price Feed

Five minutes from an empty directory to a live ETH/USD price read from Gnosis Chain — and a way to verify the answer on-chain. Works the same on Ethereum mainnet with a different feed address.

## 1. Set up

```bash
mkdir price-feed && cd price-feed && npm init -y && npm install viem
```

## 2. Read the feed

Chainlink's ETH/USD aggregator on Gnosis lives at [`0xa767f745331D267c7751297D982b050c93985627`](https://gnosis.blockscout.com/address/0xa767f745331D267c7751297D982b050c93985627). Save this as `price.mjs`:

```js
import { createPublicClient, http, parseAbi } from "viem";
import { gnosis } from "viem/chains";

const client = createPublicClient({ chain: gnosis, transport: http() });

const feed = "0xa767f745331D267c7751297D982b050c93985627"; // ETH/USD
const abi = parseAbi([
  "function latestRoundData() view returns (uint80, int256 answer, uint256, uint256 updatedAt, uint80)",
  "function decimals() view returns (uint8)",
]);

const [[, answer, , updatedAt], decimals] = await Promise.all([
  client.readContract({ address: feed, abi, functionName: "latestRoundData" }),
  client.readContract({ address: feed, abi, functionName: "decimals" }),
]);

console.log(`ETH/USD: ${Number(answer) / 10 ** decimals}`);
console.log(`updated: ${new Date(Number(updatedAt) * 1000).toISOString()}`);
```

```bash
node price.mjs
```

## 3. Verify the result

Open the feed on [Blockscout](https://gnosis.blockscout.com/address/0xa767f745331D267c7751297D982b050c93985627?tab=read_contract) and call `latestRoundData` from the **Read contract** tab — the `answer` should match your script's output.

## Where to go next

- Other pairs: the full list of Gnosis feeds is in the [Chainlink docs](https://docs.chain.link/docs/data-feeds-gnosis-chain/).
- Use it in Solidity: the [Chainlink provider page](/tools/oracles/chainlink) walks through the same read from a contract.
- Alternative providers: [compare the oracle providers](/tools/oracles/) — Pyth for high-frequency market data, Supra for [verifiable randomness](/tools/oracles/supraoracles/vrf).
