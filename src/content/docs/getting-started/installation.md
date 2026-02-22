---
title: Installation
description: Install @brivora/crypto and @brivora/verify.
---

## Requirements

- Node.js >= 20.0.0
- npm, pnpm, or yarn

## Install both packages

```bash
npm install @brivora/crypto @brivora/verify
```

Or install individually:

```bash
npm install @brivora/crypto
npm install @brivora/verify
```

## Runtime compatibility

| Runtime | Support |
|---------|---------|
| Node.js | >= 20.0.0 |
| Deno | With `npm:` specifier |
| Bun | Native |
| Browsers | With bundler (Vite, esbuild, webpack) |

Both packages are ESM-first with CJS fallback. TypeScript types included.

## What you get

**@brivora/crypto** -- Post-quantum cryptography. ML-KEM-768 encryption, ML-DSA-65 signatures, SLH-DSA hash-based signatures, hybrid mode with Ed25519/X25519.

**@brivora/verify** -- AI governance verification. 24 built-in governance packs, PQC-signed Merkle tree proofs, independent verification.

## Zero configuration

No external network calls. No telemetry. No configuration required. Install and use.
