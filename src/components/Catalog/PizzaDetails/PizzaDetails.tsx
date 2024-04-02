import React, { useState, useEffect } from 'react';
import menuData from '../../../data/menu.json';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../../Cart/CartContext';
import styles from './PizzaDetails.module.css';
import Carousel from './Carousel';

interface Pizza {
    id: number;
    name: string;
    description: string;
    price: number;
    images: string[];
    details: string;
    ingredients: string[];
    reviews: { name: string; comment: string }[];
}

interface ReviewItem {
    id: number;
    name: string;
    comment: string;
}



interface Image {
    src: string;
    alt: string;
}




function PizzaDetails() {
    const { pizzaId } = useParams<{ pizzaId?: string }>();
    const parsedPizzaId = pizzaId ? parseInt(pizzaId, 10) : null;
    const [pizza, setPizza] = useState<Pizza | null>(null);
    const [newReviewText, setNewReviewText] = useState<string>('');

    const addReview = () => {
        if (newReviewText.trim() === '') {
            return;
        }

        const newReview: ReviewItem = {
            id: Date.now(),
            name: `Денис`,
            comment: newReviewText,
        };

        if (pizza !== null) {
            setPizza((prevPizza) => ({
                ...prevPizza!,
                id: prevPizza ? prevPizza.id : 0,
                reviews: [...(prevPizza?.reviews || []), newReview],
            }));
            setNewReviewText('');
        }
    };

    useEffect(() => {
        if (parsedPizzaId !== null) {
            const foundPizza = menuData.find((item) => item.id === parsedPizzaId);
            if (foundPizza) {
                setPizza(foundPizza);
            }
        }
    }, [parsedPizzaId, menuData]);

    const { addToCart } = useCart();
    const [selectedQuantity, setSelectedQuantity] = useState(1);

    const incrementQuantity = () => {
        setSelectedQuantity(selectedQuantity + 1);
    };

    const decrementQuantity = () => {
        if (selectedQuantity > 1) {
            setSelectedQuantity(selectedQuantity - 1);
        }
    };

    return (
        <div className={styles.pizzaDetails}>
            {pizza ? (
                <div>
                    <h1 className={styles.pizzaName}>{pizza.name}</h1>




                    <div className={styles.detailsUpper}>

                        <div className={styles.Carousel}>
                            <Carousel items={pizza.images} renderItem={(image) => (
                                <img className={styles.detailsImg} src={image} key={image} />
                            )} />
                        </div>

                        <div className={styles.descriptionPart}>
                            <h2 className={styles.description_title}>Описание</h2>
                            <p className={styles.pizzaDetails}>{pizza.details}</p>
                        </div>


                        <div className={styles.pricePart}>
                            <div className={styles.btns}>
                                <button
                                    className={`btn btn-primary ${styles.addToCartButton}`}
                                    onClick={() => {
                                        addToCart(
                                            {
                                                id: pizza.id,
                                                image: pizza.images[0],
                                                name: pizza.name,
                                                price: pizza.price,
                                                quantity: selectedQuantity,
                                            },
                                            selectedQuantity
                                        );
                                    }}
                                >
                                    Поместить в корзину
                                </button>
                                <Link to="/cart">
                                    <button className={`btn btn-primary ${styles.goToCartButton}`}>
                                        Оформить заказ
                                    </button>
                                </Link>
                            </div>
                            <p className={styles['pizza-general-price']}>Цена: <strong>{pizza.price}</strong> грн</p>
                        </div>

                    </div>



                    <h2 className={styles.titleIngredients}>Ингредиенты</h2>
                    <ul className={styles.ingredients_list}>
                        {pizza.ingredients.map((ingredients, index) => (
                            <li key={index}>{ingredients}</li>
                        ))}
                    </ul>
                    {/* <h2 className={styles.description_title}>Описание</h2>
                    <p className={styles.pizzaDetails}>{pizza.details}</p> */}
                </div>
            ) : (
                <div>Пицца не найдена</div>
            )}
            <div className={styles.reviews_container}>
                <h2 className={styles.reviews_title}>Отзывы</h2>
                <ul className={styles.reviews_list}>
                    {pizza && pizza.reviews && pizza.reviews.map((review, index) => (
                        <li className={styles.review_item} key={index}>
                            <strong>{review.name}</strong>: {review.comment}
                        </li>
                    ))}
                </ul>
            </div>
            <div className={styles.addReview_container}>
                <h2 className={styles.addReview_title}>Оставить отзыв</h2>
                <textarea
                    placeholder="Введите отзыв"
                    value={newReviewText}
                    onChange={(e) => setNewReviewText(e.target.value)}
                    className={styles.addReview_area}
                ></textarea>
                <br />
                <button onClick={addReview} className={styles.addReview_button}>Отправить</button>
            </div>
        </div>
    );
}

export default PizzaDetails;
