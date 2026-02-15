---
title: Signing
description: Hybrid Ed25519 + ML-DSA-65 digital signatures.
---

## Sign & Verify

```typescript
import { crypto } from '@brivora/crypto';

// Sign data
const signed = await crypto.sign('important data', alice.privateKey);

// Verify signature
const { valid, data } = await crypto.verify(signed, alice.publicKey);
// valid: true, data: Uint8Array of original data
```

## How Hybrid Signing Works

1. Sign data with Ed25519
2. Sign data with ML-DSA-65
3. Both signatures must verify for the payload to be valid

An attacker must forge **both** an Ed25519 **and** ML-DSA-65 signature.

## PQC-Only Mode

```typescript
const signed = await crypto.sign(data, privKey, { hybrid: false });
```

## API Reference

| Method | Description |
|--------|-------------|
| `crypto.sign(data, privateKey, options?)` | Hybrid sign (Ed25519 + ML-DSA-65) |
| `crypto.verify(signed, publicKey?)` | Verify a signed payload |
