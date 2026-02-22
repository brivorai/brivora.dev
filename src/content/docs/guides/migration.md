---
title: Migrating from Classical Cryptography
description: Upgrade existing Ed25519 keys to hybrid post-quantum cryptography.
---

If you're currently using Ed25519 for signatures or X25519 for key exchange, `@brivora/crypto` provides a smooth upgrade path to hybrid PQC.

## Step 1: Upgrade existing Ed25519 keys

```typescript
import { crypto } from '@brivora/crypto';

const upgraded = await crypto.upgradeKey({
  publicKey: existingEd25519PublicKey,
  secretKey: existingEd25519SecretKey,
});

// upgraded.identity -- new hybrid PQC identity
// upgraded.migration -- signed proof linking old key to new key
```

## Step 2: Verify the upgrade

```typescript
const { valid } = await crypto.verify(upgraded.migration, oldPublicKey);
// valid === true -- the upgrade is cryptographically linked to the old key
```

## Step 3: Distribute the migration proof

Publish the migration proof so that anyone who trusted your old Ed25519 key can verify that your new hybrid PQC key is legitimate. The proof is signed by both the old and new keys.

## Migration strategy

| Phase | Action | Duration |
|-------|--------|----------|
| 1. Upgrade | Generate hybrid identities for all existing keys | Hours |
| 2. Dual mode | Accept both old Ed25519 and new hybrid signatures | Weeks-months |
| 3. Cutover | Require hybrid signatures, deprecate classical-only | When ready |

## Backward compatibility

During migration, hybrid mode ensures:
- Old systems can still verify Ed25519 signatures from hybrid keys
- New systems get full PQC protection
- No breaking changes to existing verification flows
