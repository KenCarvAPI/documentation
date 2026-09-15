---
description: Gnosis Chain key contracts, addresses, beacon chain parameters, deposit contracts and upgradeability
keywords: [gnosis contracts, gnosis addresses, gnosis beacon chain, gbc, deposit contracts, gnosis upgradeability]
---

# Contracts & Addresses

### **Contracts & Token Addresses**

:::caution DO NOT send funds directly to the GBC Deposit Contract.
To stake on GBC, follow the validator instructions at [validategnosis.com](https://www.validategnosis.com/).
:::

| Contract             | Address                                                                                                                                            |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| GBC Deposit Contract | [0x0B98057eA310F4d31F2a452B414647007d1645d9](https://gnosis.blockscout.com/address/0x0B98057eA310F4d31F2a452B414647007d1645d9)                     |
| GNO-> mGNO contract  | [0x647507A70Ff598F386CB96ae5046486389368C66](https://gnosis.blockscout.com/address/0x647507A70Ff598F386CB96ae5046486389368C66)                     |
| GNO token on Gnosis  | [0x9C58BAcC331c9aa871AFD802DB6379a98e80CEdb](https://gnosis.blockscout.com/token/0x9C58BAcC331c9aa871AFD802DB6379a98e80CEdb/token-transfers) |


### **Current Parameters**

Live values from the beacon chain spec (`/eth/v1/config/spec` on `rpc-gbc.gnosischain.com`).

| Variable                       | Value                                                                |
| ------------------------------ | -------------------------------------------------------------------- |
| Minimum activation balance     | 1 GNO                                                                |
| Maximum effective balance      | 64 GNO (`0x02` compounding validators, since Pectra)                 |
| Slot time                      | 5 seconds                                                            |
| Slots per epoch                | 16 (80-second epochs)                                                |
| Activation / exit churn        | 2 GNO-equivalent per epoch                                           |
| Consensus clients              | Lighthouse, Teku, Nimbus, Lodestar                                   |
| Explorer                       | [beaconchain.gnosischain.com](https://beaconchain.gnosischain.com/)  |
| Beacon RPC                     | [rpc-gbc.gnosischain.com](https://rpc-gbc.gnosischain.com)           |

### **Launch Parameters (December 2021, historical)**

:::note
The table below records the parameters at Gnosis Beacon Chain launch. mGNO has since been deprecated, and validator balances and client support have changed; see the current parameters above.
:::

| Variable                     | Value                                                                                                                                                                                 |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Staking amount               | 32 mGNO (equivalent to 1 GNO)                                                                                                                                                         |
| Block time                   | 5 seconds                                                                                                                                                                             |
| Validator slots per epoch    | 16 (with further reduction possible, [N > 1 honest proposer/epoch as per V. Buterin](https://notes.ethereum.org/@vbuterin/rkhCgQteN?type=view#Why-32-ETH-validator-sizes))            |
| Validators per slot          | 128 ([see more on minimum committee size](https://medium.com/@chihchengliang/minimum-committee-size-explained-67047111fa20))                                                          |
| Epoch time                   | 80 seconds                                                                                                                                                                            |
| Slashing                     | Reductions to 16 mGNO, then removal                                                                                                                                                   |
| Clients                      | Prysm, Lighthouse                                                                                                                                                                     |
| Custom Deposit Contract      | <p></p><ul><li>mGNO deposit (ERC20 enabled)</li><li>Upgradeable</li><li>Claiming on accidental locks</li><li>Custom network keys generation (deposit-cli)</li></ul>                   |
| Explorer                     | <p>Modified beaconchain explorer<br /><span data-gb-custom-inline data-tag="emoji" data-code="1f50d">🔍</span> <a href="https://beaconchain.gnosischain.com">beaconchain.gnosischain.com</a></p> |
| RPC                          | [https://rpc-gbc.gnosischain.com](https://rpc-gbc.gnosischain.com)                                                                                                                    |
| Launch MVP                   | <p>4096 validators<br />131,072 mGNO </p><p>83% APY</p>                                                                                                                               |
| Security Goal Prior to Merge | <p>50K+ validators</p><p>1.6M+ mGNO</p><p>23% APY</p>                                                                                                                                 |

## Deposit Contracts

The Deposit contracts allow to deposit ERC20 tokens to Gnosis Chain and withdraw them back to Ethereum mainnet.

The Deposit contracts on mainnet and Gnosis Chain are almost identical. However, Gnosis Chain users need to manually call the `claimWithdrawal(address)` or `claimWithdrawals(addresses)` method to withdraw the tokens/rewards back, whereas on Ethereum mainnet that's done automatically.

The main issue is that GNO is an ERC20 token and it must emit `Transfer` events as per [EIP-20](https://eips.ethereum.org/EIPS/eip-20#transfer), which Gnosis Chain cannot do with system transactions at the moment. That's why it's required to call a normal transaction to claim GNO tokens. The alternative would be very complex and diverge from Ethereum on the EL side.

The main withdrawal methods look as follows:

```solidity
/**
  * @dev Claim withdrawal amount for an address
  * @param _address Address to transfer withdrawable tokens
  */
function claimWithdrawal(address _address) public {
    uint256 amount = withdrawableAmount[_address];
    if (amount > 0) {
        withdrawableAmount[_address] = 0;
        stake_token.safeTransfer(_address, amount);
    }
}
/**
  * @dev Claim withdrawal amounts for an array of addresses
  * @param _addresses Addresses to transfer withdrawable tokens
  */
function claimWithdrawals(address[] calldata _addresses) external {
    for (uint256 i = 0; i < _addresses.length; ++i) {
        claimWithdrawal(_addresses[i]);
    }
}
```

You can find a full list of contract differences on Github:
- [Gnosis Chain](https://github.com/gnosischain/deposit-contract/blob/master/contracts/SBCDepositContract.sol#L237-L257)
- [Shapella](https://github.com/gnosischain/deposit-contract/compare/c7217fccac3049901f78547f4024127fa1dcdcd4..master)

## Upgradeability

One differentiator for the Gnosis Beacon Chain relative to the Ethereum Beacon chain is the ability to upgrade contracts. A proxy pattern allows for this functionality, which can be extremely useful if an update is required (a bug is found, new functionality added etc).

However, this also introduces issues of administrative responsibility. No one entity should solely control contract updates.

A multi-sig Gnosis Safe is used to expand admin responsibilities to a larger entity. The controlling assembly is a Governance Board consisting of known and active projects who have contributed to the Gnosis and Ethereum community for some time.

A proposed upgrade is presented to this board and a minimum of 7 signatures are required to enact any proposal.

[Governance Board Members](/bridges/security-and-governance/governance/#current-bridge-governors)

### Contracts managed by the Governance Board

- Deposit Contract: [0x0B98057eA310F4d31F2a452B414647007d1645d9](https://gnosis.blockscout.com/address/0x0B98057eA310F4d31F2a452B414647007d1645d9/read-contract)
