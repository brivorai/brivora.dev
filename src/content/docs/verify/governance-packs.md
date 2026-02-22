---
title: Governance Packs
description: How governance packs work and which frameworks are supported.
---

A governance pack is a set of rules that define regulatory compliance requirements as machine-evaluable checks. Each rule maps a specific regulatory article or requirement to one of 11 built-in evaluator types.

Governance packs are pure data -- no executable code. This makes them safe to load from any source, share across organizations, and audit independently.

## Built-in packs (24)

### European Union

| Pack | Rules | Description |
|------|-------|-------------|
| `eu-ai-act` | 22 | Full EU AI Act, Articles 9-15, 50, 52, 72-73 |
| `eu-ai-act-v1` | 7 | Article 12 compliance (legacy) |
| `eu-ai-act-v2` | 22 | Full EU AI Act (alias: `eu-ai-act`) |

### United States (Federal)

| Pack | Rules | Description |
|------|-------|-------------|
| `hipaa-ai` | 14 | HIPAA/PHI for AI systems |
| `nist-ai-rmf` | 12 | NIST AI Risk Management Framework |
| `sec-ai` | 12 | SEC AI frameworks |
| `fda-ai-ml` | 12 | FDA AI/ML medical device guidance |
| `soc2-ai` | 12 | SOC 2 Type II AI controls |

### United States (State)

| Pack | Rules | Description |
|------|-------|-------------|
| `ccpa-admt` | 12 | CCPA/CPRA automated decision-making |
| `colorado-ai-act` | 12 | Colorado SB 24-205 |
| `texas-traiga` | 12 | Texas TRAIGA HB 149 |
| `nyc-ll144` | 12 | NYC Local Law 144 bias audits |
| `nydfs-ai` | 12 | NYDFS AI insurance/cyber guidance |
| `california-ai-transparency` | 12 | California AI Transparency Act |

### Asia-Pacific

| Pack | Rules | Description |
|------|-------|-------------|
| `south-korea-ai-basic-act` | 12 | South Korea AI Basic Act |
| `singapore-ai-governance` | 12 | Singapore AI Governance Framework |
| `china-ai-labeling` | 12 | China AI labeling requirements |
| `china-cybersecurity-ai` | 12 | China cybersecurity AI rules |
| `japan-ai-promotion` | 12 | Japan AI Promotion Act |

### International

| Pack | Rules | Description |
|------|-------|-------------|
| `iso-42001` | 12 | ISO/IEC 42001:2023 AI management |
| `iso-27001-ai` | 12 | ISO 27001 AI extension |
| `oecd-ai-principles` | 12 | OECD AI Principles |

### Other

| Pack | Rules | Description |
|------|-------|-------------|
| `canada-aida` | 12 | Canada AIDA |
| `minimal` | 2 | Testing pack |

## Using a pack

```typescript
const result = await verify.govern(aiCall, { governance: 'eu-ai-act' });
```

## Using multiple packs

```typescript
// Evaluate against multiple frameworks
const euResult = await verify.govern(aiCall, { governance: 'eu-ai-act' });
const hipaaResult = await verify.govern(aiCall, { governance: 'hipaa-ai' });
```

## 11 rule evaluator types

| Type | Description |
|------|-------------|
| `required` | Check that specific fields exist |
| `contains` | Check field contains/excludes specific values |
| `regex` | Check field matches a pattern |
| `length` | Check field length within bounds |
| `model_allowlist` | Only allow specific AI models |
| `model_blocklist` | Block specific AI models |
| `token_limit` | Enforce input/output token limits |
| `pii_detection` | Detect PII in specified fields (flag/redact/block) |
| `toxicity_threshold` | Enforce maximum toxicity score |
| `bias_detection` | Detect bias across protected attributes |
| `custom` | Custom evaluation function |
