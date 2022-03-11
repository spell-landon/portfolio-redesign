import React, { useRef } from 'react';
import styles from './Projects.module.css';
import petfindr from '../../img/PetFindr.png';
import watson from '../../img/The Watson.png';
import recipeace from '../../img/Recipeace.png';
import flashcards from '../../img/Flash Cards.png';
import { AiFillGithub } from 'react-icons/ai';
import { Element } from 'react-scroll';
// Framer Motion
import { motion } from 'framer-motion';

function Projects(props) {
  const scrollRef = useRef(null);
  const item = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        ease: 'easeIn',
        duration: 0.75,
      },
    },
  };

  return (
    <Element id='projects' name='projects'>
      <div>
        <motion.div
          animate={{ x: -440 }}
          transition={{
            ease: 'easeInOut',
            duration: 5,
            repeat: Infinity,
            repeatType: 'mirror',
          }}
          className={styles.vector}></motion.div>
        <div className={styles.projectsContainer}>
          <div className={styles.projectsContent}>
            <h3>things i've built...</h3>
            <p className={styles.bigText}>things i've built...</p>
            <motion.div
              className={styles.projectCards}
              ref={scrollRef}
              style={{ overflow: 'scroll' }}>
              <motion.div
                className={styles.card}
                variants={item}
                initial='hidden'
                whileInView='visible'
                viewport={{ amount: '80%' }}>
                <a
                  href='https://petfindr.netlify.app/'
                  target='_blank'
                  rel='noopener noreferrer'>
                  <img src={petfindr} alt='PetFindr' />
                  <div className={styles.cardText}>
                    <h4>PetFindr</h4>
                    <h5>
                      React | Python | Django | PostgreSQL | CSS | Framer Motion
                    </h5>
                  </div>
                </a>
              </motion.div>
              <motion.div
                className={styles.card}
                variants={item}
                initial='hidden'
                whileInView='visible'
                viewport={{ amount: '80%' }}>
                <a
                  href='https://the-watson.netlify.app/'
                  target='_blank'
                  rel='noopener noreferrer'>
                  <img src={watson} alt='The Watson' />
                  <div className={styles.cardText}>
                    <h4>The Watson</h4>
                    <h5>React | Express | MongoDB | Node | CSS</h5>
                  </div>
                </a>
              </motion.div>
              <motion.div
                className={styles.card}
                variants={item}
                initial='hidden'
                whileInView='visible'
                viewport={{ amount: '80%' }}>
                <a
                  href='https://recipeace.netlify.app/'
                  target='_blank'
                  rel='noopener noreferrer'>
                  <img src={recipeace} alt='Recipeace' />
                  <div className={styles.cardText}>
                    <h4>Recipeace</h4>
                    <h5>React | Third Party API | CSS</h5>
                  </div>
                </a>
              </motion.div>
              <motion.div
                className={styles.card}
                variants={item}
                initial='hidden'
                whileInView='visible'
                viewport={{ amount: '80%' }}>
                <a
                  href='https://spell-landon.github.io/flash-cards/'
                  target='_blank'
                  rel='noopener noreferrer'>
                  <img src={flashcards} alt='Flash Cards' />
                  <div className={styles.cardText}>
                    <h4>Flash Cards</h4>
                    <h5>JavaScript | HTML | CSS</h5>
                  </div>
                </a>
              </motion.div>
            </motion.div>
            <section className={styles.additional}>
              <p>you can find additional projects on my github profile</p>
            </section>
          </div>
        </div>
        <div className={styles.curved}></div>
        <div className={styles.githubSection}>
          <motion.a
            id='githubLink'
            href='https://github.com/spell-landon'
            target='_blank'
            rel='noopener noreferrer'
            initial={{ rotate: '0deg' }}
            whileInView={{ rotate: '360deg' }}
            viewport={{ amount: 1 }}
            transition={{ duration: 0.5 }}>
            <AiFillGithub className={styles.icon} />
          </motion.a>
        </div>
      </div>
    </Element>
  );
}

export default Projects;
