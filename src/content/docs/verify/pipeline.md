---
title: Governance Pipeline
description: The 5-stage pipeline every AI call flows through.
---

Every AI call wrapped with `verify.govern()` flows through a 5-stage pipeline:

```
DEFINE → OBSERVE/PRE-EVALUATE → EXECUTE → POST-EVALUATE → PROVE
```

## Stage 1: DEFINE

Load governance rules from a pack (EU AI Act, HIPAA, custom). Resolve rules, thresholds, and scoring configuration.

## Stage 2: OBSERVE + PRE-EVALUATE

Capture the prompt, model, and parameters. Run pre-call governance rules. If a critical rule fails, the pipeline short-circuits — no AI call is made.

## Stage 3: EXECUTE

Call your AI function, capture the response, timing, and token usage.

## Stage 4: POST-EVALUATE

Run post-call governance rules on the response. Compute fidelity scores across all scoring dimensions.

## Stage 5: PROVE

Build a Merkle tree from all recorded events. Sign the root with ML-DSA-65 + Ed25519 via `@brivora/crypto`. Link to previous proof if chaining. Return the complete `GovernResult`.

## Result Structure

```typescript
interface GovernResult<T> {
  output: T;                    // The AI call's return value (passthrough)
  proof: BrivoraProof;          // Cryptographic governance proof
  valid: boolean;               // Did all governance checks pass?
  report: ComplianceReport;     // Human-readable compliance report
  score: FidelityScore;         // Composite governance score
  events: GovernanceEvent[];    // Full event chain (if audit: true)
  timing: {
    total: number;              // Total ms including governance overhead
    aiCall: number;             // Ms for the AI call alone
    governance: number;         // Ms for governance evaluation
    proof: number;              // Ms for proof generation
  };
}
```

## Merkle Tree

The Merkle tree is the core data structure that makes proofs tamper-evident.

```
                    [Root Hash]          ← Signed with PQC
                   /           \
            [Hash AB]           [Hash CD]
           /        \          /        \
     [Hash A]   [Hash B]  [Hash C]  [Hash D]
        |          |         |          |
   Event 0    Event 1   Event 2    Event 3
   (GOVERN_    (PROMPT_   (MODEL_    (POST_
    LOADED)    RECEIVED)  INVOKE)    EVAL)
```

Each leaf is the SHA-3-256 hash of a serialized event. Internal nodes are `SHA3-256(left || right)`. The root hash is signed. To verify: reconstruct the tree, compute the root, verify the signature. If any event was modified, the root changes, and the signature is invalid.
