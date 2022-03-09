import React from 'react';
import { Link } from 'react-scroll';
import styles from './Navigation.module.css';

function Navigation(props) {
  return (
    <div className={styles.navigation}>
      <h1>
        Landon Spell<span>.</span>
      </h1>
      <ul>
        <li>
          <Link
            activeClass='active'
            className='about'
            to='about'
            spy={true}
            smooth={true}
            duration={600}>
            About
          </Link>
        </li>
        <li>
          <Link
            activeClass='active'
            className='projects'
            to='projects'
            spy={true}
            smooth={true}
            duration={600}>
            Projects
          </Link>
        </li>
        <li>
          <Link
            activeClass='active'
            className='resume'
            to='resume'
            spy={true}
            smooth={true}
            duration={600}>
            Resume
          </Link>
        </li>
        <li>
          <Link
            activeClass='active'
            className='contact'
            to='contact'
            spy={true}
            smooth={true}
            duration={600}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
