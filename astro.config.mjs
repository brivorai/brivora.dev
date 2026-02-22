import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://brivora.dev',
  integrations: [
    starlight({
      title: 'Brivora',
      description: 'Post-quantum cryptographic infrastructure. Open source. Free forever.',
      logo: {
        light: './src/assets/logo-light.svg',
        dark: './src/assets/logo-dark.svg',
        replacesTitle: false,
      },
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/brivorai' },
        { icon: 'x.com', label: 'X', href: 'https://x.com/brivorai' },
        { icon: 'discord', label: 'Discord', href: 'https://discord.gg/brivora' },
      ],
      editLink: {
        baseUrl: 'https://github.com/brivorai/brivora.dev/edit/main/',
      },
      customCss: [
        '@fontsource/inter/400.css',
        '@fontsource/inter/500.css',
        '@fontsource/inter/600.css',
        '@fontsource/inter/700.css',
        '@fontsource/jetbrains-mono/400.css',
        '@fontsource/jetbrains-mono/500.css',
        '@fontsource/jetbrains-mono/600.css',
        '@fontsource/jetbrains-mono/700.css',
        './src/styles/custom.css',
      ],
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            { label: 'Installation', slug: 'getting-started/installation' },
            { label: 'First Proof', slug: 'getting-started/first-proof' },
            { label: 'Key Concepts', slug: 'getting-started/concepts' },
          ],
        },
        {
          label: '@brivora/crypto',
          items: [
            { label: 'Overview', slug: 'crypto/overview' },
            { label: 'Key Management', slug: 'crypto/keys' },
            { label: 'Digital Signatures', slug: 'crypto/signing' },
            { label: 'Encryption', slug: 'crypto/encryption' },
            { label: 'Hash-Based Signatures', slug: 'crypto/hash-signatures' },
            { label: 'Hybrid Mode', slug: 'crypto/hybrid' },
            { label: 'API Reference', slug: 'crypto/api-reference' },
          ],
        },
        {
          label: '@brivora/verify',
          items: [
            { label: 'Overview', slug: 'verify/overview' },
            { label: 'Quickstart', slug: 'verify/quickstart' },
            { label: 'Governance Packs', slug: 'verify/governance-packs' },
            { label: 'Proof Format', slug: 'verify/proof-format' },
            { label: 'Verification', slug: 'verify/verification' },
            { label: 'Custom Packs', slug: 'verify/custom-packs' },
            { label: 'API Reference', slug: 'verify/api-reference' },
          ],
        },
        {
          label: 'Governance Packs',
          items: [
            { label: 'Pack Catalog', slug: 'governance-packs/catalog' },
            { label: 'EU AI Act', slug: 'governance-packs/eu-ai-act' },
            { label: 'SOC 2', slug: 'governance-packs/soc2-ai' },
            { label: 'HIPAA', slug: 'governance-packs/hipaa-ai' },
            { label: 'NIST AI RMF', slug: 'governance-packs/nist-ai-rmf' },
            { label: 'CCPA/CPRA', slug: 'governance-packs/ccpa-admt' },
            { label: 'ISO 42001', slug: 'governance-packs/iso-42001' },
          ],
        },
        {
          label: 'Protocol',
          items: [
            { label: 'Proof Format', slug: 'protocol/proof-format' },
            { label: 'Merkle Construction', slug: 'protocol/merkle-construction' },
            { label: 'Signature Verification', slug: 'protocol/signature-verification' },
            { label: 'Test Vectors', slug: 'protocol/test-vectors' },
          ],
        },
        {
          label: 'Guides',
          items: [
            { label: 'CI/CD Integration', slug: 'guides/ci-cd' },
            { label: 'Migration', slug: 'guides/migration' },
            { label: 'Enterprise', slug: 'guides/enterprise' },
          ],
        },
        {
          label: 'Reference',
          items: [
            { label: 'Trust Stack', slug: 'trust-stack' },
            { label: 'The Guarantee', slug: 'guarantee' },
            { label: 'Changelog', slug: 'changelog' },
            { label: 'Contributing', slug: 'contributing' },
            { label: 'Security', slug: 'security' },
          ],
        },
      ],
      head: [
        {
          tag: 'meta',
          attrs: { name: 'theme-color', content: '#ffffff' },
        },
      ],
      lastUpdated: true,
      pagination: true,
    }),
  ],
});
