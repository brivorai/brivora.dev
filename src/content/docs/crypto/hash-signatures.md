---
title: Hash-Based Signatures (SLH-DSA)
description: SLH-DSA (FIPS 205) stateless hash-based signatures for conservative security.
---

SLH-DSA (FIPS 205) is a stateless hash-based signature scheme. Its security relies only on hash function properties -- not on lattice assumptions like ML-DSA. This makes it a conservative fallback if lattice-based algorithms are ever compromised.

`@brivora/crypto` implements SLH-DSA-SHAKE-128f (fast variant).

## When to use SLH-DSA

SLH-DSA is available through the crypto API for applications requiring maximum conservative security. For most use cases, the default hybrid mode (ML-DSA-65 + Ed25519) is recommended.

Use SLH-DSA when:

- You need security assumptions based solely on hash functions
- You want a fallback independent of lattice-based cryptography
- Your threat model includes potential future breaks in lattice assumptions
- Long-term document signing where proofs must remain valid for decades

## Trade-offs

| Property | ML-DSA-65 | SLH-DSA-SHAKE-128f |
|----------|-----------|-------------------|
| Security basis | Lattice | Hash functions |
| Signature size | ~3,300 bytes | ~17,088 bytes |
| Signing speed | Fast | Slower |
| Verification speed | Fast | Moderate |
| NIST standard | FIPS 204 | FIPS 205 |
