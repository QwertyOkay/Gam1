import React, { useRef, useState, useEffect } from 'react';
import styles from './ImageSlider.module.css';

const ImageSlider = ({ images }) => {
  const sliderRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const startDrag = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const stopDrag = () => {
    setIsDragging(false);
  };

  const onDrag = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 3; // Scroll-fast
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (isDragging) {
      slider.addEventListener('mousemove', onDrag);
      slider.addEventListener('mouseup', stopDrag);
      slider.addEventListener('mouseleave', stopDrag);
    }

    return () => {
      slider.removeEventListener('mousemove', onDrag);
      slider.removeEventListener('mouseup', stopDrag);
      slider.removeEventListener('mouseleave', stopDrag);
    };
  },);

  return (
    <div ref={sliderRef} className={styles.slider} onMouseDown={startDrag}>
      {images.map((image, index) => (
        <div key={index} className={styles.imageContainer}>
          <img src={image} alt={`Slide ${index}`} className={styles.image} />
        </div>
      ))}
    </div>
  );
};

export default ImageSlider;