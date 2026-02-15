---
title: "@brivora/verify"
description: 5 lines of code to make any AI call verifiable.
---

**@brivora/verify** wraps any AI API call with governance rules and generates a cryptographic proof of compliance. PQC-signed Merkle root. Independently verifiable by anyone. No API call. No account. Pure math.

## Install

```bash
npm install @brivora/verify
```

## 5-Line Quick Start

```typescript
import { verify } from '@brivora/verify';

const result = await verify.govern(
  () => anthropic.messages.create({
    model: 'claude-sonnet-4-5-20250929',
    messages: [{ role: 'user', content: 'Analyze this loan application' }]
  }),
  { governance: 'eu-ai-act-v1', audit: true }
);

console.log(result.output);  // The AI response
console.log(result.proof);   // PQC-signed Merkle root
console.log(result.valid);   // true
console.log(result.report);  // Compliance report
console.log(result.score);   // Fidelity score 0.0-1.0
```

## Key Properties

- **Provider agnostic** — Works with Anthropic, OpenAI, Google, Mistral, Ollama, or any function that returns a promise
- **Self-contained proofs** — A `BrivoraProof` contains everything needed for independent verification
- **Governance packs are data** — Rule definitions, not executable code. Safe by design.
- **Zero side effects** — No disk writes, no network calls (beyond your AI call), no logging
- **Post-quantum signatures** — ML-DSA-65 + Ed25519 hybrid via `@brivora/crypto`

## Requirements

- Node.js 20+
- `@brivora/crypto` (installed automatically as a dependency)
