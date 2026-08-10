export type Release = { title: string; artists: string; cover: string; releaseDate?: string; spotifyUrl?: string; yandexUrl?: string; externalUrl?: string };

const spotify = 'https://open.spotify.com/artist/2qiQeFKHvHI50ler9h86kD';
const yandex = 'https://music.yandex.ru/artist/25514952';

// TODO: заменить после утверждения артисткой.
const approvedBio = 'Авторские песни, визуальные истории и эксперименты на границе музыки и цифрового искусства. Каждый трек получает собственный образ, настроение и маленькую вселенную.';

export const BOOKING_EMAIL = '';

export const artist = {
  name: 'Люся Питерская',
  tagline: 'Музыка. Истории. Миры между реальностью и воображением.',
  bio: approvedBio,
  footerPhrase: 'Музыка начинается там, где заканчиваются обычные слова.',
};

export const socialLinks = [
  { name: 'Spotify', url: spotify, icon: 'spotify', tint: '#1ED760' },
  { name: 'Яндекс Музыка', url: yandex, icon: 'yandex', tint: '#FF334F' },
  { name: 'Instagram', url: 'https://www.instagram.com/lucypiterska?igsh=ZzRpYW52NW9heGRq', icon: 'instagram', tint: '#FF2E93' },
  { name: 'VK', url: 'https://vk.ru/lyusyapiterskaya25', icon: 'vk', tint: '#78CFFF' },
  { name: 'TikTok', url: 'https://www.tiktok.com/@lucypiterska?_r=1&_t=ZN-98jwYGWRaSM', icon: 'tiktok', tint: '#FFC857' },
] as const;

export const featuredRelease: Release = { title: 'Собери воедино', artists: artist.name, cover: '/art/cover-2.svg', releaseDate: '2026-08-12', spotifyUrl: spotify, yandexUrl: yandex };

const titles = ['Я гадала по Луне','Пульс Тишины','Как тебе такое, Илон Маск?','Africa','Mutabor','You are my new hero','Зов предков','Губы со вкусом замёрзшей вишни','Она танцует медленно дико'];
export const releases: Release[] = [
  { title: 'Ты моя теория', artists: artist.name, cover: '/art/cover-1.svg', spotifyUrl: spotify, yandexUrl: yandex },
  ...titles.map((title, index) => ({ title, artists: artist.name, cover: index % 2 ? '/art/cover-1.svg' : '/art/cover-2.svg', spotifyUrl: spotify, yandexUrl: yandex })),
];

export const videos = [
  { title: 'Между мирами', src: '', poster: '/art/portrait.svg' },
  { title: 'Огненный свет', src: '', poster: '/art/hero.svg' },
  { title: 'Лунная вода', src: '', poster: '/art/cover-2.svg' },
];

export const contact = { email: BOOKING_EMAIL, instagram: socialLinks[2].url, vk: socialLinks[3].url };
