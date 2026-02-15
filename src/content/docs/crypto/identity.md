---
title: Identity
description: Create and manage hybrid post-quantum identities.
---

## Create an Identity

```typescript
import { crypto } from '@brivora/crypto';

const identity = await crypto.createIdentity();
// {
//   publicKey: { classical: { signing, encryption }, pqc: { signing, encryption } },
//   privateKey: { classical: { signing, encryption }, pqc: { signing, encryption } },
//   fingerprint: 'a1b2c3d4...',
//   algorithm: 'hybrid-pqc-v1',
//   createdAt: '2026-02-13T...'
// }
```

Every identity contains both classical (Ed25519 + X25519) and post-quantum (ML-DSA-65 + ML-KEM-768) key pairs.

## Export & Import

```typescript
// Serialize for storage
const serialized = await crypto.exportKey(identity);

// Restore from storage
const restored = await crypto.importKey(serialized);
```

## Public Key Sharing

```typescript
// Export only the public key (safe to share)
const pubKey = await crypto.exportPublicKey(identity);

// Import a shared public key
const imported = await crypto.importPublicKey(pubKey);
```

## Fingerprinting

```typescript
const fp = crypto.fingerprint(identity.publicKey);
// SHA-256 hex string of combined public keys
```

## API Reference

| Method | Description |
|--------|-------------|
| `crypto.createIdentity(options?)` | Create a new hybrid identity |
| `crypto.exportKey(identity, format?)` | Serialize identity for storage |
| `crypto.importKey(serialized)` | Restore identity from serialized form |
| `crypto.exportPublicKey(identity)` | Export only the public key (safe to share) |
| `crypto.importPublicKey(encoded)` | Import a shared public key |
| `crypto.fingerprint(...keys)` | SHA-256 fingerprint of public keys |
