---
title: Security Model
description: Security properties and threat model.
---

## Cryptographic Properties

| Property | Implementation |
|----------|----------------|
| Post-quantum signatures | ML-DSA-65 (FIPS 204) + Ed25519 hybrid |
| Key encapsulation | ML-KEM-768 (FIPS 203) + X25519 hybrid |
| Symmetric encryption | AES-256-GCM |
| Hash function | SHA-3-256 (Merkle trees), SHA-256 (fingerprints) |
| Key derivation | HKDF-SHA256 (RFC 5869) |
| Random generation | CSPRNG via Web Crypto API |

## Threat Model

### What the protocol protects against

- **Proof tampering** — Merkle tree + signature ensures any modification is detectable
- **Quantum attacks** — ML-DSA-65 and ML-KEM-768 are quantum-resistant (NIST FIPS)
- **Repudiation** — Signed proofs are non-repudiable (private key holder signed it)
- **Chain manipulation** — Hash-linked proof chains detect insertions, deletions, and reordering
- **Governance bypass** — Pre-evaluation can circuit-break before the AI call is made

### What the protocol does NOT protect against

- **Malicious AI provider** — If the AI provider lies about its response, the proof captures the lie faithfully
- **Key compromise** — If a verifier's private key is stolen, forged proofs can be created
- **Side-channel attacks on the host** — The library runs in your process; it trusts the runtime

## Zero Telemetry

Brivora packages make zero network calls (beyond the AI function you wrap with `verify.govern()`):

- No analytics
- No error reporting
- No usage tracking
- No phone home
- No feature flags

All computation is local. Your data never leaves your machine through Brivora code.

## Dependencies

All cryptographic primitives come from the [@noble](https://github.com/paulmillr) family of libraries, audited by Cure53:

- `@noble/post-quantum` — ML-KEM, ML-DSA
- `@noble/hashes` — SHA-2, SHA-3, HKDF
- `@noble/curves` — Ed25519, X25519

## Responsible Disclosure

If you discover a security vulnerability, please report it to security@brivora.dev. Do not open a public issue.
