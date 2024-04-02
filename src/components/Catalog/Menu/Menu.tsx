import styles from './Menu.module.css';
import React, { useState, useEffect } from 'react';
import menuData from '../../../data/menu.json';
import { Link } from 'react-router-dom';
import { useCart } from '../../Cart/CartContext';



function Menu() {

    const { addToCart } = useCart();

    const [quantities, setQuantities] = useState<{ [key: number]: number }>({});

    const incrementQuantity = (pizzaId: number) => {
        setQuantities((prevQuantities) => ({
            ...prevQuantities,
            [pizzaId]: (prevQuantities[pizzaId] || 1) + 1 || 1,
        }));
    };

    const decrementQuantity = (pizzaId: number) => {
        setQuantities((prevQuantities) => ({
            ...prevQuantities,
            [pizzaId]: Math.max((prevQuantities[pizzaId] || 0) - 1, 1),
        }));
    };


    return (
        <div className={styles.menu}>
            <ul className={styles.list}>
                {menuData.map((pizza) => (
                    <li key={pizza.id} className={styles['menu-item']}>
                        <div className={styles.menu_description}>
                            <Link className={styles['pizza-link']} to={`/catalog/${pizza.id}`}>
                                <p className={styles.centrum}><img src={pizza.images[0]} alt={pizza.name} className={styles.preview} /></p>
                                <h2 className={styles['pizza-name']}>{pizza.name}</h2>
                            </Link>
                            <p className={styles['pizza-description']}>{pizza.description}</p>
                        </div>

                        <p className={styles['pizza-price']}>Цена: <strong>{pizza.price}</strong> грн</p>


                        <div className={styles.buttons}>
                            <button
                                className={`btn btn-primary ${styles.addToCartButton}`}
                                onClick={() => {
                                    addToCart(
                                        {
                                            id: pizza.id,
                                            image: pizza.images[0],
                                            name: pizza.name,
                                            price: pizza.price,
                                            quantity: quantities[pizza.id] || 1,
                                        },
                                        quantities[pizza.id] || 1
                                    );
                                }}
                            >
                                Поместить в корзину
                            </button>

                            <Link to="/cart">
                                <button
                                    className={`btn btn-primary ${styles.goToCartButton}`}>
                                    Оформить заказ
                                </button>
                            </Link>
                        </div>


                        <p className={styles.totalPriceTag}>Общая стоимость: <strong>{pizza.price * (quantities[pizza.id] || 1)}</strong> грн</p>

                        <div className={styles.quantityContainer}>
                            <button className={styles.quantityButton} onClick={() => decrementQuantity(pizza.id)}>-</button>
                            <p className={styles.quantitiesCounter}>{quantities[pizza.id] || 1}</p>
                            <button className={styles.quantityButton} onClick={() => incrementQuantity(pizza.id)}>+</button>
                        </div>

                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Menu;