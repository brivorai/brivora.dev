---
title: Governance Packs
description: Data-driven governance rule definitions.
---

Governance packs are data-driven rule definitions — no executable code.

## Built-in Packs

- `eu-ai-act-v1` — EU AI Act Article 12 compliance (7 rules)
- `minimal` — Basic logging for testing

```typescript
import { verify } from '@brivora/verify';

// List available packs
const packs = verify.listPacks(); // ['eu-ai-act-v1', 'minimal']

// Load a pack
const pack = verify.loadPack('eu-ai-act-v1');
```

## Custom Packs

```typescript
const customPack = verify.createPack({
  name: 'my-governance',
  version: '1.0.0',
  description: 'Custom governance rules',
  rules: [
    {
      id: 'model-allowlist',
      name: 'Approved models only',
      description: 'Only allow approved AI models',
      phase: 'pre',
      severity: 'critical',
      evaluate: { type: 'model_allowlist', models: ['claude-sonnet-4-5-20250929', 'gpt-4'] },
    },
  ],
  scoring: {
    dimensions: [{ name: 'compliance', rules: ['model-allowlist'] }],
    threshold: 1.0,
    weights: { compliance: 1.0 },
  },
});

const result = await verify.govern(fn, { governance: customPack });
```

## Rule Evaluators

| Type | Description |
|------|-------------|
| `required` | Check required fields are present |
| `contains` | Check field contains specific values |
| `regex` | Match field against a regex pattern |
| `length` | Validate field length (min/max) |
| `model_allowlist` | Only allow specific models |
| `model_blocklist` | Block specific models |
| `token_limit` | Enforce input/output token limits |
| `pii_detection` | Detect PII (SSN, email, phone, credit card) |
| `toxicity_threshold` | Basic toxicity keyword scoring |
| `bias_detection` | Flag protected attribute mentions |
| `custom` | Named function from registry |

## EU AI Act v1 Pack

The `eu-ai-act-v1` pack maps to Article 12 requirements for high-risk AI systems:

| Rule | Article | Severity |
|------|---------|----------|
| Automatic event logging | Art. 12(1) | Critical |
| Event traceability | Art. 12(2) | Critical |
| Monitoring capability | Art. 12(3) | High |
| Human oversight data | Art. 14 | High |
| Model identification | Art. 13 | High |
| Content safety baseline | — | Medium |
| PII detection | — | Medium |

Scoring dimensions: transparency (30%), traceability (30%), safety (25%), privacy (15%). Passing threshold: 0.7.
