 import styles from './CartSidebar.module.css';

export default function CartSidebar({ isOpen, onClose, cartItems, updateQuantity }) {
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
      <button className={styles.closeBtn} onClick={onClose}>×</button>
      
      <div className={styles.cartList}>
        {cartItems.length === 0 ? (
          <p>سبد خرید خالی است</p>
        ) : (
          cartItems.map(item => (
            <div key={item.id} className={styles.cartItem}>
              <img src={item.image} alt={item.name} />
              <div className={styles.cartInfo}>
                <h4>{item.name}</h4>
                <p>{item.price.toLocaleString()} تومان</p>
              </div>
              <div className={styles.quantity}>
                <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, +1)}>+</button>
              </div>
            </div>
          ))
        )}
      </div>

      <div className={styles.totalSection}>
        <p className={styles.totalPrice}>
          جمع کل: {total.toLocaleString()} تومان
        </p>
        <button className={styles.checkoutBtn}>ثبت سفارش</button>
      </div>
    </div>
  );
}
