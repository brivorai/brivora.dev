---
title: Digital Signatures
description: ML-DSA-65 post-quantum digital signatures with Ed25519 hybrid mode.
---

`@brivora/crypto` uses ML-DSA-65 (FIPS 204) for post-quantum digital signatures, combined with Ed25519 in hybrid mode. Both signatures are generated simultaneously -- the payload is valid if either one verifies.

## Sign and verify

```typescript
import { crypto } from '@brivora/crypto';

const alice = await crypto.createIdentity();

// Sign any data (string or Uint8Array)
const signed = await crypto.sign('important document', alice.privateKey);

// Verify with the signer's public key
const result = await crypto.verify(signed, alice.publicKey);
console.log(result.valid);  // true
console.log(result.data);   // Uint8Array of original data
```

## PQC-only mode

```typescript
const signed = await crypto.sign(data, alice.privateKey, { hybrid: false });
// Only ML-DSA-65 signature, no Ed25519
```

## Signed payload structure

```typescript
interface SignedPayload {
  version: 1;
  algorithm: 'hybrid-pqc-v1' | 'pqc-only-v1';
  data: Uint8Array;           // Original data
  classical?: Uint8Array;     // Ed25519 signature (64 bytes)
  pqc: Uint8Array;            // ML-DSA-65 signature (~3,300 bytes)
  publicKey: Uint8Array;      // Signer's public key
}
```
