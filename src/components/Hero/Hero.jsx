import React from 'react';
import styles from './Hero.module.css';
// Framer Motion
import { motion } from 'framer-motion';

function Hero(props) {
  return (
    <div>
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
