---
title: Test Vectors
description: Cross-implementation test vectors for the BrivoraProof protocol.
---

These test vectors enable independent implementations to verify correctness against the reference implementation.

## Merkle tree test vector

**Input leaves (hex-encoded SHA-3-256 hashes):**

```
L1: a7ffc6f8bf1ed76651c14756a061d662f580ff4de43b49fa82d80a4b80f8434a
L2: 3a985da74fe225b2045c172d6bd390bd855f086e3e9d525b46bfe24511431532
L3: 64e604787cbf194841e7b68d7cd28786f6c9a0a3ab9f8b0a0e87cb4387ab0107
L4: 48bed44d1bcd124a28c27f343a817e5f5243190d3c52bf347b0fa3f3e340f8a3
L5: 644bcc7e564373040999aac89e7622f3ca71fba1d972fd94a31c3bfbf24e3938
L6: 5d53469f20fef4f8eab52b88044ede69c77a6a68a60728609fc4a65ff531e7d0
L7: 39f2c6a7e2e2b3340f0c3e78c0254a8f4eb0f5d0e2d8e3c1b7a6f5e4d3c2b1a0
```

**Expected root:**

Implementations must compute the Merkle root using the algorithm specified in [Merkle Construction](/protocol/merkle-construction/) and verify it matches the expected output.

## Signature test vector

**Message (merkle_root):**
```
48bed44d1bcd124a28c27f343a817e5f5243190d3c52bf347b0fa3f3e340f8a3
```

A conforming implementation must:
1. Generate an ML-DSA-65 key pair from the test seed
2. Sign the message bytes
3. Verify the signature with the public key
4. Confirm verification succeeds

## Proof round-trip test

A complete test:

1. Create a governance event with known fields
2. Run through the 5-stage pipeline with the `minimal` pack
3. Generate the proof
4. Serialize to CBOR
5. Deserialize from CBOR
6. Verify the deserialized proof
7. Confirm all fields match the original

The `minimal` pack (2 rules) is designed for testing and should be used for cross-implementation verification.
