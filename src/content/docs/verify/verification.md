---
title: Independent Verification
description: How to verify governance proofs without trusting anyone.
---

Anyone can verify a BrivoraProof without trusting Brivora, the system operator, or any intermediary. No API. No account. Just math.

## Verify a proof

```typescript
import { verify } from '@brivora/verify';

const verified = await verify.check(proof, verifierPublicKey);
console.log(verified.valid);        // true
console.log(verified.governance);   // 'eu-ai-act'
console.log(verified.timestamp);    // ISO timestamp
```

## What verification checks

1. **Merkle root matches the evidence chain** -- tamper evidence
2. **ML-DSA-65 signature is valid** -- authenticity
3. **Ed25519 signature is valid if present** -- hybrid verification
4. **Timestamp is within acceptable range**
5. **Proof version is supported**

## Verification without Brivora

The verification algorithm is fully specified in the [Protocol Specification](/protocol/signature-verification/). Any implementation in any language can verify a BrivoraProof. You do not need Brivora's software, servers, or permission.

## Chain verification

Verify an entire chain of proofs:

```typescript
const chainResult = await verify.checkChain(proofs, publicKey);
console.log(chainResult.valid);      // true if entire chain is valid
console.log(chainResult.length);     // number of proofs in chain
console.log(chainResult.coverage);   // time range covered
```
