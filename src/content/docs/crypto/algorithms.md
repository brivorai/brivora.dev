---
title: Algorithms
description: Cryptographic algorithms used by @brivora/crypto.
---

## Algorithm Reference

| Algorithm | Standard | Usage |
|-----------|----------|-------|
| ML-KEM-768 | FIPS 203 | Key encapsulation (encryption) |
| ML-DSA-65 | FIPS 204 | Digital signatures |
| X25519 | RFC 7748 | Classical key exchange (hybrid) |
| Ed25519 | RFC 8032 | Classical signatures (hybrid) |
| AES-256-GCM | FIPS 197 | Symmetric encryption |
| HKDF-SHA256 | RFC 5869 | Key derivation |
| SHA-256 | FIPS 180-4 | Hashing, fingerprinting |
| SHA-3-256 | FIPS 202 | Merkle tree hashing (verify) |

## Hybrid Mode

All operations use classical + post-quantum crypto by default. This is defense-in-depth: both algorithms must be broken to compromise security.

### Why Hybrid?

Post-quantum algorithms are mathematically sound but relatively new in production. Classical algorithms (Ed25519, X25519) have decades of cryptanalysis. Hybrid mode gives you the best of both worlds:

- **If PQC algorithms are broken**: classical crypto still protects you
- **If quantum computers break classical crypto**: PQC still protects you
- **Both must fail** for a compromise

You can disable hybrid mode with `{ hybrid: false }` for PQC-only operation when you're confident in the post-quantum algorithms alone.

## Security Properties

- **Constant-time comparisons** — All byte comparisons use constant-time algorithms to prevent timing side-channels
- **CSPRNG** — All random bytes from `crypto.getRandomValues()` (OS-level CSPRNG)
- **No network calls** — Everything runs locally. Zero telemetry.
- **Audited primitives** — Built on [@noble/post-quantum](https://github.com/paulmillr/noble-post-quantum) (audited by Cure53)

## Tree Shaking

Import only what you need:

```typescript
// Only signing — no encryption code in your bundle
import { sign, verify, createIdentity } from '@brivora/crypto';
```
