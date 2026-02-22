---
title: HIPAA AI Governance Pack
description: HIPAA/PHI compliance for AI systems processing protected health information.
---

<span class="badge-live">Live</span>

| Property | Value |
|----------|-------|
| Pack ID | `hipaa-ai` |
| Version | 1.0.0 |
| Jurisdiction | United States (Federal) |
| Rules | 14 |
| Threshold | 85% |

## Description

HIPAA/PHI compliance for AI systems processing protected health information. Covers the Privacy Rule, Security Rule, and Breach Notification Rule as applied to AI-driven healthcare decisions.

## Scoring dimensions

| Dimension | Description |
|-----------|-------------|
| PHI protection | Detection and handling of protected health information |
| Access controls | Authorization and authentication for AI system access |
| Audit logging | Comprehensive logging of all PHI access and processing |
| Breach detection | Monitoring for unauthorized PHI disclosure |
| Minimum necessary | Limiting PHI exposure to the minimum required |

## Usage

```typescript
const result = await verify.govern(aiCall, { governance: 'hipaa-ai' });
```

The higher threshold (85%) reflects the sensitivity of healthcare data and the regulatory penalties for HIPAA violations.
