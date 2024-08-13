import React from 'react';
import styles from './About.module.css'; 

const About = () => {

  return (
    <div className={styles.container}>
      <div className={styles.logo} />
      <div className={styles.skewedBlock}>
      <h1 className={styles.heading}>BONUSU 120%</h1></div>
      <h2 className={styles.bonusAmount}>700 AZN </h2>
      <h2 className={styles.freeSpins}>+ 250 free spins</h2>
      <a href='/about'><button className={styles.button}>Bonus kazanın</button> </a>
    </div>
  );
};

export default About;
