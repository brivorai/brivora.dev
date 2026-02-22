---
title: "@brivora/crypto API Reference"
description: Complete API documentation for @brivora/crypto.
---

## crypto.createIdentity()

```typescript
async function createIdentity(): Promise<Identity>
```

Creates a new hybrid PQC identity with key pairs for signing and encryption.

**Returns:** `Identity` -- contains `publicKey`, `privateKey`, `fingerprint`, `algorithm`, `createdAt`.

---

## crypto.sign(data, privateKey, options?)

```typescript
async function sign(
  data: string | Uint8Array,
  privateKey: HybridPrivateKey,
  options?: { hybrid?: boolean }
): Promise<SignedPayload>
```

Sign data with ML-DSA-65 (and Ed25519 in hybrid mode).

| Parameter | Type | Description |
|-----------|------|-------------|
| `data` | `string \| Uint8Array` | Data to sign |
| `privateKey` | `HybridPrivateKey` | Signer's private key |
| `options.hybrid` | `boolean` | Use hybrid mode (default: `true`) |

---

## crypto.verify(signed, publicKey)

```typescript
async function verify(
  signed: SignedPayload,
  publicKey: HybridPublicKey
): Promise<{ valid: boolean; data: Uint8Array }>
```

Verify a signed payload. Returns `valid: true` if at least one signature verifies.

---

## crypto.encrypt(data, publicKey, options?)

```typescript
async function encrypt(
  data: string | Uint8Array,
  publicKey: HybridPublicKey,
  options?: { hybrid?: boolean }
): Promise<EncryptedPayload>
```

Encrypt data using ML-KEM-768 (and X25519 in hybrid mode) with AES-256-GCM.

---

## crypto.decrypt(encrypted, privateKey)

```typescript
async function decrypt(
  encrypted: EncryptedPayload,
  privateKey: HybridPrivateKey
): Promise<Uint8Array>
```

Decrypt an encrypted payload. Returns the original plaintext as `Uint8Array`.

---

## crypto.rotateKeys(identity)

```typescript
async function rotateKeys(
  identity: Identity
): Promise<{ newIdentity: Identity; migration: SignedPayload }>
```

Generate a new identity and a signed migration proof linking old key to new key.

---

## crypto.deriveKey(master, context)

```typescript
function deriveKey(
  master: Uint8Array,
  context: string
): { key: Uint8Array; context: string }
```

Derive a context-specific key from a master secret using HKDF-SHA256. Deterministic: same inputs produce same outputs.

---

## crypto.upgradeKey(ed25519Key)

```typescript
async function upgradeKey(key: {
  publicKey: Uint8Array;
  secretKey: Uint8Array;
}): Promise<{ identity: Identity; migration: SignedPayload }>
```

Upgrade an existing Ed25519 key to a hybrid PQC identity. Produces a migration proof signed by both old and new keys.

---

## crypto.exportPublicKey(identity)

```typescript
function exportPublicKey(identity: Identity): string
```

Export an identity's public key as a base64-encoded string. Safe to share publicly.

---

## crypto.importPublicKey(encoded)

```typescript
function importPublicKey(encoded: string): HybridPublicKey
```

Import a previously exported public key string.

---

## crypto.randomBytes(length)

```typescript
function randomBytes(length: number): Uint8Array
```

Generate cryptographically secure random bytes.
