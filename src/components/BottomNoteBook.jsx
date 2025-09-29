import React from 'react'
import styles from './BottomNoteBook.module.css'
import ShoppingCart from '../../public/assets/images/logo/shopping-cart-simple 1.svg'

export default function BottomNoteBook() {
    const itemCount = 3; // تعداد آیتم‌های سبد خرید (بعداً می‌تونی با state یا props تغییر بدی)
  return (
    <div className={styles.bottomNoteBookContainer}>
        <button className={styles.noteBookButton}>
            <img src='/assets/images/logo/shopping-cart-simple 1.svg'></img>
            {itemCount > 0 && (
          <span className={styles.badge}>{itemCount}</span>
        )}
        </button>

    </div>
  )
}
