'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function OpeningScene() {
  const reducedMotion = useReducedMotion();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (reducedMotion) {
      setVisible(false);
      return;
    }

    const timer = window.setTimeout(() => setVisible(false), 2800);
    return () => window.clearTimeout(timer);
  }, [reducedMotion]);

  if (!visible) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="opening-scene"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: [1, 1, 0] }}
      transition={{ duration: 2.8, times: [0, 0.82, 1] }}
    >
      <div className="opening-spotlight opening-spotlight-left" />
      <div className="opening-spotlight opening-spotlight-right" />
      <motion.div
        className="opening-curtain opening-curtain-left"
        animate={{ x: ['0%', '0%', '-105%'], skewX: [0, 0, -6] }}
        transition={{ duration: 2.45, times: [0, 0.28, 1], ease: [0.76, 0, 0.24, 1] }}
      />
      <motion.div
        className="opening-curtain opening-curtain-right"
        animate={{ x: ['0%', '0%', '105%'], skewX: [0, 0, 6] }}
        transition={{ duration: 2.45, times: [0, 0.28, 1], ease: [0.76, 0, 0.24, 1] }}
      />
      <motion.div
        className="opening-monogram"
        initial={{ opacity: 0, scale: 0.86 }}
        animate={{ opacity: [0, 1, 1, 0], scale: [0.86, 1, 1.03, 1.08] }}
        transition={{ duration: 2.25, times: [0, 0.2, 0.68, 1] }}
      >
        <span>ЛП</span>
        <small>ПРЕМЬЕРА</small>
      </motion.div>
      <div className="opening-carpet" />
    </motion.div>
  );
}
