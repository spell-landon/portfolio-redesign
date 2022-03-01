import React from 'react';
import styles from './Resume.module.css';
import resume from '../../img/resume.png';

function Resume(props) {
  return (
    <div className={styles.resumeContainer}>
      <h3>resume time!</h3>
      <a
        href='https://docs.google.com/document/d/e/2PACX-1vQ4ueFjCe7BkZFfSYjtIpjjd1QeM5St2NN1Gd8hP1514JUMu-POKSIYuR8ohgXXdYW9B653yIluaTxB/pub'
        target='_blank'
        rel='noopener noreferrer'>
        <img src={resume} alt='Landon Spell Resume' />
      </a>
    </div>
  );
}

export default Resume;
