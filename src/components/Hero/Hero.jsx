import React from 'react';
import styles from './Hero.module.css';
// Framer Motion
import { motion } from 'framer-motion';

function Hero(props) {
  return (
    <div>
      <div className={styles.curved}></div>
      <div className={styles.hero}>
        <div className={styles.text}>
          <h2>
            let me help{' '}
            <motion.span
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ease: 'easeInOut', duration: 1 }}>
              you
            </motion.span>{' '}
            on your next project
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Hero;
