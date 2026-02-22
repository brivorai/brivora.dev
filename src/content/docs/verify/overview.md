---
title: "@brivora/verify"
description: 5 lines of code to make any AI call verifiable.
---

5 lines of code to make any AI call verifiable.

`@brivora/verify` wraps any AI call with governance rules and produces a cryptographic proof of compliance. The proof is a PQC-signed Merkle root -- verifiable by anyone, without trusting Brivora or any intermediary.

24 built-in governance packs covering EU AI Act, SOC 2, HIPAA, NIST AI RMF, CCPA, and 16 more frameworks across 6+ jurisdictions.

## 5-stage governance pipeline

```
DEFINE -> OBSERVE/PRE-EVALUATE -> EXECUTE -> POST-EVALUATE -> PROVE
```

1. **DEFINE** -- Load governance pack (regulatory rules)
2. **OBSERVE** -- Capture pre-execution state, run pre-flight checks
3. **EXECUTE** -- Run the actual AI call (your function, unchanged)
4. **POST-EVALUATE** -- Evaluate governance rules against the execution result
5. **PROVE** -- Generate PQC-signed Merkle tree proof

```typescript
import { verify } from '@brivora/verify';

const result = await verify.govern(
  () => anthropic.messages.create({
    model: 'claude-sonnet-4-6',
    messages: [{ role: 'user', content: 'Analyze this loan application' }]
  }),
  { governance: 'eu-ai-act', audit: true }
);

console.log(result.output);    // The AI response
console.log(result.proof);     // PQC-signed Merkle root
console.log(result.valid);     // true
console.log(result.score);     // Fidelity score 0.0-1.0
```

## Stats

125 tests | 244 assertions | v0.1.0

<!-- TODO: Replace with final hand-drawn diagram showing the 5-stage pipeline as a flow diagram -->
