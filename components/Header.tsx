'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const links = [['Музыка', '#music'], ['Видео', '#film'], ['Об артистке', '#about'], ['Соцсети', '#connect']];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(scrollY > 24);
    onScroll();
    addEventListener('scroll', onScroll, { passive: true });
    return () => removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={scrolled || open ? 'header header-solid' : 'header'}>
      <div className="header-inner">
        <a href="#top" className="wordmark">ЛП<span>✦</span></a>
        <nav className="desktop-nav">{links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</nav>
        <button className="menu-button" onClick={() => setOpen(!open)} aria-label={open ? 'Закрыть меню' : 'Открыть меню'}>{open ? <X /> : <Menu />}</button>
      </div>
      <AnimatePresence>{open && <motion.nav initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="mobile-nav">{links.map(([label, href], index) => <motion.a initial={{ y: 18, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: index * 0.05 }} key={href} href={href} onClick={() => setOpen(false)}>{label}</motion.a>)}</motion.nav>}</AnimatePresence>
    </header>
  );
}
