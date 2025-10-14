 "use client";
 import React, { useState ,useEffect } from 'react';
//  import { useSearchParams } from 'next/navigation';
 import styles from './CartSidebar.module.css';
 import { useLang } from "@/hooks/useLang";
 


export default function CartSidebar({ isOpen, onClose, cartItems, updateQuantity }) {
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const language = useLang();

  // 
  
  
  

  return (
    <div className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
      <button className={styles.closeBtn} onClick={onClose}>×</button>
      
      <div className={styles.cartList}>
        {cartItems.length === 0 ? (
          <div className={styles.emptyBasketContainer}>
          <p>{language === 'en' ? "Empty Order" : "سفارشی ندارید"}</p>
          <img src='/assets/images/logo/emptyBasket2.svg'/>
          </div>
        ) : (
          cartItems.map(item => (
            <div key={item.id} className={styles.cartItem}>
              <img src={item.image} alt={item.name} />
              <div className={styles.cartInfo}>
                <h4>{language === 'fa' ? item.name : item.en_name}</h4>
                <p className={language === 'en' ? `${styles.englishFont}` : ""}>{Number(item.price).toLocaleString('en-US')} {language === 'en' ? "T" : "تومان"}</p>
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
        <p className={`${styles.totalPrice} ${language === 'en' ? `${styles.englishFont}` : ""}`}> {language === 'en' ? "Total Price :" : "جمع کل:"}
           {total.toLocaleString()} {language === 'en' ? "T" : "تومان"}
        </p>
        <button className={styles.checkoutBtn} onClick={onClose}> {language === 'en' ? "Back To Order" : "ادامه سفارش"}</button>
      </div>
    </div>
  );
}
