import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { useSite } from '../context/SiteContext';
import styles from './Hero.module.css';// Ensure you have a background image
import ImageSlider from './ImageSlider';

// Import your images
import slider1 from '../assets/slider1.webp';
import slider2 from '../assets/slider2.webp';
import slider3 from '../assets/slider3.webp';

const Hero = () => {
  const { slogan, info } = useSite();
  const images = [slider1, slider2, slider3]; // Add your images here

  return (
    <section className={styles.hero} >
      <ImageSlider images={images} />
      <div>
       
        <div className={styles.content}>
          <h1 className={styles.slogan}>{slogan}</h1>
          <p className={styles.description}>{info}</p>
          <ScrollLink
            to="products-section"
            smooth={true}
            duration={500}
            offset={-70}  // Adjust the offset as needed
            className={styles.orderButton}
          >
            Sipariş Ver
          </ScrollLink>
        </div>
      </div>
    </section>
  );
};

export default Hero;