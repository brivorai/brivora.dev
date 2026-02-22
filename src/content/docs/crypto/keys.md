---
title: Key Management
description: Create, export, import, rotate, and derive cryptographic keys.
---

## Create an identity

```typescript
import { crypto } from '@brivora/crypto';

const identity = await crypto.createIdentity();
// identity contains:
// - publicKey: { classical: { signing, encryption }, pqc: { signing, encryption } }
// - privateKey: { classical: { signing, encryption }, pqc: { signing, encryption } }
// - fingerprint: 'a1b2c3d4...'
// - algorithm: 'hybrid-pqc-v1'
// - createdAt: ISO timestamp
```

## Export and import public keys

```typescript
// Export (safe to share)
const exported = crypto.exportPublicKey(alice);

// Import (received from another party)
const imported = crypto.importPublicKey(exported);

// Use imported key for encryption
const encrypted = await crypto.encrypt('message', imported);
```

## Key rotation

```typescript
const { newIdentity, migration } = await crypto.rotateKeys(oldIdentity);

// migration is a signed proof linking old key -> new key
// Anyone can verify the rotation is legitimate:
const { valid } = await crypto.verify(migration, oldIdentity.publicKey);
// valid === true
```

## Key derivation

```typescript
const masterKey = crypto.randomBytes(32);

// Derive context-specific keys from a master secret
const encKey = crypto.deriveKey(masterKey, 'encryption');
const authKey = crypto.deriveKey(masterKey, 'authentication');

// Same context = same key (deterministic)
// Different context = different key
```

## Upgrade from Ed25519

```typescript
const upgraded = await crypto.upgradeKey({
  publicKey: existingEd25519PublicKey,
  secretKey: existingEd25519SecretKey,
});

// upgraded.identity is now hybrid PQC
// upgraded.migration is a signed proof of the upgrade
```

<!-- TODO: Replace with final hand-drawn diagram showing key lifecycle: create -> use -> rotate (with migration proof) -> new key -->
