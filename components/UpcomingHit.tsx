'use client';

import { useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Play, Sparkles, Volume2, VolumeX } from 'lucide-react';
import { upcomingHit } from '@/data/artist';

export function UpcomingHit() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const reduceMotion = useReducedMotion();
  const [muted, setMuted] = useState(true);
  const [started, setStarted] = useState(false);
  const startVideo = () => { videoRef.current?.play(); setStarted(true); };
  const toggleSound = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
    if (video.paused) video.play();
    setStarted(true);
  };
  return <section className="hit-premiere" aria-labelledby="upcoming-hit-title">
    <div className="hit-aurora hit-aurora-gold" aria-hidden="true"/><div className="hit-aurora hit-aurora-silver" aria-hidden="true"/>
    <div className="container relative z-10"><motion.div className="hit-stage" initial={reduceMotion ? false : { opacity: 0, y: 54 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}>
      <div className="hit-copy"><div className="hit-badge"><span className="hit-badge-pulse"/><Sparkles size={14}/>{upcomingHit.eyebrow}</div><p className="hit-kicker">LUCY PITERSKAYA • 2026</p><h2 id="upcoming-hit-title" className="hit-title"><span>СКОРО</span><em>{upcomingHit.title}</em></h2><p className="hit-caption">{upcomingHit.caption}</p><button type="button" className="hit-sound" onClick={toggleSound} aria-label={muted ? 'Включить звук' : 'Выключить звук'}>{muted ? <VolumeX size={17}/> : <Volume2 size={17}/>} {muted ? 'ВКЛЮЧИТЬ ЗВУК' : 'ЗВУК ВКЛЮЧЁН'}</button></div>
      <div className="hit-video-shell"><div className="hit-frame-orbit" aria-hidden="true"/><video ref={videoRef} className="hit-video" src={upcomingHit.videoSrc} poster={upcomingHit.poster} preload="metadata" muted={muted} loop playsInline onPlay={() => setStarted(true)}/><div className="hit-video-shade" aria-hidden="true"/>{!started&&<button type="button" className="hit-play" onClick={startVideo} aria-label="Смотреть тизер"><Play fill="currentColor" size={20}/><span>СМОТРЕТЬ ТИЗЕР</span></button>}<div className="hit-corner hit-corner-top">EXCLUSIVE</div><div className="hit-corner hit-corner-bottom">01 / PREMIERE</div></div>
    </motion.div></div>
  </section>;
}
