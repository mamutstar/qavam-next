// import React from 'react';
import styles from './BottomNoteBook.module.css';

export default function BottomNoteBook({ cartItems, onToggleCart }) {
  // جمع تعداد آیتم‌ها (جمع همه quantity ها)
  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className={styles.bottomNoteBookContainer}>
      <button className={styles.noteBookButton} onClick={onToggleCart}>
        <img src="/assets/images/logo/shopping-cart-simple 1.svg" alt="cart" />
        {itemCount > 0 && (
          <span className={styles.badge}>{itemCount}</span>
        )}
      </button>
    </div>
  );
}
