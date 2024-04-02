// Reviews.tsx
import React from 'react';
import styles from './Reviews.module.css'
import reviews from '../../data/reviews.json'

function Reviews() {
  return (
    <div className={styles.reviews_container}>
      <h1>Отзывы</h1>

      <ul className={styles.review}>
        {reviews.map((review) => (
          <li key={review.id} className={styles['review-item']}>
            <div className={styles.review_author}>
            <img src="images/user.png" alt="USER" className={styles.pfp}/>
            <h2 className={styles.name}>{review.author}</h2>
            </div>
            <p className={styles.review_text}>{review.text}</p>
            <p className={styles.review_rating}>Оценка: <strong>{review.rating}</strong></p>
          </li>
        ))};
      </ul>
    </div >
  );
}

export default Reviews;
