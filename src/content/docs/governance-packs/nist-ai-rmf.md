---
title: NIST AI RMF Governance Pack
description: NIST AI Risk Management Framework implementation with Govern, Map, Measure, and Manage functions.
---

<span class="badge-live">Live</span>

| Property | Value |
|----------|-------|
| Pack ID | `nist-ai-rmf` |
| Version | 1.0.0 |
| Jurisdiction | United States (Federal) |
| Rules | 12 |
| Threshold | 75% |

## Description

NIST AI Risk Management Framework (AI RMF 1.0) implementation. Covers Govern, Map, Measure, and Manage functions with specific controls for AI system lifecycle.

## Scoring dimensions

| Dimension | Description |
|-----------|-------------|
| Governance | Organizational AI risk governance structures |
| Risk mapping | Context and risk identification |
| Measurement | Quantitative and qualitative risk assessment |
| Management | Risk response and monitoring |

## Usage

```typescript
const result = await verify.govern(aiCall, { governance: 'nist-ai-rmf' });
```
