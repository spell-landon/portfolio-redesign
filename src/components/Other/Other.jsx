import React from 'react';
import styles from './Other.module.css';
// Icons
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { FaSpotify } from 'react-icons/fa';
import { SiYoutubemusic } from 'react-icons/si';
import { SiApplemusic } from 'react-icons/si';

function Other(props) {
  return (
    <div className={styles.otherContainer}>
      <div className={styles.otherContent}>
        <h3>other stuff</h3>
        <p className={styles.bigText}>other stuff</p>
        <section className={styles.additionalLinks}>
          <h4>you can also find me here</h4>
          <div className={styles.additionalIcons}>
            <a
              href='https://www.linkedin.com/in/landon-spell/'
              target='_blank'
              rel='noopener noreferrer'>
              <AiFillLinkedin className={styles.linkedinIcon} />
            </a>
            <a
              href='https://github.com/spell-landon'
              target='_blank'
              rel='noopener noreferrer'>
              <AiFillGithub className={styles.githubIcon} />
            </a>
            <a
              href='https://open.spotify.com/artist/5hkHxRCqlwm9L7e3SP58dg?si=FKLHpmfnQauzxOMZYznepw'
              target='_blank'
              rel='noopener noreferrer'>
              <FaSpotify className={styles.spotifyIcon} />
            </a>
            <a
              href='https://www.youtube.com/watch?v=tIBwHZBo1rg&list=OLAK5uy_lXH2RBt8g99iAulO2P8MpZttVhmW7ZPwA'
              target='_blank'
              rel='noopener noreferrer'>
              <SiYoutubemusic className={styles.youtubeIcon} />
            </a>
            <a
              href='https://music.apple.com/us/artist/landon-spell/1592835929'
              target='_blank'
              rel='noopener noreferrer'>
              <SiApplemusic className={styles.applemusicIcon} />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Other;
