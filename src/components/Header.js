// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import logo from '../assets/logo.png'; // Assume you have a logo.png in the assets folder

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Link to="/">
          <img src={logo} alt="Logo" className={styles.logo} />
        </Link>
      </div>
      <nav className={styles.navLinks}>
        <Link to="/privacy" className={styles.navLink}>
          Gizlilik Politikası
        </Link>
        <Link to="/terms" className={styles.navLink}>
          Hizmet Şartları
        </Link>
        <Link to="/delivery" className={styles.navLink}>
          Teslimat Politikası
        </Link>
        <Link to="/return" className={styles.navLink}>
          İade Politikası
        </Link>
      </nav>
    </header>
  );
};

export default Header;
