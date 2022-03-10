import React, { useRef } from 'react';
import styles from './About.module.css';
import { Element } from 'react-scroll';
// Framer Motion
import { motion } from 'framer-motion';

function About(props) {
  const scrollRef = useRef(null);
  return (
    <Element id='about' name='about'>
      <div className={styles.about}>
        <h3>a bit about me...</h3>
        <motion.div
          className={styles.gridContainer}
          ref={scrollRef}
          style={{ overflow: 'scroll' }}>
          <motion.div
            className={styles.picture}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ amount: 0.5 }}
            transition={{ ease: 'easeIn', duration: 0.3 }}></motion.div>
          <div>
            <section>
              <h4>Education</h4>
              <p>
                I am a recent graduate of the Software Engineering Program at
                General Assembly where I focused on different languages and
                frameworks.
              </p>
            </section>
            <section>
              <h4>History</h4>
              <p>
                Prior to the program, I was an Estimator and Project Manager for
                Rainbow International, which taught me not only how to present
                myself professionally, communicate and articulate difficult
                concepts, being able to work with a team, and adapt to new
                methods and implementations, but also how to think outside the
                box when a difficult problem arose. I now strive to apply that
                same level of optimism, gumption and dedication towards a
                Software Development role.
              </p>
            </section>
            <section>
              <h4>Motto?</h4>
              <p>
                My motto is “we'll figure it out”, because if there's a problem
                that needs solving, an impossible deadline, or something new
                that needs to be implemented, we can, and will, figure it out
                and get the job done!
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </Element>
  );
}

export default About;
