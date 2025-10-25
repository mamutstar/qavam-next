 "use client";
 import React from 'react';
 import Link from 'next/link';
 import { useLang } from "@/hooks/useLang";
import styles from './BottomNoteBook.module.css';




export default function BottomNoteBook({ itemCount = [], onToggleCart }) {
  const language = useLang();

const changeLanguage = language === "fa" ? '/menu?lang=en':'/menu?lang=fa';
  // جمع تعداد آیتم‌ها (جمع همه quantity ها)
  // const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className={styles.bottomNoteBookContainer}>
      <Link href={changeLanguage}>
      <button className={styles.homeIconButton} >
        <img src='/assets/images/logo/languageIconSmall.svg' alt="language" />
        
      </button>
      </Link>
      <button className={styles.noteBookButton} onClick={onToggleCart}>
        <img src='/assets/images/logo/shopping-cart-simple 1.svg' alt="cart" />
        {itemCount > 0 && (
          <span className={styles.badge}>{itemCount}</span>
        )}
      </button>
      <Link href='/'>
      <button className={styles.homeIconButton} >
        <img src='/assets/images/logo/homeIconSmall.svg' alt="home" />
        
      </button>
      </Link>
    </div>
  );
}
