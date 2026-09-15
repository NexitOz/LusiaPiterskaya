'use client';

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Maximize2, Pause, Play, Volume2, VolumeX, X } from 'lucide-react';
import { video } from '@/data/artist';

export function VideoGallery() {
  const player = useRef<HTMLVideoElement>(null);
  const reducedMotion = useReducedMotion();
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    if (!expanded) return;
    const close = (event: KeyboardEvent) => event.key === 'Escape' && setExpanded(false);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    addEventListener('keydown', close);
    return () => {
      document.body.style.overflow = previousOverflow;
      removeEventListener('keydown', close);
    };
  }, [expanded]);

  const togglePlayback = async () => {
    if (!player.current) return;
    if (player.current.paused) await player.current.play();
    else player.current.pause();
  };

  return (
    <>
      <motion.div
        initial={reducedMotion ? false : { opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        className="film-frame"
      >
        <video
          ref={player}
          src={video.src}
          muted={muted}
          playsInline
          loop
          preload="metadata"
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          className="h-full w-full object-cover"
        />
        <div className="film-shade" />
        <div className="film-meta">
          <div>
            <p className="eyebrow">ВИДЕОДНЕВНИК • 2026</p>
            <h3>{video.title}</h3>
          </div>
          <div className="flex gap-2">
            <button className="round-control" onClick={() => setMuted(!muted)} aria-label={muted ? 'Включить звук' : 'Выключить звук'}>
              {muted ? <VolumeX /> : <Volume2 />}
            </button>
            <button className="round-control round-control-main" onClick={togglePlayback} aria-label={playing ? 'Пауза' : 'Воспроизвести'}>
              {playing ? <Pause fill="currentColor" /> : <Play fill="currentColor" />}
            </button>
            <button className="round-control" onClick={() => setExpanded(true)} aria-label="Открыть на весь экран"><Maximize2 /></button>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {expanded && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={video.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="video-dialog"
            onClick={() => setExpanded(false)}
          >
            <button className="dialog-close" onClick={() => setExpanded(false)} aria-label="Закрыть"><X /></button>
            <motion.video
              initial={reducedMotion ? false : { scale: 0.96 }}
              animate={{ scale: 1 }}
              src={video.src}
              controls
              autoPlay
              playsInline
              className="dialog-video"
              onClick={(event) => event.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
