// Home.tsx
import React from 'react';
import styles from './Home.module.css'

function Home() {
  return (
    <div className="home">
      <div className={styles['promotion']}>
        <div className={styles['promotion_tags']}>
          <h1 className={styles['promotion_title']}>Дарим каждому новому клиенту на доставку</h1>
          <h2 className={styles['promotion_pizza-name']}>Пепперони</h2>
        </div>
        <img className={styles['promotion_image']} src="/images/PepperoniPR.png" alt="пепперони" />
      </div>

      <div className={styles.middleInfo}>
        <div className={styles.aboutus}>
          <h1 className={styles.aboutus_title}>О НАС</h1>
          <hr className={styles.hr}/>
          <p className={styles.aboutus_text}>
            Golden Pizza - это уютная и современная пиццерия в которой гармонично сочетаются традиции и тренды, классические блюда итальянской кухни и оригинальные рецепты
            от шеф-повара, домашняя атмосфера и стильный интерьер. Мы лучший выбор для семейного ужина за сытной и вкусной пиццей, или просто вечер выходного дня в большой компании
            друзей. 
          </p>
          <img className={styles['aboutus_image']} src="images/Inside.jpg" alt="внутри" />
          <hr className={styles.hr}/>
        </div>
      </div>

    </div>
  );
}

export default Home;
