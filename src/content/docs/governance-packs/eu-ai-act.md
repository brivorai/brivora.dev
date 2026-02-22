---
title: EU AI Act Governance Pack
description: Full EU AI Act compliance evaluation with 22 rules covering Articles 9-15, 50, 52, 72-73.
---

<span class="badge-live">Live</span>

| Property | Value |
|----------|-------|
| Pack ID | `eu-ai-act` |
| Version | 2.0.0 |
| Jurisdiction | European Union |
| Enforcement | August 2, 2026 |
| Rules | 22 |
| Threshold | 80% |
| Aliases | `eu-ai-act-v2` |

## Description

This pack evaluates AI systems against the EU AI Act (Regulation (EU) 2024/1689) requirements for high-risk AI systems. Covers Articles 9-15 (risk management, data governance, technical documentation, record-keeping, transparency, human oversight, robustness), Article 50 (transparency for general-purpose AI), and enforcement provisions.

## Scoring dimensions

| Dimension | Weight |
|-----------|--------|
| Prohibited practices | Critical gate |
| Risk management | Weighted |
| Data governance | Weighted |
| Technical documentation | Weighted |
| Record-keeping and logging | Weighted |
| Transparency | Weighted |
| Human oversight | Weighted |
| Robustness and cybersecurity | Weighted |
| Post-market monitoring | Weighted |
| Incident reporting | Weighted |

Threshold: 0.8 (80%). Systems scoring below 80% receive an evaluation result of `FAIL`.

## Regulatory article mapping

| Articles | Requirement |
|----------|-------------|
| Article 5 | Prohibited AI practices |
| Articles 9-10 | Risk management and data governance |
| Article 11 | Technical documentation |
| Article 12 | Record-keeping and logging |
| Article 13 | Transparency and information to deployers |
| Article 14 | Human oversight |
| Article 15 | Accuracy, robustness, cybersecurity |
| Article 50 | Transparency for general-purpose AI |
| Articles 72-73 | Post-market monitoring and incident reporting |

## Usage

```typescript
import { verify } from '@brivora/verify';

const result = await verify.govern(aiCall, { governance: 'eu-ai-act' });

console.log(result.valid);   // true if score >= 0.8
console.log(result.score);   // 0.0-1.0
console.log(result.report);  // Detailed per-rule results
console.log(result.proof);   // PQC-signed Merkle root
```

<!-- TODO: Replace with final hand-drawn diagram showing regulatory article -> rule -> check -> proof flow -->
