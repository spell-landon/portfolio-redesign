import React from 'react';
import styles from './Navigation.module.css';

function Navigation(props) {
  return (
    <div className={styles.navigation}>
      <h1>
        Landon Spell<span>.</span>
      </h1>
      <ul>
        <li>About</li>
        <li>Projects</li>
        <li>Resume</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}

export default Navigation;
