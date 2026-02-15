---
title: "@brivora/crypto"
description: Post-quantum cryptography in 3 lines of TypeScript.
---

**@brivora/crypto** is an opinionated, batteries-included post-quantum cryptography library for JavaScript/TypeScript.

- **Hybrid by default** — Classical (Ed25519 + X25519) + Post-Quantum (ML-DSA-65 + ML-KEM-768). Both must be broken to compromise security.
- **NIST FIPS compliant** — ML-KEM-768 (FIPS 203), ML-DSA-65 (FIPS 204), finalized August 2024.
- **Self-describing payloads** — Every encrypted/signed payload includes version and algorithm metadata.
- **Zero configuration** — Sensible defaults. No crypto PhD required.
- **Pure TypeScript** — No native modules. No WASM. Works everywhere: Node.js, Deno, Bun, browsers.
- **Zero telemetry** — No analytics. No network calls. Pure local computation.

## Install

```bash
npm install @brivora/crypto
```

## 3-Line Quick Start

```typescript
import { crypto } from '@brivora/crypto';
const keys = await crypto.createIdentity();
const signed = await crypto.sign(data, keys.privateKey);
```

## Built On

- [@noble/post-quantum](https://github.com/paulmillr/noble-post-quantum) — ML-KEM, ML-DSA (audited by Cure53)
- [@noble/hashes](https://github.com/paulmillr/noble-hashes) — SHA-2, SHA-3, HKDF
- [@noble/curves](https://github.com/paulmillr/noble-curves) — Ed25519, X25519

## Requirements

- Node.js 20+ (also works in Deno, Bun, and modern browsers)
- Web Crypto API (`globalThis.crypto.subtle`)
