import type { Metadata } from 'next';
import { Manrope, Unbounded } from 'next/font/google';
import './globals.css';
import { socialLinks } from '@/data/artist';

const manrope = Manrope({ subsets: ['cyrillic', 'latin'], variable: '--font-manrope', display: 'swap' });
const unbounded = Unbounded({ subsets: ['cyrillic', 'latin'], variable: '--font-unbounded', display: 'swap' });
const title = 'Люся Питерская — официальный сайт | Музыка и видео';
const description = 'Официальный сайт Люси Питерской. Новые песни, релизы, видео и ссылки на музыкальные площадки.';

export const metadata: Metadata = { metadataBase: new URL('https://example.com'), title, description, alternates:{canonical:'/'}, icons:{icon:'/favicon.svg'}, openGraph:{title,description,type:'website',locale:'ru_RU',images:['/art/hero.svg']}, twitter:{card:'summary_large_image',title,description,images:['/art/hero.svg']} };

export default function RootLayout({children}:{children:React.ReactNode}) {
  const schema = { '@context':'https://schema.org','@type':'MusicGroup',name:'Люся Питерская',url:'https://example.com',sameAs:socialLinks.map(x=>x.url) };
  return <html lang="ru" className={`${manrope.variable} ${unbounded.variable}`}><body><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}} />{children}</body></html>;
}
