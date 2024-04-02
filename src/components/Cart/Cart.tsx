import React from "react";
import { useCart } from './CartContext';
import styles from './Cart.module.css';



function Cart() {
    const { cartItems, removeFromCart } = useCart();

    const handleRemoveFromCart = (itemId: number) => {
        removeFromCart(itemId);
    };

    return (
        <div className={styles.cart_container}>
            <h2>Корзина</h2>
            <ul className={styles.content}>
                {cartItems.map((item) => (
                    <li className={styles.item_cart} key={item.id}>
                        <div className={styles.item_content}>
                            <hr />
                            <div className={styles.info_container}>
                                <img src={item.image} alt={item.name} className={styles.preview} />
                                <span className={styles.item_info}>{item.name} - {item.quantity} шт. - {(item.price * item.quantity).toFixed(2)} грн </span>
                                <button className={styles.button_cart} onClick={() => handleRemoveFromCart(item.id)}>X</button>
                            </div>
                            
                            <hr />
                        </div>
                    </li>
                ))}
            </ul>
            <p className={styles.total_price}>
            Общая сумма: <strong>{cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</strong> грн
            </p>

            <div className={styles.void}>

            </div>
        </div>
    );
}

export default Cart;