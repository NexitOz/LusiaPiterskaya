import { ArrowDown, ArrowUpRight, Headphones, Play, Sparkles } from 'lucide-react';
import { Header } from '@/components/Header';
import { Reveal } from '@/components/Reveal';
import { SocialIcon } from '@/components/SocialIcon';
import { VideoGallery } from '@/components/VideoGallery';
import { artist, links, releases, socialLinks, video } from '@/data/artist';

const external = { target: '_blank', rel: 'noopener noreferrer' } as const;

export default function Home() {
  return (
    <main id="top">
      <Header />

      <section className="hero">
        <video className="hero-video" src={video.src} muted autoPlay loop playsInline preload="metadata" aria-hidden="true" />
        <div className="hero-wash" />
        <div className="aurora aurora-one" />
        <div className="aurora aurora-two" />
        <div className="hero-content">
          <p className="hero-kicker"><Sparkles size={14} /> НОВАЯ ГЛАВА</p>
          <h1><span>ЛЮСЯ</span><span>ПИТЕРСКАЯ</span></h1>
          <p className="hero-copy">{artist.tagline}</p>
          <div className="hero-actions">
            <a href={links.yandex} {...external} className="button button-light"><Headphones size={17} /> СЛУШАТЬ</a>
            <a href="#film" className="button button-ghost"><Play size={16} /> СМОТРЕТЬ</a>
          </div>
        </div>
        <a href="#new" className="scroll-cue">ЛИСТАТЬ <ArrowDown size={15} /></a>
      </section>

      <section id="new" className="chapter chapter-new">
        <div className="night-orb" />
        <div className="page-shell">
          <Reveal>
            <p className="eyebrow">СЕЙЧАС В ЭФИРЕ</p>
            <h2 className="display-title">Музыка,<br />которая <i>светится</i><br />в темноте.</h2>
          </Reveal>
          <div className="new-grid">
            {releases.slice(0, 3).map((release, index) => (
              <Reveal key={release.title} delay={index * 0.08} className={`track-feature track-feature-${index + 1}`}>
                <div className="track-glow" style={{ background: release.accent }} />
                <span className="track-number">0{index + 1}</span>
                <div>
                  <p className="track-label">НОВЫЙ ТРЕК</p>
                  <h3>{release.title}</h3>
                  <p>{release.artists}</p>
                </div>
                <a href={index === 0 ? links.spotify : links.yandex} {...external} aria-label={`Открыть каталог: ${release.title}`} className="track-link"><ArrowUpRight /></a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="music" className="chapter catalog">
        <div className="page-shell">
          <Reveal className="section-heading">
            <div><p className="eyebrow">ДИСКОГРАФИЯ</p><h2 className="display-title">Ночные<br />частоты</h2></div>
            <p>Выбор из опубликованного каталога. Полная дискография доступна на официальных страницах артистки.</p>
          </Reveal>
          <div className="track-list">
            {releases.map((release, index) => (
              <Reveal key={release.title} delay={(index % 4) * 0.035}>
                <article className="track-row" style={{ '--accent': release.accent } as React.CSSProperties}>
                  <span className="track-index">{String(index + 1).padStart(2, '0')}</span>
                  <span className="track-dot" />
                  <div><h3>{release.title}</h3><p>{release.artists}</p></div>
                  <a href={links.yandex} {...external} aria-label={`Слушать ${release.title}`}><Play size={14} fill="currentColor" /></a>
                </article>
              </Reveal>
            ))}
          </div>
          <div className="platform-actions">
            <a href={links.spotify} {...external} className="button button-light">SPOTIFY <ArrowUpRight size={16} /></a>
            <a href={links.yandex} {...external} className="button button-ghost">ЯНДЕКС МУЗЫКА <ArrowUpRight size={16} /></a>
          </div>
        </div>
      </section>

      <section id="film" className="chapter film-section">
        <div className="page-shell film-grid">
          <Reveal className="film-intro"><p className="eyebrow">ВИЗУАЛЬНЫЙ ДНЕВНИК</p><h2 className="display-title">Один кадр.<br />Целая история.</h2><p>Живое видео артистки вместо декоративных заглушек. Включите звук — и останьтесь в моменте.</p></Reveal>
          <VideoGallery />
        </div>
      </section>

      <section id="about" className="chapter about-section">
        <div className="about-media" aria-hidden="true"><video src={video.src} muted autoPlay loop playsInline preload="metadata" /></div>
        <div className="about-copy"><Reveal><p className="eyebrow">ЛЮСЯ ПИТЕРСКАЯ</p><h2 className="display-title">Не образ.<br /><i>Состояние.</i></h2><p>{artist.bio}</p><a href={links.instagram} {...external} className="text-link">БОЛЬШЕ В INSTAGRAM <ArrowUpRight size={16} /></a></Reveal></div>
      </section>

      <section id="connect" className="chapter connect-section">
        <div className="page-shell"><Reveal><p className="eyebrow">ОСТАВАТЬСЯ РЯДОМ</p><h2 className="display-title">Встретимся<br />в твоей ленте.</h2></Reveal><div className="social-grid">{socialLinks.map((social) => <a key={social.name} href={social.url} {...external} style={{ '--tint': social.tint } as React.CSSProperties} className="social-card"><SocialIcon name={social.icon} /><span>{social.name}</span><ArrowUpRight size={16} /></a>)}</div></div>
      </section>

      <footer><div><strong>ЛЮСЯ ПИТЕРСКАЯ</strong><p>© 2026</p></div><p>«{artist.footerPhrase}»</p><a href="#top">НАВЕРХ ↑</a></footer>
    </main>
  );
}
