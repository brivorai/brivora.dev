import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://brivora.dev',
  integrations: [
    starlight({
      title: 'Brivora',
      description: 'Open source, transparent, post-quantum technology for all people.',
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
      customCss: ['./src/styles/custom.css'],
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            { label: 'Introduction', slug: 'getting-started/introduction' },
            { label: 'Quick Start', slug: 'getting-started/quick-start' },
          ],
        },
        {
          label: '@brivora/crypto',
          items: [
            { label: 'Overview', slug: 'crypto/overview' },
            { label: 'Identity', slug: 'crypto/identity' },
            { label: 'Encryption', slug: 'crypto/encryption' },
            { label: 'Signing', slug: 'crypto/signing' },
            { label: 'Key Management', slug: 'crypto/key-management' },
            { label: 'Migration', slug: 'crypto/migration' },
            { label: 'Algorithms', slug: 'crypto/algorithms' },
          ],
        },
        {
          label: '@brivora/verify',
          items: [
            { label: 'Overview', slug: 'verify/overview' },
            { label: 'Governance Pipeline', slug: 'verify/pipeline' },
            { label: 'Governance Packs', slug: 'verify/packs' },
            { label: 'Proof Chaining', slug: 'verify/chaining' },
            { label: 'Audit Store', slug: 'verify/audit' },
            { label: 'Independent Verification', slug: 'verify/verification' },
          ],
        },
        {
          label: 'Protocol',
          items: [
            { label: 'Architecture', slug: 'protocol/architecture' },
            { label: 'Proof Format', slug: 'protocol/proof-format' },
            { label: 'Security Model', slug: 'protocol/security' },
          ],
        },
      ],
      head: [
        {
          tag: 'meta',
          attrs: {
            name: 'theme-color',
            content: '#000000',
          },
        },
      ],
    }),
  ],
});
