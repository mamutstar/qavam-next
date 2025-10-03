
'use client';
import React, { useEffect, useState } from 'react';
import styles from './FoodMenu.module.css';
import QavamHeaderPoster from '../../../public/assets/images/logo/qavamHeaderPoster2.png';
import MenuCategoryButtons from '../../components/MenuCategoryButton';
import FoodItem from '../../components/FoodItem';
import NoteBook from '../../components/BottomNoteBook'
import FoodModal from "../../components/FoodModal";
import ExampleImage from '../../../public/assets/images/foodImage/anh-nguyen-kcA-c3f_3FE-unsplash.jpg'
import CartSidebar from "../../components/CartSidebar"; // 🔥 اضافه شد



export default function FoodMenu() {
  const [selectedFood, setSelectedFood] = useState(null);
  const [foods, setFoods] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // const foods = [
  //   { id: 1, name: "Truffle Pasta", price: 120000, image: '/assets/images/foodImage/anh-nguyen-kcA-c3f_3FE-unsplash.jpg', description: "Our classic Margherita pizza features fresh mozzarella cheese, garden-fresh basil leaves, and our signature tomato sauce on a perfectly crispy wood-fired crust." },
  //   { id: 2, name: "Pasta Carbonara", price: 150000, image: '/assets/images/foodImage/anh-nguyen-kcA-c3f_3FE-unsplash.jpg', description: "Our classic Margherita pizza features fresh mozzarella cheese, garden-fresh basil leaves, and our signature tomato sauce on a perfectly crispy wood-fired crust." },
  //   { id: 3, name: "Margherita Pizza", price: 150000, image: '/assets/images/foodImage/anh-nguyen-kcA-c3f_3FE-unsplash.jpg', description: "Our classic Margherita pizza features fresh mozzarella cheese, garden-fresh basil leaves, and our signature tomato sauce on a perfectly crispy wood-fired crust." }
  // ];
  // گرفتن لیست غذاها
  const fetchFoods = async () => {
    const res = await fetch("/api/foods");
    const data = await res.json();
    console.log(data)
    setFoods(data);
  };
  useEffect(() => {
    fetchFoods();
  }, []);
  // فیلتر کردن غذاها
  const filteredFoods = selectedCategory
    ? foods.filter(food => food.category === selectedCategory)
    : foods;

     // اضافه کردن آیتم به سبد خرید
  const addToCart = (food) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === food.id);
      if (existing) {
        return prev.map(item =>
          item.id === food.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...food, quantity: 1 }];
    });
  };

  // تغییر تعداد آیتم‌ها
  const updateQuantity = (id, amount) => {
    setCartItems(prev =>
      prev
        .map(item =>
          item.id === id ? { ...item, quantity: item.quantity + amount } : item
        )
        .filter(item => item.quantity > 0) // حذف اگه صفر شد
    );
  };

  return (
    <div className={styles.bodyy}>
        <img className={styles.qavamHeaderImg} src='/assets/images/logo/qavamHeaderPoster2.png'/>
        <MenuCategoryButtons onSelectCategory={setSelectedCategory}>
          
        </MenuCategoryButtons>

         {/* لیست غذاها */}
      {filteredFoods.length > 0 ? (
        filteredFoods.map(food => (
          <FoodItem
            key={food.id}
            food={food}
            onClick={() => setSelectedFood(food)}
            onAddToCart={addToCart} // 🔥 اضافه شد
          />
        ))
      ) : (
        <p className={styles.noItemsText}>
          آیتمی موجود نیست، لطفاً دسته دیگری انتخاب کنید.
        </p>
      )}

        <NoteBook 
  cartItems={cartItems} 
  onToggleCart={() => setIsCartOpen(!isCartOpen)} 
/>
        {/* مودال */}
      <FoodModal food={selectedFood} onClose={() => setSelectedFood(null)} />

        {/* سایدبار سبد خرید */}
      <CartSidebar
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        updateQuantity={updateQuantity}
      />
        
    </div>
  )
}
