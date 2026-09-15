export type Release = {
  title: string;
  artists: string;
  accent: string;
};

export const artist = {
  name: 'Люся Питерская',
  tagline: 'Авторская музыка на границе сна, света и внутренней свободы.',
  bio: 'Люся Питерская создаёт песни как короткие фильмы: с узнаваемыми образами, неожиданными сюжетами и эмоциональным послевкусием. В её музыке электронное звучание встречается с личными историями, иронией и любовью к визуальному эксперименту.',
  footerPhrase: 'Там, где ночь становится музыкой.',
};

export const links = {
  spotify: 'https://open.spotify.com/artist/2qiQeFKHvHI50ler9h86kD',
  yandex: 'https://music.yandex.ru/artist/25514952',
  instagram: 'https://www.instagram.com/lucypiterska?igsh=ZzRpYW52NW9heGRq',
  vk: 'https://vk.ru/lyusyapiterskaya25',
  tiktok: 'https://www.tiktok.com/@lucypiterska?_r=1&_t=ZN-98jwYGWRaSM',
};

export const socialLinks = [
  { name: 'Spotify', url: links.spotify, icon: 'spotify', tint: '#95f9d8' },
  { name: 'Яндекс Музыка', url: links.yandex, icon: 'yandex', tint: '#ff88d1' },
  { name: 'Instagram', url: links.instagram, icon: 'instagram', tint: '#c4a8ff' },
  { name: 'VK', url: links.vk, icon: 'vk', tint: '#8ed8ff' },
  { name: 'TikTok', url: links.tiktok, icon: 'tiktok', tint: '#ffffff' },
] as const;

// Названия взяты из опубликованного каталога артистки. Даты и прямые ссылки на
// конкретные треки не указываются без повторной сверки с площадками.
export const releases: Release[] = [
  { title: 'Я гадала по Луне', artists: artist.name, accent: '#a58cff' },
  { title: 'Пульс Тишины', artists: artist.name, accent: '#72b8ff' },
  { title: 'Как тебе такое, Илон Маск?', artists: artist.name, accent: '#ff88d1' },
  { title: 'Africa', artists: artist.name, accent: '#ffc27a' },
  { title: 'Mutabor', artists: artist.name, accent: '#d4ff9c' },
  { title: 'You are my new hero', artists: artist.name, accent: '#92e8ff' },
  { title: 'Зов предков', artists: artist.name, accent: '#d8b58b' },
  { title: 'Губы со вкусом замёрзшей вишни', artists: artist.name, accent: '#ff779a' },
  { title: 'Она танцует медленно дико', artists: artist.name, accent: '#c799ff' },
];

export const video = {
  title: 'Ночное сияние',
  src: '/media/lucypiterska-2026-08-15.mp4',
};

export const contact = { email: '', instagram: links.instagram, vk: links.vk };
