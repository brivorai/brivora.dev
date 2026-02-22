---
title: Signature Verification
description: PQC signature verification algorithm for governance proofs.
---

Governance proofs are signed with ML-DSA-65 (FIPS 204). In hybrid mode, an Ed25519 signature is also included.

## Verification algorithm

1. Extract `merkle_root` from proof
2. Reconstruct Merkle tree from `evidence_chain` and verify root matches
3. Verify ML-DSA-65 signature over `merkle_root` using `proof.public_key`
4. If hybrid: verify Ed25519 signature over `merkle_root`
5. Proof is valid if Merkle root matches AND at least one signature verifies

## Implementation

```typescript
function verifyProof(proof: BrivoraProof): boolean {
  // Step 1: Reconstruct Merkle root
  const computedRoot = buildMerkleTree(proof.evidence_chain);

  // Step 2: Compare roots
  if (!bytesEqual(computedRoot, proof.merkle_root)) {
    return false;
  }

  // Step 3: Verify PQC signature
  const pqcValid = mlDsa65Verify(
    proof.signature.pqc,
    proof.merkle_root,
    proof.public_key
  );

  // Step 4: Verify classical signature (if present)
  let classicalValid = false;
  if (proof.signature.classical) {
    classicalValid = ed25519Verify(
      proof.signature.classical,
      proof.merkle_root,
      proof.public_key
    );
  }

  // Step 5: Valid if at least one signature verifies
  return pqcValid || classicalValid;
}
```

## Security properties

| Property | Guarantee |
|----------|-----------|
| Tamper evidence | Merkle root changes if any evidence is modified |
| Authenticity | ML-DSA-65 signature proves who generated the proof |
| Non-repudiation | Signer cannot deny generating the proof |
| Quantum resistance | ML-DSA-65 is secure against quantum computers |
| Backward compatibility | Ed25519 provides classical verification fallback |
