---
title: Governance Pack Catalog
description: 24 built-in governance packs covering regulations across 6+ jurisdictions.
---

24 built-in governance packs. Each maps a regulatory framework to machine-evaluable rules that produce cryptographic proofs of compliance.

## European Union

| Pack | Rules | Enforcement | Details |
|------|-------|-------------|---------|
| [EU AI Act](/governance-packs/eu-ai-act/) | 22 | August 2, 2026 | Full EU AI Act, Articles 9-15, 50, 52, 72-73 |
| EU AI Act v1 (Legacy) | 7 | -- | Article 12 compliance |

## United States (Federal)

| Pack | Rules | Details |
|------|-------|---------|
| [HIPAA AI](/governance-packs/hipaa-ai/) | 14 | HIPAA/PHI for AI systems |
| [NIST AI RMF](/governance-packs/nist-ai-rmf/) | 12 | NIST AI Risk Management Framework |
| SEC AI | 12 | SEC AI frameworks |
| FDA AI/ML | 12 | FDA AI/ML medical device guidance |
| [SOC 2 AI](/governance-packs/soc2-ai/) | 12 | SOC 2 Type II AI controls |

## United States (State)

| Pack | Rules | Enforcement | Details |
|------|-------|-------------|---------|
| [CCPA/CPRA ADMT](/governance-packs/ccpa-admt/) | 12 | January 1, 2027 | Automated decision-making |
| Colorado AI Act | 12 | June 1, 2026 | Colorado SB 24-205 |
| Texas TRAIGA | 12 | -- | Texas TRAIGA HB 149 |
| NYC Local Law 144 | 12 | -- | Bias audits for AEDTs |
| NYDFS AI | 12 | -- | Insurance/cyber guidance |
| California AI Transparency | 12 | -- | AI Transparency Act |

## Asia-Pacific

| Pack | Rules | Details |
|------|-------|---------|
| South Korea AI Basic Act | 12 | South Korea AI Basic Act |
| Singapore AI Governance | 12 | Model AI Governance Framework |
| China AI Labeling | 12 | AI labeling requirements |
| China Cybersecurity AI | 12 | Cybersecurity AI rules |
| Japan AI Promotion | 12 | AI Promotion Act |

## International

| Pack | Rules | Details |
|------|-------|---------|
| [ISO/IEC 42001](/governance-packs/iso-42001/) | 12 | ISO/IEC 42001:2023 AI management |
| ISO 27001 AI | 12 | ISO 27001 AI extension |
| OECD AI Principles | 12 | OECD AI Principles |

## Other

| Pack | Rules | Details |
|------|-------|---------|
| Canada AIDA | 12 | Canada AIDA |
| Minimal | 2 | Testing pack |

## Using a pack

```typescript
import { verify } from '@brivora/verify';

const result = await verify.govern(aiCall, { governance: 'eu-ai-act' });
console.log(result.valid);   // true
console.log(result.score);   // 0.0-1.0
console.log(result.proof);   // PQC-signed Merkle root
```
