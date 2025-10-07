'use client';
import React, { useEffect, useState } from 'react';
import styles from './FoodMenu.module.css';
import QavamHeaderPoster from '../../../public/assets/images/logo/qavamHeaderPoster2.png';
import MenuCategoryButtons from '../../components/MenuCategoryButton';
import FoodItem from '../../components/FoodItem';
import NoteBook from '../../components/BottomNoteBook';
import FoodModal from "../../components/FoodModal";
import CartSidebar from "../../components/CartSidebar";

export default function FoodMenu() {
  const [selectedFood, setSelectedFood] = useState(null);
  const [foods, setFoods] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  

  const [cart, setCart] = useState([]); // فقط همین
  const [isCartOpen, setIsCartOpen] = useState(false);
  

  // --- بارگذاری اولیه از localStorage ---
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // --- هر بار cart تغییر کرد ذخیره کن ---
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // گرفتن لیست غذاها
  const fetchFoods = async () => {
    const res = await fetch("/api/foods");
    const data = await res.json();
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
    setCart(prev => {
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
    setCart(prev =>
      prev
        .map(item =>
          item.id === id ? { ...item, quantity: item.quantity + amount } : item
        )
        .filter(item => item.quantity > 0) // حذف اگه صفر شد
    );
  };

  
  

  return (
    <div className={styles.bodyy}>
      {/* هدر */}
      <img
        className={styles.qavamHeaderImg}
        src='/assets/images/logo/qavamHeaderPoster3.png'
        alt="Header Poster"
      />

      {/* دسته‌بندی */}
      <MenuCategoryButtons onSelectCategory={setSelectedCategory} selectedCategory={selectedCategory} />
      <div className={styles.scrollOverflow}  >
      {/* لیست غذاها */}
      {filteredFoods.length > 0 ? (
        filteredFoods.map(food => (
          <FoodItem
            key={food.id}
            food={food}
            onClick={() => setSelectedFood(food)}
            onAddToCart={addToCart}
          />
        ))
      ) : (
        <p className={styles.noItemsText}>
          آیتمی موجود نیست، لطفاً دسته دیگری انتخاب کنید.
        </p>
      )}
        </div>
      {/* دکمه پایین صفحه */}
      <NoteBook
        itemCount={cart.reduce((sum, i) => sum + i.quantity, 0)}
        
        
        onToggleCart={() => setIsCartOpen(!isCartOpen)}
      />
      
       
      {/* مودال غذا */}
      <FoodModal 
      food={selectedFood} 
      onClose={() => setSelectedFood(null)}
      onAddToCart={addToCart}
      />

      {/* سایدبار سبد خرید */}
      <CartSidebar
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cart}
        updateQuantity={updateQuantity}
      />
    </div>
  );
  
}
