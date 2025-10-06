import React, { useState ,useEffect } from 'react';
import styles from './MenuCategoryButton.module.css'
import { useSearchParams } from 'next/navigation';

export default function MenuCategoryButton({ onSelectCategory,scrolled }) {
scrolled=false
  const [language, setLanguage] = useState('fa'); // پیش‌فرض فارسی
      const searchParams = useSearchParams();
       useEffect(() => {
      // گرفتن query lang از URL
      const lang = searchParams.get('lang'); // ?lang=en یا ?lang=fa
      if (lang === 'en' || lang === 'fa') {
        setLanguage(lang);
      }
    }, [searchParams]);

    const persianFood = language === 'fa' ? "غذای ایرانی" : "Persian Food";
    const seaFood = language === 'fa' ? "غذای دریایی" : "Sea Food";
    const fastFood = language === 'fa' ? "فست فود" : "Fast Food";
    const appetizer = language === 'fa' ? "پیش غذا" : "Appetizer";
    const desserts = language === 'fa' ? "دسر" : "Desserts";
    const drink = language === 'fa' ? "نوشیدنی" : "Drink";

    
    console.log(scrolled);

  return (
    // <div className={styles.menuCategoryContainer}>
    //       <button>
    //         <img src='/assets/images/logo/meal.svg'/>
    //         <p>Persian Food</p>
    //       </button>
    //       <button>
    //          <img src='/assets/images/logo/fish.svg'/>
    //         <p>Sea Food</p>
    //       </button>
    //       <button>
    //         <img src='/assets/images/logo/hamburger.svg'/>
    //         <p>Fast Food</p>
    //       </button>
    //       <button>
    //         <img src='/assets/images/logo/hotdog.svg'/>
    //         <p>Appetizer</p>
    //       </button>
    //       <button>
    //         <img src='/assets/images/logo/cupcake.svg'/>
    //         <p>Desserts</p>
    //       </button>
    //       <button>
    //         <img src='/assets/images/logo/cola.svg'/>
    //         <p>Drink</p>
    //       </button>

    // </div>
    <div   className={scrolled ? styles.menuCategoryContainerScrolled : styles.menuCategoryContainer} >
      <button  onClick={() => onSelectCategory("persianFood")}>
        <img src='/assets/images/logo/meal.svg'/>
        <p>{persianFood}</p>
      </button>
      <button onClick={() => onSelectCategory("seaFood")}>
        <img src='/assets/images/logo/fish.svg'/>
        <p>{seaFood}</p>
      </button>
      <button onClick={() => onSelectCategory("fastFood")}>
        <img src='/assets/images/logo/hamburger.svg'/>
        <p>{fastFood}</p>
      </button>
      <button onClick={() => onSelectCategory("appetizer")}>
        <img src='/assets/images/logo/hotdog.svg'/>
        <p>{appetizer}</p>
      </button>
      <button onClick={() => onSelectCategory("dessert")}>
        <img src='/assets/images/logo/cupcake.svg'/>
        <p>{desserts}</p>
      </button>
      <button onClick={() => onSelectCategory("drink")}>
        <img src='/assets/images/logo/cola.svg'/>
        <p>{drink}</p>
      </button>
      <p>*</p>
    </div>
  )
}
