---
title: Create Custom Governance Packs
description: Author governance packs for any regulatory framework or internal policy.
---

You can create governance packs for any regulatory framework, internal policy, or custom requirements.

## Example: custom pack

```typescript
import { verify } from '@brivora/verify';

const customPack = verify.createPack({
  name: 'my-governance',
  version: '1.0.0',
  description: 'Internal AI governance policy',
  rules: [
    {
      id: 'approved-models',
      name: 'Approved models only',
      description: 'Only allow vetted AI models',
      phase: 'pre',
      severity: 'critical',
      evaluate: {
        type: 'model_allowlist',
        models: ['claude-sonnet-4-6', 'gpt-4', 'gpt-4-turbo'],
      },
    },
    {
      id: 'no-pii-in-prompts',
      name: 'PII detection',
      description: 'Block PII in AI prompts',
      phase: 'pre',
      severity: 'high',
      evaluate: {
        type: 'pii_detection',
        fields: ['prompt'],
        action: 'block',
      },
    },
    {
      id: 'response-length',
      name: 'Response length limit',
      description: 'Cap response tokens',
      phase: 'post',
      severity: 'medium',
      evaluate: {
        type: 'token_limit',
        max_output: 4096,
      },
    },
  ],
  scoring: {
    dimensions: [
      { name: 'access_control', rules: ['approved-models'] },
      { name: 'data_protection', rules: ['no-pii-in-prompts'] },
      { name: 'resource_management', rules: ['response-length'] },
    ],
    threshold: 0.8,
    weights: {
      access_control: 0.4,
      data_protection: 0.4,
      resource_management: 0.2,
    },
  },
});

// Use the custom pack
const result = await verify.govern(aiCall, { governance: customPack });
```

## Pack structure

Every governance pack consists of:

1. **Metadata** -- name, version, description, jurisdiction
2. **Rules** -- individual compliance checks with evaluator type, phase, and severity
3. **Scoring** -- dimensions, weights, and passing threshold

## Rule phases

| Phase | When | Use case |
|-------|------|----------|
| `pre` | Before AI call executes | Input validation, model allowlists, PII detection |
| `post` | After AI call executes | Output analysis, toxicity checks, response limits |
| `both` | Before and after | Continuous monitoring rules |

## Sharing packs

Governance packs are pure data. You can serialize them as JSON and share across teams, organizations, or publicly. Because packs contain no executable code, they are safe to load from any source.
