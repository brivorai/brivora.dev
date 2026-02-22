---
title: BrivoraProof Protocol Specification
description: Byte-level proof format specification for cross-implementation compatibility.
---

This document specifies the BrivoraProof format at the byte level, enabling any implementation in any programming language to generate and verify governance proofs without depending on Brivora software.

## Proof structure

A BrivoraProof is a structured object with the following fields, serialized as CBOR (RFC 8949) for wire format and JSON for human-readable interchange.

| Field | Type | Size | Description |
|-------|------|------|-------------|
| `version` | string | 3 bytes | Protocol version (`"1.0"`) |
| `timestamp` | string | 24 bytes | ISO 8601 UTC timestamp |
| `subject` | string | variable | DID of the evaluated system |
| `verifier` | string | variable | DID of the verifier |
| `governance_policy` | bytes | 32 bytes | SHA-3-256 hash of governance pack |
| `system_state_hash` | bytes | 32 bytes | SHA-3-256 hash of system state |
| `fidelity_score` | float64 | 8 bytes | Compliance score (0.0-1.0) |
| `evaluation_result` | uint8 | 1 byte | 0=PASS, 1=FAIL, 2=PARTIAL |
| `evidence_chain` | bytes[] | 32 x N bytes | Merkle tree leaf hashes |
| `merkle_root` | bytes | 32 bytes | SHA-3-256 Merkle root |
| `signature` | object | variable | See signature format below |
| `public_key` | bytes | variable | Verifier's public key |
| `previous_proof` | bytes | 32 bytes | Previous proof hash (optional) |

## Hash algorithm

All hashes use SHA-3-256 (FIPS 202). Input is the canonical CBOR encoding of the field value.

## Signature format

```typescript
interface ProofSignature {
  pqc: Uint8Array;            // ML-DSA-65 signature (~3,300 bytes)
  classical?: Uint8Array;     // Ed25519 signature (64 bytes)
  algorithm: string;          // 'hybrid-pqc-v1' or 'pqc-only-v1'
}
```

The signed message is the `merkle_root` bytes.

## Version negotiation

Verifiers must check the `version` field before processing. Unknown versions must be rejected. Version `"1.0"` is the only currently defined version.
