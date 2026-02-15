---
title: Proof Chaining
description: Link sequential proofs for a tamper-evident audit trail.
---

## Chain Proofs Together

```typescript
import { verify } from '@brivora/verify';

const verifier = await verify.createVerifier();
const chain = verify.createChain(verifier);

// Each call adds to the chain
const r1 = await verify.govern(fn1, { governance: 'minimal', verifier, chain });
const r2 = await verify.govern(fn2, { governance: 'minimal', verifier, chain });

// Verify the entire chain
const chainResult = await verify.checkChain(
  [r1.proof, r2.proof],
  verifier.publicKey
);
console.log(chainResult.valid);           // true
console.log(chainResult.chain_integrity); // true
```

## How It Works

Each proof contains a `previous_proof` field linking it to the prior proof in the chain. This creates a hash-linked chain similar to a blockchain:

```
Proof 1 → Proof 2 → Proof 3 → ...
  ↑ root    ↑ prev=hash(1)   ↑ prev=hash(2)
```

Chain verification:
1. Verify each proof's signature individually
2. Verify each proof's `previous_proof` hash matches the prior proof
3. Verify the chain is complete (no gaps)

If any proof in the chain is tampered with, all subsequent proofs become invalid because their `previous_proof` hashes won't match.
