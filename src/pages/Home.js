import React from 'react';
import ProductCard from '../components/ProductCard';
import products from '../data/productsData';
import styles from './Home.module.css';
import Hero from '../components/Hero';

const Home = () => {
  // Filter products based on different platform criteria
  const playStationProducts = products.filter(product => product.badge === 'PlayStation');
  const xboxProducts = products.filter(product => product.badge === 'Xbox');
  // const nintendoProducts = products.filter(product => product.badge === 'Nintendo Switch');

  // Function to chunk products into groups of 3
  const chunkProducts = (arr, size) => {
    return arr.reduce((acc, _, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), []);
  };

  // Chunk each category into groups of 3
  const chunkedPlayStationProducts = chunkProducts(playStationProducts, 3);
  const chunkedXboxProducts = chunkProducts(xboxProducts, 3);
  // const chunkedNintendoProducts = chunkProducts(nintendoProducts, 3);

  return (
    <>
      <Hero />
      <div id="products-section" className={styles.container}>
        <h1 className={styles.heading}>PlayStation İçin Pin Up Seçkisi</h1>
        {chunkedPlayStationProducts.map((group, index) => (
          <div key={index} className={styles.productGroup}>
            <div className={styles.grid}>
              {group.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Render Xbox Products */}
      <div className={styles.container}>
        <h1 className={styles.heading}>Xbox İçin Pin Up Seçimi</h1>
        {chunkedXboxProducts.map((group, index) => (
          <div key={index} className={styles.productGroup}>
            <div className={styles.grid}>
              {group.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Render Nintendo Switch Products */}
      {/* <div className={styles.container}>
        <h1 className={styles.heading}>Nintendo Switch İçin Pin Up Özel</h1>
        {chunkedNintendoProducts.map((group, index) => (
          <div key={index} className={styles.productGroup}>
            <div className={styles.grid}>
              {group.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        ))}
      </div> */}
    </>
  );
};

export default Home;
