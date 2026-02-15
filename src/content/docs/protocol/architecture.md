---
title: Architecture
description: How the Brivora protocol works.
---

## Protocol Stack

```
┌─────────────────────────────────────────────┐
│              Domain Adapters                 │
│  (AI-BOM, attestation, finance, identity)   │
├─────────────────────────────────────────────┤
│           @brivora/verify                    │
│  Governance rules + Merkle proofs + scoring  │
├─────────────────────────────────────────────┤
│           @brivora/crypto                    │
│  PQC signatures + encryption + hashing       │
└─────────────────────────────────────────────┘
```

Every product in the Brivora ecosystem builds on the same two layers. The proof format is universal. The verification equation is universal. The cryptographic primitives are universal.

What changes between products is:
- **The governance rules** — What are we checking?
- **The system state** — What are we observing?
- **The domain semantics** — What does the proof mean?

## Core Equation

```
Proof = Sign(MerkleRoot(Events), PrivateKey)
Valid = Verify(Proof, PublicKey) && RecomputeRoot(Events) == Proof.merkle_root
```

This equation is the same whether you're proving AI compliance, software provenance, financial audit trails, or identity credentials. The proof is a signed Merkle root over an ordered event chain.

## Design Decisions

### Why Merkle Trees?

- **Tamper-evident** — Change one event, the root changes, the signature breaks
- **Efficient verification** — O(log n) proof size for any single event
- **Composable** — Trees can be nested (proof of proofs)
- **Standard** — Used in Git, Bitcoin, Certificate Transparency, and OSCAL

### Why Hybrid Signatures?

- **Defense-in-depth** — Classical + PQC, both must be broken
- **Migration path** — Start hybrid today, go PQC-only when confident
- **Compliance** — NIST recommends hybrid during transition period

### Why Governance Packs as Data?

- **Security** — No executable code means no code injection via governance rules
- **Portability** — Packs are JSON, shareable across organizations
- **Auditability** — A governance pack is itself auditable static data
- **Versioning** — Packs have semver, enabling reproducible compliance

### Why AGPL?

- **Open source forever** — No bait-and-switch to proprietary
- **Network protection** — If you modify and serve the protocol, you must share
- **Commercial dual-license** — Proprietary users pay, open source users don't
- **Proven model** — MongoDB ($2B ARR), Grafana ($400M ARR), GitLab ($560M ARR)
