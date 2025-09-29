
'use client';
import React, { useState } from 'react';
import styles from './FoodMenu.module.css';
import QavamHeaderPoster from '../../../public/assets/images/logo/qavamHeaderPoster2.png';
import MenuCategoryButtons from '../../components/MenuCategoryButton';
import FoodItem from '../../components/FoodItem';
import NoteBook from '../../components/BottomNoteBook'
import FoodModal from "../../components/FoodModal";
import ExampleImage from '../../../public/assets/images/foodImage/anh-nguyen-kcA-c3f_3FE-unsplash.jpg'


export default function FoodMenu() {
  const [selectedFood, setSelectedFood] = useState(null);
  const foods = [
    { id: 1, name: "Truffle Pasta", price: 120000, image: '/assets/images/foodImage/anh-nguyen-kcA-c3f_3FE-unsplash.jpg', description: "Our classic Margherita pizza features fresh mozzarella cheese, garden-fresh basil leaves, and our signature tomato sauce on a perfectly crispy wood-fired crust." },
    { id: 2, name: "Pasta Carbonara", price: 150000, image: '/assets/images/foodImage/anh-nguyen-kcA-c3f_3FE-unsplash.jpg', description: "Our classic Margherita pizza features fresh mozzarella cheese, garden-fresh basil leaves, and our signature tomato sauce on a perfectly crispy wood-fired crust." },
    { id: 3, name: "Margherita Pizza", price: 150000, image: '/assets/images/foodImage/anh-nguyen-kcA-c3f_3FE-unsplash.jpg', description: "Our classic Margherita pizza features fresh mozzarella cheese, garden-fresh basil leaves, and our signature tomato sauce on a perfectly crispy wood-fired crust." }
  ];
  return (
    <div className={styles.bodyy}>
        <img className={styles.qavamHeaderImg} src='/assets/images/logo/qavamHeaderPoster2.png'/>
        <MenuCategoryButtons>
          
        </MenuCategoryButtons>

        {foods.map(food => (
        <FoodItem key={food.id} food={food} onClick={() => setSelectedFood(food)} />
      ))}

        <NoteBook></NoteBook>
        {/* مودال */}
      <FoodModal food={selectedFood} onClose={() => setSelectedFood(null)} />
        
    </div>
  )
}
