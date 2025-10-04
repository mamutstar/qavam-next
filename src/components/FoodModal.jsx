import React, { useState ,useEffect } from 'react';
import styles from "./FoodModal.module.css";
import CloseBtn from "../../public/assets/images/logo/close.svg"
import { useSearchParams } from 'next/navigation';


export default function FoodModal({ food, onClose , onAddToCart}) {
  if (!food) return null; // اگه غذایی انتخاب نشده مودال نشون نده
  const [language, setLanguage] = useState('fa'); // پیش‌فرض فارسی
    const searchParams = useSearchParams();
     useEffect(() => {
    // گرفتن query lang از URL
    const lang = searchParams.get('lang'); // ?lang=en یا ?lang=fa
    if (lang === 'en' || lang === 'fa') {
      setLanguage(lang);
    }
  }, [searchParams]);
  const displayName = language === 'fa' ? food.name : food.en_name;
  const displayDescription = language === 'fa' ? food.description : food.en_description;
  const addOrder = language === 'fa' ? "افزودن" : "Add To Order";

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <img src={food.image} alt={food.name} className={styles.foodImage} />
        <h2>{displayName}</h2>
        <p>{displayDescription}</p>
        <p className={styles.price}>{food.price}T</p>
        <button className={styles.closeBtn} onClick={onClose}><img src='/assets/images/logo/close.svg'/></button>
        <button
         className={styles.addButton}
         onClick={() => {
            onAddToCart(food);   // آیتم به سبد خرید اضافه میشه
                       // بعدش مودال بسته میشه (اختیاری)
          }}
         >{addOrder}</button>
      </div>
      
    </div>
  );
}
