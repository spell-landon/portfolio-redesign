import React from 'react';
import styles from './Hero.module.css';

function Hero(props) {
  return (
    <div>
      <div className={styles.curved}></div>
      <div className={styles.hero}>
        <div className={styles.text}>
          <h2>
            let me help <span>you</span> on your next project
          </h2>
          <p>spell.landon@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
