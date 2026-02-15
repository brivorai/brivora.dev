---
title: Key Management
description: Key rotation with migration proofs and HKDF key derivation.
---

## Key Rotation

```typescript
import { crypto } from '@brivora/crypto';

const { newIdentity, migration } = await crypto.rotateKeys(oldIdentity);
// migration is a signed proof linking old key → new key
```

The migration proof is cryptographically signed by the old key, creating an auditable chain of key ownership.

## Key Derivation

```typescript
const masterKey = crypto.randomBytes(32);
const encKey = crypto.deriveKey(masterKey, 'encryption');
const authKey = crypto.deriveKey(masterKey, 'authentication');
// Different contexts → different deterministic keys
```

Uses HKDF-SHA256 (RFC 5869) for deterministic key derivation. Same master key + same context always produces the same derived key.

## API Reference

| Method | Description |
|--------|-------------|
| `crypto.rotateKeys(oldIdentity, newIdentity?)` | Rotate keys with migration proof |
| `crypto.deriveKey(masterKey, context, length?)` | HKDF-SHA256 key derivation |
| `crypto.randomBytes(length)` | CSPRNG random bytes |
