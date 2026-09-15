---
sidebar_position: 1
title: "Guide: Connect and Read the Chain"
description: Connect to Gnosis Chain over JSON-RPC and read your first block from a script in under five minutes, and verify the result on Blockscout.
keywords: [rpc, json rpc, viem, connect, gnosis, first block]
---

# Connect and Read the Chain

Five minutes from an empty directory to reading live chain state over JSON-RPC — and a way to verify the answer on-chain. Works the same on Ethereum mainnet by swapping the chain import.

## 1. Set up

```bash
mkdir hello-gnosis && cd hello-gnosis && npm init -y && npm install viem
```

## 2. Read the chain

Save this as `read.mjs`. It uses the free public RPC (`https://rpc.gnosischain.com`, viem's default for Gnosis) — fine for scripts; use a [provider](/tools/rpc-providers/) for production traffic.

```js
import { createPublicClient, http, formatEther } from "viem";
import { gnosis } from "viem/chains";

const client = createPublicClient({ chain: gnosis, transport: http() });

const block = await client.getBlock();
console.log(`block #${block.number} at ${new Date(Number(block.timestamp) * 1000).toISOString()}`);
console.log(`gas used: ${block.gasUsed} / ${block.gasLimit}`);

// xDai balance of any address — swap in your own
const balance = await client.getBalance({
  address: "0x9C58BAcC331c9aa871AFD802DB6379a98e80CEdb",
});
console.log(`balance: ${formatEther(balance)} xDai`);
```

```bash
node read.mjs
```

## 3. Verify the result

Open [Blockscout](https://gnosis.blockscout.com/) — the latest block number on the homepage should match your script's output (give or take the ~5-second block time), and any address you queried shows the same balance on its page.

## Where to go next

- Production traffic or websockets: [pick an RPC provider](/tools/rpc-providers/).
- Testnet: swap `gnosis` for `gnosisChiado` in the import — free xDai from the [faucets](/tools/Faucets).
- Write your first transaction: the [developer quickstart](/developers/quickstart) deploys a contract next.
