---
title: Independent Verification
description: Verify proofs without Brivora — no API, no account, pure math.
---

## Verify a Proof

```typescript
import { verify } from '@brivora/verify';

const verified = await verify.check(proof, publicKey);
console.log(verified.valid); // true or false
```

## What Verification Checks

1. **Merkle tree reconstruction** — Recomputes the tree from the evidence chain
2. **Root hash comparison** — Computed root must match the signed root
3. **Signature verification** — ML-DSA-65 + Ed25519 hybrid signature must be valid
4. **Chain integrity** (if chained) — `previous_proof` hash must match

If any event in the evidence chain was tampered with, the Merkle root changes and the signature becomes invalid.

## Verification Result

```typescript
interface VerifyResult {
  valid: boolean;                       // Signature AND Merkle root both valid
  proof: BrivoraProof;                  // The proof that was verified
  governance_policy: ContentHash;       // Which governance was applied
  evaluation_result: 'PASS' | 'FAIL' | 'PARTIAL';
  timestamp: string;
  chain_valid?: boolean;                // If chained, did the chain verify?
}
```

## Self-Contained Proofs

Every `BrivoraProof` includes the public key needed for verification. This means:

- No API call to Brivora required
- No account or authentication needed
- No external state or database lookup
- Anyone with the proof can verify it independently
- Verification works offline

The proof is pure math. The trust model is cryptographic, not institutional.
