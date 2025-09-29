import React from "react";
import styles from "./FoodModal.module.css";
import CloseBtn from "../../public/assets/images/logo/close.svg"

export default function FoodModal({ food, onClose }) {
  if (!food) return null; // اگه غذایی انتخاب نشده مودال نشون نده

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <img src={food.image} alt={food.name} className={styles.foodImage} />
        <h2>{food.name}</h2>
        <p>{food.description}</p>
        <p className={styles.price}>{food.price}T</p>
        <button className={styles.closeBtn} onClick={onClose}><img src='/assets/images/logo/close.svg'/></button>
        <button className={styles.addButton}>Add to Order</button>
      </div>
      
    </div>
  );
}
