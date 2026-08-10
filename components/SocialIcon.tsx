const marks={instagram:'◎',spotify:'≋',tiktok:'♪',vk:'VK',yandex:'Я'} as const;
export function SocialIcon({name}:{name:keyof typeof marks}){return <span aria-hidden className="grid size-7 place-items-center font-display text-sm">{marks[name]}</span>}
