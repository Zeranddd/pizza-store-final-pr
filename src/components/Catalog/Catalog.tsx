// Catalog.tsx
import styles from './Catalog.module.css'
import React from 'react';
import Menu from './Menu/Menu';

function Catalog() {
  return (
    <div className={styles.catalog_container}>
      <h1>Каталог пицц</h1>
      <Menu/>
    </div>
  );
}

export default Catalog;
