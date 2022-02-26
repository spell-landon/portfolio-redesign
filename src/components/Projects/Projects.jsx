import React from 'react';
import styles from './Projects.module.css';
import petfindr from '../../img/PetFindr.png';
import watson from '../../img/The Watson.png';
import recipeace from '../../img/Recipeace.png';
import flashcards from '../../img/Flash Cards.png';

function Projects(props) {
  return (
    <div>
      <div className={styles.vector}></div>
      <div className={styles.projectsContainer}>
        <div className={styles.projectsContent}>
          <h3>things i've built...</h3>
          <p className={styles.bigText}>things i've built...</p>
          <section className={styles.projectCards}>
            <div className={styles.card}>
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
            </div>
            <div className={styles.card}>
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
            </div>
            <div className={styles.card}>
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
            </div>
            <div className={styles.card}>
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
            </div>
          </section>
          <section className={styles.additional}>
            <p>you can find additional projects on my github profile</p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Projects;
