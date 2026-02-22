---
title: Generate Your First Governance Proof
description: Generate a cryptographic governance proof for an AI call in under 5 minutes.
---

This guide walks you through generating a cryptographic governance proof for an AI call in under 5 minutes.

A governance proof is a PQC-signed Merkle root over a governance evaluation pipeline. It proves that an AI system call was governed by a specific regulatory framework -- and anyone can verify that proof independently, without trusting Brivora or any third party.

## Step 1: Install

```bash
npm install @brivora/crypto @brivora/verify
```

## Step 2: Wrap an AI call with governance

```typescript
import { verify } from '@brivora/verify';

// Your existing AI call -- any provider, any model
const aiCall = () => fetch('https://api.openai.com/v1/chat/completions', {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    model: 'gpt-4',
    messages: [{ role: 'user', content: 'Analyze this loan application' }],
  }),
}).then(r => r.json());

// Wrap it with EU AI Act governance
const result = await verify.govern(aiCall, {
  governance: 'eu-ai-act',
  audit: true,
});
```

## Step 3: Inspect the result

```typescript
console.log(result.output);    // The AI response (unchanged)
console.log(result.valid);     // true -- all governance rules passed
console.log(result.score);     // 0.0-1.0 fidelity score
console.log(result.report);    // Detailed compliance report
console.log(result.proof);     // The cryptographic proof
```

## Step 4: Verify the proof independently

```typescript
const verified = await verify.check(result.proof);
console.log(verified.valid);        // true
console.log(verified.governance);   // 'eu-ai-act'
console.log(verified.timestamp);    // ISO timestamp
```

That's it. The proof is a PQC-signed Merkle root. It can be stored, transmitted, published on-chain, or handed to a regulator. Anyone can verify it without trusting you, Brivora, or any intermediary. The math is the proof.

<!-- TODO: Replace with final hand-drawn diagram showing install -> wrap AI call -> governance evaluation -> proof generation -> independent verification -->
