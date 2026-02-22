---
title: "@brivora/verify API Reference"
description: Complete API documentation for @brivora/verify.
---

## verify.govern(fn, options)

```typescript
async function govern<T>(
  fn: () => Promise<T>,
  options: {
    governance: string | GovernancePack;
    audit?: boolean;
    verifier?: VerifierIdentity;
    chain?: ProofChain;
  }
): Promise<GovernResult<T>>
```

Wrap an AI call with governance evaluation. Executes the 5-stage governance pipeline and returns the original output alongside the governance proof.

| Parameter | Type | Description |
|-----------|------|-------------|
| `fn` | `() => Promise<T>` | The AI call to govern |
| `options.governance` | `string \| GovernancePack` | Pack name or custom pack |
| `options.audit` | `boolean` | Enable audit logging (default: `false`) |
| `options.verifier` | `VerifierIdentity` | Custom verifier identity |
| `options.chain` | `ProofChain` | Append to existing proof chain |

**Returns:** `GovernResult<T>` -- contains `output`, `valid`, `score`, `report`, `proof`.

---

## verify.check(proof, publicKey?)

```typescript
async function check(
  proof: BrivoraProof,
  publicKey?: Uint8Array
): Promise<VerifyResult>
```

Independently verify a governance proof. Checks Merkle root integrity, signature validity, and timestamp.

---

## verify.createPack(config)

```typescript
function createPack(config: GovernancePackConfig): GovernancePack
```

Create a custom governance pack from a configuration object.

---

## verify.createVerifier()

```typescript
async function createVerifier(): Promise<VerifierIdentity>
```

Create a new verifier identity with PQC key pairs for proof signing.

---

## verify.createChain(verifier)

```typescript
function createChain(verifier: VerifierIdentity): ProofChain
```

Create a new proof chain. Each subsequent `govern()` call with this chain appends a proof linked to the previous one.

---

## verify.checkChain(proofs, publicKey)

```typescript
async function checkChain(
  proofs: BrivoraProof[],
  publicKey: Uint8Array
): Promise<ChainVerifyResult>
```

Verify an entire chain of proofs. Checks that each proof's `previous_proof` field correctly references the prior proof's hash, and that all individual proofs are valid.
