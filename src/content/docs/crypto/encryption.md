---
title: Encryption
description: Hybrid X25519 + ML-KEM-768 encryption with AES-256-GCM.
---

## Encrypt & Decrypt

```typescript
import { crypto } from '@brivora/crypto';

// Alice encrypts a message for Bob
const encrypted = await crypto.encrypt('secret message', bob.publicKey);

// Bob decrypts
const plaintext = await crypto.decrypt(encrypted, bob.privateKey);
// Uint8Array → use new TextDecoder().decode(plaintext) for strings
```

## How Hybrid Encryption Works

1. Generate ephemeral X25519 key pair
2. Compute classical shared secret via X25519 ECDH
3. Encapsulate PQC shared secret via ML-KEM-768
4. Combine both secrets via HKDF-SHA256
5. Encrypt plaintext with AES-256-GCM

An attacker must break **both** X25519 **and** ML-KEM-768 to recover the plaintext.

## PQC-Only Mode

```typescript
// Disable classical crypto (PQC-only)
const encrypted = await crypto.encrypt(data, pubKey, { hybrid: false });
```

## API Reference

| Method | Description |
|--------|-------------|
| `crypto.encrypt(data, recipientPublicKey, options?)` | Hybrid encrypt (X25519 + ML-KEM-768 + AES-256-GCM) |
| `crypto.decrypt(encrypted, privateKey)` | Decrypt with your private key |
