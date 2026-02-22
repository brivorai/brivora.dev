---
title: SOC 2 AI Governance Pack
description: SOC 2 Type II AI controls mapping Trust Services Criteria to AI-specific requirements.
---

<span class="badge-live">Live</span>

| Property | Value |
|----------|-------|
| Pack ID | `soc2-ai` |
| Version | 1.0.0 |
| Jurisdiction | United States (Federal) |
| Rules | 12 |
| Threshold | 80% |

## Description

Maps SOC 2 Trust Services Criteria (security, availability, processing integrity, confidentiality, privacy) to AI-specific control requirements. Designed for organizations undergoing SOC 2 Type II audits that deploy AI systems.

## Scoring dimensions

| Dimension | Description |
|-----------|-------------|
| Security | AI model access controls, input validation |
| Availability | Model serving reliability, fallback handling |
| Processing integrity | Output accuracy, bias monitoring |
| Confidentiality | Training data protection, model privacy |
| Privacy | PII handling, consent management |

## Usage

```typescript
const result = await verify.govern(aiCall, { governance: 'soc2-ai' });
```
