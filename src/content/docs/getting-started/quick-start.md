---
title: Quick Start
description: Get up and running with Brivora in under a minute.
---

## Install

```bash
npm install @brivora/crypto @brivora/verify
```

## Post-Quantum Crypto in 3 Lines

```typescript
import { crypto } from '@brivora/crypto';

const keys = await crypto.createIdentity();
const signed = await crypto.sign('hello world', keys.privateKey);
const { valid } = await crypto.verify(signed, keys.publicKey);
// valid: true
```

## Verifiable AI in 5 Lines

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

## Verify a Proof

```typescript
// Anyone can verify — no API, no account, no Brivora dependency needed
const verified = await verify.check(proof, publicKey);
console.log(verified.valid); // true or false
```

## What's Next?

- **[@brivora/crypto](/crypto/overview/)** — Full API reference for post-quantum cryptography
- **[@brivora/verify](/verify/overview/)** — Full API reference for governance proofs
- **[Architecture](/protocol/architecture/)** — How the protocol works under the hood
