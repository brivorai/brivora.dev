---
title: CI/CD Integration
description: Integrate governance proof generation into your CI/CD pipeline.
---

Integrate governance proof generation into your CI/CD pipeline using GitHub Actions.

## GitHub Actions workflow

```yaml
# .github/workflows/governance-check.yml
name: Governance Check
on: [push, pull_request]

jobs:
  governance:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
      - run: npm install
      - run: npm run governance-check
```

## Governance check script

```typescript
// governance-check.ts
import { verify } from '@brivora/verify';

const packs = ['eu-ai-act', 'soc2-ai', 'hipaa-ai'];

for (const pack of packs) {
  const result = await verify.govern(testAiCall, { governance: pack });
  if (!result.valid) {
    console.error(`Governance check failed: ${pack}`);
    process.exit(1);
  }
  console.log(`${pack}: PASS (score: ${result.score})`);
}
```

## Storing proofs as artifacts

```yaml
      - run: npm run governance-check -- --output proofs/
      - uses: actions/upload-artifact@v4
        with:
          name: governance-proofs
          path: proofs/
```

## Multi-framework validation

Run governance checks against multiple frameworks in parallel:

```yaml
jobs:
  governance:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        pack: [eu-ai-act, soc2-ai, hipaa-ai, nist-ai-rmf]
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
      - run: npm install
      - run: npm run governance-check -- --pack ${{ matrix.pack }}
```
