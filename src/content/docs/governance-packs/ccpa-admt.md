---
title: CCPA/CPRA ADMT Governance Pack
description: CCPA/CPRA automated decision-making technology requirements.
---

<span class="badge-live">Live</span>

| Property | Value |
|----------|-------|
| Pack ID | `ccpa-admt` |
| Version | 1.0.0 |
| Jurisdiction | California |
| Enforcement | January 1, 2027 |
| Rules | 12 |
| Threshold | 80% |

## Description

CCPA/CPRA automated decision-making technology requirements. Covers pre-use notices, opt-out rights, access requests, and impact assessments for profiling and automated decisions.

## Scoring dimensions

| Dimension | Description |
|-----------|-------------|
| Notice | Pre-use notification to consumers |
| Opt-out rights | Consumer right to opt out of automated decisions |
| Access rights | Consumer right to access decision logic |
| Impact assessment | Risk assessment for automated decision systems |

## Usage

```typescript
const result = await verify.govern(aiCall, { governance: 'ccpa-admt' });
```
