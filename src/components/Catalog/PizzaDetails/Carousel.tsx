import React, { useState } from 'react';
import styles from './Carousel.module.css';

interface CarouselProps<T> {
    items: T[];
    renderItem: (item: T) => React.ReactNode;
}

function Carousel<T>({ items, renderItem }: CarouselProps<T>): JSX.Element {
    const [currentIndex, setCurrentIndex] = useState(0);
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex +1) % items.length);
    };
    const prevSlide = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? items.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className={styles.carousel}>
            <button className={styles.carousel_button} onClick={prevSlide}>◄︎</button>
            <div className="carousel-item">
                {renderItem(items[currentIndex])}
            </div>
            <button className={styles.carousel_button} onClick={nextSlide}>►︎</button>
        </div>
    );
}
export default Carousel;