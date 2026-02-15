---
title: Audit Store
description: Persist proofs for later retrieval.
---

## Create an Audit Store

```typescript
import { verify } from '@brivora/verify';

// In-memory store
const store = verify.createAuditStore({ type: 'memory' });

// File-based store
const store = verify.createAuditStore({ type: 'file', path: './audit' });
```

## Save and Retrieve

```typescript
await store.save(result.proof);

// List all stored proofs
const proofs = await store.list();

// Retrieve a specific proof by hash
const proof = await store.load(proofHash);
```

## Chain Retrieval

```typescript
// Get all proofs in a chain starting from a specific proof
const chain = await store.chain({ from: startHash });
```

## Custom Adapters

```typescript
const store = verify.createAuditStore({
  type: 'custom',
  adapter: {
    save: async (proof) => { /* your storage logic */ },
    load: async (hash) => { /* your retrieval logic */ },
    list: async (options) => { /* your listing logic */ },
    chain: async (options) => { /* your chain logic */ },
  },
});
```
