---
title: Migration
description: Upgrade existing Ed25519 keys to hybrid post-quantum.
---

## Upgrade from Ed25519

```typescript
import { crypto } from '@brivora/crypto';

const upgraded = await crypto.upgradeKey({
  publicKey: existingEd25519PublicKey,
  secretKey: existingEd25519SecretKey,
});

// upgraded.identity is now a hybrid PQC identity
// upgraded.migration is a signed proof of the upgrade
```

The upgrade process:

1. Takes your existing Ed25519 key pair
2. Generates new ML-DSA-65 + ML-KEM-768 key pairs
3. Creates a hybrid identity combining classical and PQC keys
4. Produces a signed migration proof linking old key to new identity

The migration proof ensures verifiable continuity — anyone can confirm the new identity belongs to the same entity as the old Ed25519 key.

## API Reference

| Method | Description |
|--------|-------------|
| `crypto.upgradeKey(ed25519KeyPair)` | Upgrade Ed25519 → hybrid PQC |
