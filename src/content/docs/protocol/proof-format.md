---
title: Proof Format
description: The BrivoraProof data structure.
---

## BrivoraProof

```typescript
interface BrivoraProof {
  version: '1.0';
  timestamp: string;                    // ISO-8601
  subject: string;                      // AI system identifier
  verifier: string;                     // Verifier fingerprint
  governance_policy: ContentHash;       // Hash of governance pack
  fidelity_score: FidelityScore;        // Composite score 0.0-1.0
  evaluation_result: 'PASS' | 'FAIL' | 'PARTIAL';
  evidence_chain: ContentHash[];        // Ordered event hashes (Merkle leaves)
  merkle_root: ContentHash;             // Root of the Merkle tree
  signature: ProofSignature;            // ML-DSA-65 + Ed25519 hybrid
  public_key: Uint8Array;               // For self-contained verification
  previous_proof?: ContentHash;         // Chain link
}
```

## ContentHash

```typescript
interface ContentHash {
  algorithm: 'sha3-256';
  value: string;  // hex-encoded
}
```

All hashes in the protocol use SHA-3-256. This includes event hashes, Merkle tree nodes, governance pack hashes, and chain links.

## FidelityScore

```typescript
interface FidelityScore {
  overall: number;                      // 0.0 - 1.0
  dimensions: Record<string, number>;   // Per-dimension scores
  threshold: number;                    // Minimum passing score
  passed: boolean;                      // overall >= threshold
}
```

## Self-Contained Verification

A BrivoraProof includes everything needed to verify it:

- **`evidence_chain`** — The ordered event hashes used to build the Merkle tree
- **`merkle_root`** — The expected root hash
- **`signature`** — The PQC signature over the root
- **`public_key`** — The verifier's public key

No external state, no API, no database. Just the proof and a hash function.
