
import React, { useState } from 'react';
import styles from './FoodItem.module.css'
// import FoodItem1 from '../assets/images/foodImage/anh-nguyen-kcA-c3f_3FE-unsplash.jpg'
import FoodModal from './FoodModal'

 export default function 
FoodItem ({ food, onClick }) {

    const [selectedFood, setSelectedFood] = useState(null);
    const handleClick = () => {
    setSelectedFood(food);  // وقتی روی غذا کلیک می‌کنیم، اطلاعات غذا رو می‌گذاریم در State
  };
  return (
    <div >
        <div className={styles.foodItemContainer} onClick={onClick} >
            <div className={styles.foodImgContainer}>
                <img src={food.image}/>
            </div>
            <div className={styles.foodInfoContainer}>
                <h3>{food.name}</h3>
                <p>{food.description}</p>
                <div className={styles.priceFoodContainer}>
                    <p>
                        
                        <span  content={food.price}>{food.price}</span>
                        <span  content="TOOMAN">T</span>
                    </p>
                    <button>Add to Order</button>
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
