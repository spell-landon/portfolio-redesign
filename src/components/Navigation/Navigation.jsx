import React from 'react';
import { Link } from 'react-scroll';
import styles from './Navigation.module.css';
// Framer Motion
import { motion } from 'framer-motion';

function Navigation(props) {
  return (
    <motion.div
      className={styles.navigation}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: 'easeIn', duration: 0.5, delay: 0.5 }}>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: 'easeIn', duration: 0.5 }}>
        Landon Spell<span>.</span>
      </motion.h1>
      <motion.ul
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: 'easeIn', duration: 0.5 }}>
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
      </motion.ul>
    </motion.div>
  );
}

export default Navigation;
