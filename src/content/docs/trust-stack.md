---
title: The Trust Stack
description: 10 layers of verifiable trust. Each layer eliminates a class of "trust us" claims.
---

The Trust Stack is Brivora's framework for building trust through verifiable evidence rather than promises. Each layer eliminates a specific class of "trust us" claims and replaces them with independently verifiable proof.

## The 10 Layers

### Layer 1: Open Source Code

**You can read what we run.**

Every line of Brivora code is public under AGPL v3. Not "open core" where the good parts are hidden. Fully open source, with a license that guarantees it stays that way.

AGPL v3 means if anyone takes Brivora code and builds a service with it, they must release their modifications under the same license. The code stays free forever. Even if Brivora disappears, the code belongs to everyone.

**Status:** Live

---

### Layer 2: Reproducible Builds

**You can verify deployed code matches source.**

Open source means you can read the code. Reproducible builds mean you can verify that the code you read is the code that's running.

Nix-based build system ensures anyone can build from source and compare hashes. Deployed binaries are cryptographically linked to source commits.

**Status:** In progress -- npm packages published, Nix reproducible builds in development.

---

### Layer 3: Independent Security Audits

**Independent experts verified our claims.**

We don't just say the cryptography is correct -- we pay independent security firms to prove it. Full audit reports published on-chain. Not summaries. Not redacted versions. The complete report.

**Status:** Planned -- first audit to be commissioned with grant funding.

---

### Layer 4: On-Chain Financials

**No hidden revenue from your data.**

All revenue flows through crypto rails. Public treasury wallet viewable on-chain. Live dashboard showing every dollar in, every dollar out. Published costs, margins, and founder compensation.

If it's not on-chain, it doesn't exist. There is no second set of books.

**Status:** Planned

---

### Layer 5: Warrant Canary

**No secret government orders.**

Monthly cryptographically signed statement, published on-chain. If the canary stops, you know why. This is the only protection against National Security Letters and similar legal gag orders.

**Status:** Planned

---

### Layer 6: Zero-Knowledge Architecture

**We mathematically CANNOT access your data.**

End-to-end encryption on everything. User generates key pairs locally -- private keys never leave the device. Brivora has no master keys, no backdoors, no recovery mechanism.

If you lose your key, your data is gone forever. That's the price of real privacy. "Can't" is stronger than "won't." We chose "can't."

**Status:** In progress -- PQC crypto shipped, E2E sync in development.

---

### Layer 7: Tor Accessibility

**We don't even know your IP address.**

.onion mirrors for all Brivora sites. Sync accessible over Tor. Install packages from censored countries. Brivora serves everyone -- including people whose governments don't want them to have it.

**Status:** Planned

---

### Layer 8: Community-Verified Deployments

**Hundreds of people ARE verifying, constantly.**

Decentralized build verification network. Community members independently build, hash, and compare binaries. If even one verifier finds a discrepancy, it's public immediately.

Goes beyond "you CAN verify" to "people ARE verifying."

**Status:** Planned

---

### Layer 9: Formal Verification

**A mathematical theorem proves it's impossible.**

Mathematical proof that the code correctly implements privacy properties. Not just audited. Not just tested. Proven. The kind of claim cited in academic papers and government policy documents.

**Status:** Planned

---

### Layer 10: On-Chain Public Record

**Every word we've ever said is permanent and verifiable.**

All public statements signed with PGP and published to Arweave. Blog posts, announcements, pricing changes, policy changes -- permanent, verifiable, uneditable.

Companies stealth-edit and delete. Brivora literally cannot.

**Status:** In progress -- Arweave pipeline designed, deployment pending.

---

## Comparison

| Company | Layers |
|---------|--------|
| Most tech companies | 1-2 |
| Signal | 4 |
| Mullvad | 3 |
| Proton | 4 |
| **Brivora** | **10 designed, building toward all** |
