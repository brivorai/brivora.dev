---
title: Introduction
description: What is Brivora and why does it exist.
---

Brivora is an open source protocol for post-quantum cryptography and verifiable AI governance.

We ship two packages today:

- **[@brivora/crypto](/crypto/overview/)** — Post-quantum cryptography in 3 lines of TypeScript
- **[@brivora/verify](/verify/overview/)** — 5 lines of code to make any AI call verifiable

## Why Brivora?

Quantum computers will break RSA, ECDSA, and every classical cryptographic algorithm in use today. NIST finalized the replacement standards in August 2024 (FIPS 203, 204, 205). Brivora makes these standards accessible to every developer.

AI regulation is accelerating globally. The EU AI Act, US Executive Orders, and sector-specific mandates (HIPAA, SOX, MiFID) require organizations to prove their AI systems are compliant. Brivora generates cryptographic proofs of compliance that anyone can independently verify.

## Design Principles

- **Zero telemetry** — No analytics, no network calls, no tracking. Pure local computation.
- **Zero configuration** — Sensible defaults. Works out of the box.
- **Self-contained proofs** — Every proof includes everything needed for verification. No API call. No account. Pure math.
- **Hybrid security** — Classical + post-quantum crypto by default. Both must be broken to compromise security.
- **Governance packs are data** — No executable code in governance rules. Safe by design.

## Architecture

```
@brivora/crypto          ← Foundation: PQC primitives
    ↑
@brivora/verify          ← Governance proofs, Merkle trees
    ↑
@brivora/identity        ← Coming: W3C DIDs, verifiable credentials
    ↑
Domain adapters          ← Coming: AI-BOM, attestation, finance, etc.
```

Every product in the Brivora ecosystem builds on the same cryptographic foundation. The proof format is universal. The verification equation is universal. What changes is the governance rules and the system state being observed.

## License

All Brivora packages are licensed under [AGPL-3.0-or-later](https://www.gnu.org/licenses/agpl-3.0). Free forever for open source projects. Commercial licenses available for proprietary use.
