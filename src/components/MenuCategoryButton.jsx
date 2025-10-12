"use client";
import React, { useState ,useEffect } from 'react';
import styles from './MenuCategoryButton.module.css'
// import { useSearchParams } from 'next/navigation';
import { useLang } from "@/hooks/useLang";

export default function MenuCategoryButton({ onSelectCategory, selectedCategory }) {
  

  // const [language, setLanguage] = useState('fa'); // پیش‌فرض فارسی
  const language = useLang();
    //   const searchParams = useSearchParams();
    //    useEffect(() => {
    //   // گرفتن query lang از URL
    //   const lang = searchParams.get('lang'); // ?lang=en یا ?lang=fa
    //   if (lang === 'en' || lang === 'fa') {
    //     setLanguage(lang);
    //   }
    // }, [searchParams]);

    const persianFood = language === 'fa' ? "غذای ایرانی" : "Persian Food";
    const seaFood = language === 'fa' ? "غذای دریایی" : "Sea Food";
    const fastFood = language === 'fa' ? "فست فود" : "Fast Food";
    const appetizer = language === 'fa' ? "پیش غذا" : "Appetizer";
    const desserts = language === 'fa' ? "دسر" : "Desserts";
    const drink = language === 'fa' ? "نوشیدنی" : "Drink";

    
    

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
    <div   className={styles.menuCategoryContainer} >
      <button  onClick={() => onSelectCategory("persianFood")}
          className={selectedCategory === "persianFood" ? styles.active : ""}
        >
        <img src={selectedCategory === "persianFood" ? "/assets/images/logo/whitePersianFood2.svg" : "/assets/images/logo/meal.svg"} 
        />
        <p>{persianFood}</p>
      </button>
      <button onClick={() => onSelectCategory("seaFood")}
        className={selectedCategory === "seaFood" ? styles.active : ""}
        >
        <img
        src={selectedCategory === "seaFood" ? "/assets/images/logo/whiteFish2.svg" : "/assets/images/logo/fish.svg"}
        />
        <p>{seaFood}</p>
      </button>
      <button onClick={() => onSelectCategory("fastFood")}
      className={selectedCategory === "fastFood" ? styles.active : ""}
      
        >
        <img src={selectedCategory === "fastFood" ? "/assets/images/logo/whitehamburger2.svg" : "/assets/images/logo/hamburger.svg"}
        />
        <p>{fastFood}</p>
      </button>
      <button onClick={() => onSelectCategory("appetizer")}
        className={selectedCategory === "appetizer" ? styles.active : ""}
        >
        <img  src={selectedCategory === "appetizer" ? "/assets/images/logo/whiteHotdog2.svg" : "/assets/images/logo/hotdog.svg"}
         />
        <p>{appetizer}</p>
      </button>
      <button onClick={() => onSelectCategory("dessert")}
        className={selectedCategory === "dessert" ? styles.active : ""}
        >
        <img   src={selectedCategory === "dessert" ? "/assets/images/logo/whiteCupcake2.svg" : "/assets/images/logo/cupcake.svg"}
        
        />
        <p>{desserts}</p>
      </button>
      <button onClick={() => onSelectCategory("drink")}
        className={selectedCategory === "drink" ? styles.active : ""}
        >
        <img src={selectedCategory === "drink" ? "/assets/images/logo/whiteCola2.svg" : "/assets/images/logo/cola.svg"}
         />
        <p>{drink}</p>
      </button>
      
    </div>
  )
}
