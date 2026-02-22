---
title: Key Concepts
description: Core concepts behind Brivora's governance proofs and post-quantum cryptography.
---

## Governance Proof (BrivoraProof)

A governance proof is a cryptographic attestation that an AI system call was evaluated against a specific regulatory framework and the evaluation result is tamper-evident and independently verifiable.

Technically: a PQC-signed Merkle root over the full governance pipeline -- the policy, the system state, the evaluation logic, and the result. Signed with ML-DSA-65 (FIPS 204).

## Governance Pack

A governance pack is a set of rules that define what it means to comply with a specific regulation. Each rule maps a regulatory requirement to a machine-evaluable check.

Example: EU AI Act Article 12 requires "automatic recording of events." The `eu-ai-act` pack has a rule that checks whether prompt, model, response, and timestamp fields are present in the governance event.

Packs are pure data -- no executable code. 11 built-in evaluator types handle all rule evaluation. This makes packs safe to load from any source.

## Fidelity Score

A number between 0.0 and 1.0 representing overall governance compliance. Calculated from weighted dimensions (e.g., transparency: 0.3, traceability: 0.3, safety: 0.25, privacy: 0.15). Each governance pack defines its own dimensions, weights, and passing threshold.

## Post-Quantum Cryptography (PQC)

Cryptographic algorithms designed to resist attacks from quantum computers. Brivora uses three NIST-standardized PQC algorithms:

- **ML-KEM-768** (FIPS 203) -- key encapsulation (encryption)
- **ML-DSA-65** (FIPS 204) -- digital signatures
- **SLH-DSA** (FIPS 205) -- stateless hash-based signatures

All governance proofs are signed with ML-DSA-65, making them quantum-resistant. Classical Ed25519 signatures are included in hybrid mode for backward compatibility.

## Merkle Tree

A hash tree where every leaf is a hash of a data block, and every non-leaf node is a hash of its children. The root hash is a compact fingerprint of all the data. Change any leaf and the root changes. This is how governance proofs achieve tamper evidence -- the Merkle root covers the entire governance pipeline.

## Hybrid Mode

By default, `@brivora/crypto` uses both classical (Ed25519/X25519) and post-quantum (ML-DSA-65/ML-KEM-768) algorithms simultaneously. This provides security against both classical and quantum attacks during the transition period. Pure PQC-only mode is available for applications that don't need backward compatibility.

<!-- TODO: Replace with final hand-drawn diagram showing concepts and relationships: governance pack feeds rules into pipeline, pipeline evaluates and produces Merkle tree, tree gets signed with PQC, result is BrivoraProof -->
