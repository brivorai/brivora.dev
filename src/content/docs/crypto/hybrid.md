---
title: Hybrid PQC + Classical Mode
description: How and why Brivora uses both classical and post-quantum algorithms simultaneously.
---

By default, `@brivora/crypto` operates in hybrid mode -- every operation uses both classical and post-quantum algorithms simultaneously.

## Why hybrid?

- **Classical algorithms** (Ed25519, X25519) are battle-tested and well-understood
- **PQC algorithms** (ML-DSA, ML-KEM) are newer and still being studied
- **Hybrid mode** means security is maintained as long as EITHER algorithm remains secure
- Provides backward compatibility during the PQC transition

## When to use PQC-only

- Applications with no classical dependencies
- Maximum quantum resistance without classical overhead
- Systems that will operate beyond the expected lifetime of classical cryptography

## Switching modes

```typescript
// Hybrid (default) -- both classical + PQC
const signed = await crypto.sign(data, key.privateKey);

// PQC-only -- ML-DSA-65 only
const signed = await crypto.sign(data, key.privateKey, { hybrid: false });
```

## Algorithm pairings

| Operation | Classical | Post-Quantum | Hybrid |
|-----------|-----------|--------------|--------|
| Signing | Ed25519 | ML-DSA-65 | Both signatures generated |
| Encryption | X25519 + AES-256-GCM | ML-KEM-768 + AES-256-GCM | Shared secret from both |
| Key exchange | X25519 | ML-KEM-768 | Combined shared secret |

In hybrid mode, the shared secret for encryption is derived from both the classical and PQC key exchanges using HKDF. Both must be compromised for the encryption to break.
