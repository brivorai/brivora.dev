---
title: Enterprise Deployment
description: Deploy Brivora governance infrastructure at enterprise scale.
---

## Architecture

Enterprise deployments typically involve:

1. **Centralized verifier identity** -- one PQC key pair for the organization
2. **Proof chaining** -- sequential proofs linked for audit trail continuity
3. **Audit store** -- persistent storage for all governance events and proofs
4. **Multi-framework compliance** -- simultaneous evaluation against multiple packs

## Centralized verifier

```typescript
import { verify } from '@brivora/verify';

// Create once, store securely
const verifier = await verify.createVerifier();

// Use for all governance evaluations
const result = await verify.govern(aiCall, {
  governance: 'eu-ai-act',
  verifier,
  audit: true,
});
```

## Proof chaining

```typescript
const chain = verify.createChain(verifier);

// Each call appends to the chain
const result1 = await verify.govern(aiCall1, {
  governance: 'eu-ai-act',
  chain,
});

const result2 = await verify.govern(aiCall2, {
  governance: 'eu-ai-act',
  chain,
});

// Verify the entire chain
const chainResult = await verify.checkChain(chain.proofs, verifier.publicKey);
```

## Multi-framework compliance

For organizations subject to multiple regulations:

```typescript
const frameworks = ['eu-ai-act', 'soc2-ai', 'hipaa-ai'];

const results = await Promise.all(
  frameworks.map(pack =>
    verify.govern(aiCall, { governance: pack, verifier, audit: true })
  )
);

const allPassing = results.every(r => r.valid);
```

## Key management

- Store verifier private keys in HSM or secure key vault
- Rotate keys on a regular schedule using `crypto.rotateKeys()`
- Distribute migration proofs to all verification endpoints
- Maintain a key history for proof chain verification
