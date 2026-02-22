---
title: Security
description: Security policy and responsible disclosure.
---

## Reporting vulnerabilities

If you discover a security vulnerability in any Brivora package, please report it responsibly.

**Do not open a public GitHub issue for security vulnerabilities.**

Email: security@brivora.dev

Include:
- Description of the vulnerability
- Steps to reproduce
- Impact assessment
- Suggested fix (if applicable)

We will acknowledge receipt within 48 hours and provide a detailed response within 7 days.

## Scope

The following are in scope for security reports:

- `@brivora/crypto` -- cryptographic implementations, key management, signature verification
- `@brivora/verify` -- governance pipeline, proof generation, proof verification
- brivora.dev -- documentation site
- brivora.ai -- marketing site

## Cryptographic security

All cryptographic implementations use audited libraries from the `@noble` family:

- `@noble/post-quantum` -- ML-KEM-768, ML-DSA-65, SLH-DSA
- `@noble/curves` -- Ed25519, X25519
- `@noble/hashes` -- SHA-256, SHA-3, HKDF

Brivora does not implement custom cryptographic primitives. All algorithms are NIST-standardized (FIPS 203, 204, 205).

## Security properties

| Property | Mechanism |
|----------|-----------|
| Quantum resistance | ML-KEM-768, ML-DSA-65 (NIST PQC standards) |
| Tamper evidence | SHA-3-256 Merkle trees |
| Non-repudiation | Digital signatures with public key binding |
| Forward secrecy | Ephemeral key exchange in encryption |
| Zero telemetry | No network calls, no data collection |

## Threat model

Brivora assumes:
- Users control their own private keys
- The underlying operating system and hardware are not compromised
- NIST PQC algorithms are secure against known quantum algorithms
- SHA-3 and AES-256 remain secure

Brivora does NOT protect against:
- Compromised private keys (key management is the user's responsibility)
- Side-channel attacks on the host system
- Bugs in the underlying `@noble` libraries (mitigated by using audited code)
