---
title: "@brivora/crypto"
description: Post-quantum cryptography in 3 lines of TypeScript.
---

Post-quantum cryptography in 3 lines of TypeScript.

`@brivora/crypto` is a TypeScript library implementing NIST post-quantum cryptographic standards with a simple, unified API. Hybrid by default -- classical Ed25519 + X25519 combined with post-quantum ML-DSA-65 + ML-KEM-768.

Zero configuration. Zero external network calls. Zero telemetry. Works in Node.js, Deno, Bun, and browsers.

```typescript
import { crypto } from '@brivora/crypto';

const keys = await crypto.createIdentity();
const signed = await crypto.sign('hello world', keys.privateKey);
const { valid } = await crypto.verify(signed, keys.publicKey);
// valid === true
```

## What's inside

- **ML-KEM-768** (FIPS 203) -- key encapsulation / encryption
- **ML-DSA-65** (FIPS 204) -- digital signatures
- **SLH-DSA-SHAKE-128f** (FIPS 205) -- stateless hash-based signatures
- **Ed25519 + X25519** -- classical hybrid mode
- Key rotation with signed migration proofs
- Key derivation (HKDF-SHA256)
- Ed25519 key upgrade to hybrid PQC

## Dependencies

- `@noble/post-quantum` -- PQC algorithm implementations
- `@noble/curves` -- Ed25519/X25519
- `@noble/hashes` -- SHA-256, SHA-3, HKDF

## Stats

124 tests | 98.83% coverage | v0.1.0

<!-- TODO: Replace with final hand-drawn diagram showing architecture: identity.ts -> sign.ts/encrypt.ts -> @noble libraries -->
