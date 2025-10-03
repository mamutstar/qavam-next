
import React, { useState ,useEffect } from 'react';
import styles from './FoodItem.module.css'
// import FoodItem1 from '../assets/images/foodImage/anh-nguyen-kcA-c3f_3FE-unsplash.jpg'
import FoodModal from './FoodModal'
import { useSearchParams } from 'next/navigation'; // اگر پروژه‌ی شما Next.js است
// اگر React معمولی هست، از window.location.search استفاده می‌کنیم
const toEnglishNumber = (num) => {
  return num.toString().replace(/[۰-۹]/g, (d) => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d));
};

 export default function 
FoodItem ({ food, onClick , onAddToCart}) {

    const [selectedFood, setSelectedFood] = useState(null);
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
    const handleClick = () => {
    setSelectedFood(food);  // وقتی روی غذا کلیک می‌کنیم، اطلاعات غذا رو می‌گذاریم در State
  };
  return (
    <div >
        <div className={`${styles.foodItemContainer} ${language === 'fa' ? styles.rtl : styles.ltr}`} onClick={onClick} >
            <div className={styles.foodImgContainer}>
                <img src={food.image}/>
            </div>
            <div className={styles.foodInfoContainer}>
                <h3>{displayName}</h3>
                <p className={`${language === 'fa' ? styles.rtlDesc : styles.ltr}`}>{displayDescription}</p>
                <div className={styles.priceFoodContainer}>
                    <p className={`${language === 'fa' ? styles.priceRtl : ""}`}>
                        
                        <span  content={food.price}>{toEnglishNumber(food.price)}</span>
                        <span  content="TOOMAN">T</span>
                    </p>
                    <button onClick={(e) => { 
              e.stopPropagation(); // جلوگیری از باز شدن مودال
              onAddToCart(food); 
            }}>{addOrder}</button>
                </div>
            </div>
        </div>
        {/* <div className={styles.foodItemContainer}>
            <div className={styles.foodImgContainer}>
                <img src={FoodItem1}/>
            </div>
            <div className={styles.foodInfoContainer}>
                <h3>Trufel Passta</h3>
                <p>Delicate handmade pasta tossed in a rich truffle cream sauce, finished with freshly grated Parmesan cheese and black truffle shavings.</p>
                <div className={styles.priceFoodContainer}>
                    <p>
                        
                        <span  content="24.99">240.000</span>
                        <span  content="TOOMAN">T</span>
                    </p>
                    <button>Add to Order</button>
                </div>
            </div>
        </div>
        <div className={styles.foodItemContainer}>
            <div className={styles.foodImgContainer}>
                <img src={FoodItem1}/>
            </div>
            <div className={styles.foodInfoContainer}>
                <h3>Trufel Passta</h3>
                <p>Delicate handmade pasta tossed in a rich truffle cream sauce, finished with freshly grated Parmesan cheese and black truffle shavings.</p>
                <div className={styles.priceFoodContainer}>
                    <p>
                        
                        <span  content="24.99">240.000</span>
                        <span  content="TOOMAN">T</span>
                    </p>
                    <button>Add to Order</button>
                </div>
            </div>
        </div> */}
        {/* <FoodModal food={selectedFood} onClose={() => setSelectedFood(null)} /> */}
    </div>
  )
}
