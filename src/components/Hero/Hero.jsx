import React from 'react';
import styles from './Hero.module.css';
import HeroImage from '../../assets/vibrating-headphone.svg'; 

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.heroText}>
          <h1>100 Thousand Songs, ad-free</h1>
          <h1>Over thousands podcast episodes</h1>
        </div>
        <img 
            src={HeroImage} 
            alt="Headphones" 
            className={styles.heroImage} 
        />
      </div>
    </section>
  );
};

export default Hero;