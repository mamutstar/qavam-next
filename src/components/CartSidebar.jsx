 import React, { useState ,useEffect } from 'react';
 import { useSearchParams } from 'next/navigation';
 import styles from './CartSidebar.module.css';



export default function CartSidebar({ isOpen, onClose, cartItems, updateQuantity }) {
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const [language, setLanguage] = useState('fa'); // پیش‌فرض فارسی
    const searchParams = useSearchParams();
     useEffect(() => {
    // گرفتن query lang از URL
    const lang = searchParams.get('lang'); // ?lang=en یا ?lang=fa
    if (lang === 'en' || lang === 'fa') {
      setLanguage(lang);
    }
  }, [searchParams]);
  
  

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
