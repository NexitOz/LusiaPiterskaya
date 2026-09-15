import type { Metadata } from 'next';
import './globals.css';
import { socialLinks } from '@/data/artist';

const siteUrl = 'https://lusia-piterskaya.vercel.app';
const title = 'Люся Питерская — музыка и визуальные истории';
const description = 'Официальный сайт Люси Питерской: музыка, видео и ссылки на страницы артистки.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: { canonical: '/' },
  icons: { icon: '/favicon.svg' },
  openGraph: { title, description, type: 'website', locale: 'ru_RU', url: siteUrl },
  twitter: { card: 'summary', title, description },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const schema = { '@context': 'https://schema.org', '@type': 'MusicGroup', name: 'Люся Питерская', url: siteUrl, sameAs: socialLinks.map((link) => link.url) };
  return <html lang="ru"><body><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />{children}</body></html>;
}
