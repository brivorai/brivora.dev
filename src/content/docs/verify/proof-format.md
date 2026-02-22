---
title: BrivoraProof Format
description: Structure and specification of governance proof objects.
---

A BrivoraProof is the output of the governance pipeline. It is a self-contained cryptographic attestation that can be stored, transmitted, published on-chain, or verified by any third party.

## Structure

```typescript
interface BrivoraProof {
  version: '1.0';
  timestamp: string;              // ISO 8601
  subject: string;                // DID of the evaluated system
  verifier: string;               // DID of the verifier
  governance_policy: ContentHash; // SHA-3-256 hash of the governance pack
  system_state_hash: ContentHash; // Hash of observed system state
  fidelity_score: FidelityScore;  // Overall compliance score
  evaluation_result: 'PASS' | 'FAIL' | 'PARTIAL';
  evidence_chain: ContentHash[];  // Merkle tree leaves
  merkle_root: ContentHash;       // Root hash of evidence tree
  signature: ProofSignature;      // ML-DSA-65 + Ed25519
  public_key: Uint8Array;         // Verifier's public key
  previous_proof?: ContentHash;   // For proof chaining
  metadata?: Record<string, unknown>;
}
```

## Fields

| Field | Description |
|-------|-------------|
| `version` | Protocol version (`'1.0'`) |
| `timestamp` | When the proof was generated (ISO 8601) |
| `subject` | Decentralized identifier of the evaluated system |
| `verifier` | Decentralized identifier of the verifying entity |
| `governance_policy` | SHA-3-256 hash of the governance pack used |
| `system_state_hash` | Hash of the observed system state at evaluation time |
| `fidelity_score` | Weighted compliance score (0.0 to 1.0) |
| `evaluation_result` | Overall result: `PASS`, `FAIL`, or `PARTIAL` |
| `evidence_chain` | Ordered array of Merkle tree leaf hashes |
| `merkle_root` | Root hash of the evidence Merkle tree |
| `signature` | PQC signature (ML-DSA-65) with optional Ed25519 |
| `public_key` | Verifier's public key for signature verification |
| `previous_proof` | Hash of the previous proof in a chain (optional) |
| `metadata` | Additional context (optional) |

<!-- TODO: Replace with final hand-drawn diagram showing Merkle tree structure with governance policy hash, system state hash, evaluation results as leaves, rolling up to the Merkle root, which gets signed -->
