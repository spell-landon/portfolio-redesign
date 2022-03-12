import React, { useState, useEffect } from 'react';
import styles from './Hero.module.css';
// Framer Motion
import {
  motion,
  useViewportScroll,
  useTransform,
  useSpring,
} from 'framer-motion';

function Hero(props) {
  const [isComplete, setIsComplete] = useState(false);
  const { scrollYProgress } = useViewportScroll();
  const yRange = useTransform(scrollYProgress, [0, 0.9], [0, 1]);
  const pathLength = useSpring(yRange, { stiffness: 400, damping: 90 });

  useEffect(() => yRange.onChange((v) => setIsComplete(v >= 1)), [yRange]);
  return (
    <div>
      <svg className={styles.progressIcon} viewBox='0 0 60 60'>
        <defs>
          <linearGradient id='gradient' x1='0%' y1='0%' x2='100%' y2='0%'>
            <stop offset='0%' stop-color='var(--red)' />
            <stop offset='100%' stop-color='var(--yellow)' />
          </linearGradient>
        </defs>
        <motion.path
          fill='none'
          strokeWidth='5'
          stroke='#fad02c'
          // stroke='url(#gradient)'
          strokeDasharray='0 1'
          d='M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0'
          style={{
            pathLength,
            rotate: 90,
            translateX: 5,
            translateY: 5,
            scaleX: -1, // Reverse direction of line animation
            zIndex: 100,
          }}
        />
        <motion.path
          fill='none'
          strokeWidth='5'
          stroke='#fad02c'
          d='M14,26 L 22,33 L 35,16'
          initial={false}
          strokeDasharray='0 1'
          animate={{ pathLength: isComplete ? 1 : 0 }}
        />
      </svg>
      <motion.div
        className={styles.curved}
        initial={{ clipPath: 'ellipse(10% 0% at 50% 0)', opacity: 0 }}
        animate={{ clipPath: 'ellipse(150% 100% at 50% 0)', opacity: 1 }}
        transition={{ ease: 'easeIn', duration: 0.5 }}></motion.div>
      <div className={styles.hero}>
        <motion.div
          className={styles.text}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: 'easeIn', duration: 0.8 }}>
          <h2>
            let me help{' '}
            <motion.span
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ease: 'easeInOut', duration: 1, delay: 0.5 }}>
              you
            </motion.span>{' '}
            on your next project
          </h2>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
