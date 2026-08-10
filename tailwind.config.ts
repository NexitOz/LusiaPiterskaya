import type { Config } from 'tailwindcss';
export default {content:['./app/**/*.{js,ts,jsx,tsx}','./components/**/*.{js,ts,jsx,tsx}'],theme:{extend:{fontFamily:{display:['var(--font-unbounded)'],sans:['var(--font-manrope)']},colors:{ink:'#09070F',violet:'#120B20',flame:'#FF334F',ember:'#FF6A00',rose:'#FF2E93',gold:'#FFC857',moon:'#78CFFF'}}},plugins:[]} satisfies Config;
