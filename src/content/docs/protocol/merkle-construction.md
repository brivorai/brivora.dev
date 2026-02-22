---
title: Merkle Construction
description: Merkle tree construction algorithm for governance proofs.
---

The evidence chain in a BrivoraProof is a Merkle tree constructed from governance evaluation artifacts. This page specifies the exact construction algorithm.

## Leaf nodes

Leaves are computed in this order:

1. Hash of governance pack (name + version + rules)
2. Hash of system state observation
3. Hash of pre-evaluation results
4. Hash of execution metadata
5. Hash of post-evaluation results
6. Hash of fidelity score
7. Hash of evaluation result (`'PASS'` | `'FAIL'` | `'PARTIAL'`)

Each leaf is the SHA-3-256 hash of the canonical CBOR encoding of the corresponding data.

## Construction algorithm

- **Hash function:** SHA-3-256
- **Tree type:** Binary, left-to-right
- **Padding:** If odd number of nodes at any level, the last node is duplicated
- **Internal node:** `SHA3-256(left || right)` where `||` is concatenation
- **Root:** Single hash at the top of the tree

## Example

For 7 leaves (L1 through L7):

```
Level 0 (leaves): L1  L2  L3  L4  L5  L6  L7  L7*
Level 1:          H12     H34     H56     H77
Level 2:          H1234           H5677
Level 3 (root):   H12345677
```

`*` L7 is duplicated to make an even count.

## Verification

To verify a Merkle root:

1. Recompute each leaf hash from the raw evidence data
2. Reconstruct the tree bottom-up
3. Compare the computed root with the proof's `merkle_root` field
4. If they match, the evidence chain has not been tampered with

<!-- TODO: Replace with final hand-drawn diagram showing Merkle tree construction with leaves, intermediate hashes, and root -->
