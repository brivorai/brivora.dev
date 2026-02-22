---
title: Changelog
description: Version history for Brivora packages.
---

## @brivora/crypto

### v0.1.0 (2026-02-15)

- Initial release
- ML-KEM-768 (FIPS 203) key encapsulation
- ML-DSA-65 (FIPS 204) digital signatures
- SLH-DSA-SHAKE-128f (FIPS 205) hash-based signatures
- Ed25519/X25519 hybrid mode
- Key rotation with migration proofs
- Key derivation (HKDF-SHA256)
- Ed25519 key upgrade
- 124 tests, 98.83% coverage

## @brivora/verify

### v0.1.0 (2026-02-17)

- Initial release
- 5-stage governance pipeline
- PQC-signed Merkle tree proofs
- 24 built-in governance packs
- 11 rule evaluator types
- Fidelity scoring
- Proof chaining
- Audit store (file/memory)
- Independent verification
- 125 tests, 244 assertions
