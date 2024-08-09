import React, { useState, useEffect } from 'react';
import styles from './CookieBar.module.css';
import { Link } from 'react-router-dom';
import cookieImage from '../assets/cookie.png'; // Make sure to add your image in the appropriate directory

const CookieBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Check if the user has already accepted cookies
    const hasAcceptedCookies = localStorage.getItem('cookiesAccepted');
    if (hasAcceptedCookies) {
      setIsVisible(false);
    }
  }, []);

  const handleConfirm = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setIsVisible(false);
  };

  return (
    isVisible && (
      <div className={styles.cookieBar}>
        <img src={cookieImage} alt="Cookie" className={styles.cookieImage} />
        <p>Bu web sitesi çerezleri kullanır. Bunu kabul ettiğinizi onaylamak için düğmeye basın. <Link to="/privacy">Daha fazla bilgi edin</Link></p>
        <button onClick={handleConfirm} className={styles.confirmButton}>Onaylamak</button>
      </div>
    )
  );
};

export default CookieBar;