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
        <p>This website uses cookies. Press the button to confirm you agree to this. <Link to="/privacy">Learn more</Link></p>
        <button onClick={handleConfirm} className={styles.confirmButton}>Confirm</button>
      </div>
    )
  );
};

export default CookieBar;