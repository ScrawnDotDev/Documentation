import { HeroSection } from '@/components/ui/hero-section';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Scrawn | Usage-based billing infrastructure for developers',
  description:
    'Open-source usage-based billing engine. Track API calls, AI tokens, and compute with one SDK call. Self-hosted, built on DodoPayments.',
  alternates: {
    canonical: 'https://docs.scrawn.dev/landing',
  },
  openGraph: {
    title: 'Scrawn | Usage-based billing infrastructure for developers',
    description:
      'Open-source usage-based billing engine. Track API calls, AI tokens, and compute with one SDK call.',
    url: 'https://docs.scrawn.dev/landing',
    siteName: 'Scrawn Docs',
    images: '/og.png',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Scrawn | Usage-based billing infrastructure for developers',
    description:
      'Open-source usage-based billing engine. Track API calls, AI tokens, and compute with one SDK call.',
  },
};

export default function HomePage() {
  return <HeroSection />;
}
