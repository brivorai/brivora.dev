---
title: Encryption
description: ML-KEM-768 post-quantum encryption with X25519 hybrid mode.
---

`@brivora/crypto` uses ML-KEM-768 (FIPS 203) for post-quantum key encapsulation, combined with X25519 in hybrid mode. Messages are encrypted with AES-256-GCM using a shared secret derived from both classical and PQC key exchange.

## Encrypt and decrypt

```typescript
import { crypto } from '@brivora/crypto';

const alice = await crypto.createIdentity();
const bob = await crypto.createIdentity();

// Encrypt for Bob (using Bob's public key)
const encrypted = await crypto.encrypt('secret message', bob.publicKey);

// Decrypt (only Bob's private key can decrypt)
const plaintext = await crypto.decrypt(encrypted, bob.privateKey);
console.log(new TextDecoder().decode(plaintext)); // 'secret message'
```

## PQC-only mode

```typescript
const encrypted = await crypto.encrypt(data, bob.publicKey, { hybrid: false });
// Only ML-KEM-768, no X25519
```

## Encrypted payload structure

```typescript
interface EncryptedPayload {
  version: 1;
  algorithm: 'hybrid-pqc-v1' | 'pqc-only-v1';
  classical?: Uint8Array;   // X25519 ephemeral public key (32 bytes)
  pqc: Uint8Array;          // ML-KEM-768 ciphertext (1,088 bytes)
  nonce: Uint8Array;        // AES-256-GCM nonce (12 bytes)
  ciphertext: Uint8Array;   // Encrypted data with auth tag
}
```
