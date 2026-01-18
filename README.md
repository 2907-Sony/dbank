## 🏦 dBank — Decentralized Banking Application

dBank is a decentralized banking application built using the **Internet Computer Protocol (ICP)**.  
This project demonstrates how smart contracts (canisters) can securely store and manage user balances without relying on a centralized backend.

> Note: This project is currently for **learning and portfolio purposes** and has not been deployed to the ICP mainnet.


## 🚀 Features

- Secure balance storage using a Motoko canister
- Smart contract logic running fully on-chain
- Frontend interacting with backend via Candid interface
- Local ICP development environment using DFX


## 🛠️ Tech Stack

- **Internet Computer (ICP)**
- **Motoko** — Backend canister
- **DFX SDK**
- **JavaScript / React** — Frontend
- **Candid** — Interface definition language


## 📁 Project Structure
dbank/src/dbank_backend/ # Motoko smart contract and  dbank_frontend/ # Frontend application
|
dfx.json
|
package.json
|
README.md

## ▶️ Running Locally 

This project can be run locally using the Internet Computer SDK.

```bash
dfx start --background
dfx deploy --

## 🌟 After deployment, the app is available at

http://localhost:4943/?canisterId=<asset_canister_id>
