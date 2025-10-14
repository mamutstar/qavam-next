"use client";
import React, { useEffect, useState } from 'react';
import styles from './FoodMenu.module.css';

import MenuCategoryButtons from '../../components/MenuCategoryButton';
import FoodItem from '../../components/FoodItem';
import NoteBook from '../../components/BottomNoteBook';
import FoodModal from "../../components/FoodModal";
import CartSidebar from "../../components/CartSidebar";
import { Suspense } from "react";
import Head from "next/head";
import { useTransition } from "react";





export default function FoodMenu() {
  const [selectedFood, setSelectedFood] = useState(null);
  const [foods, setFoods] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  

  const [cart, setCart] = useState([]); // فقط همین
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const [isPending, startTransition] = useTransition();

  const handleSelectCategory = (category) => {
    // فوری برای تغییر استایل دکمه
    setSelectedCategory(category);

    // ترنزیشن برای محاسبات یا فیلتر
    startTransition(() => {
      // اینجا محاسبات یا فیلتر دیتا انجام میشه
      // مثلا fetch غذاها یا sort
      console.log("Filtering foods for:", category);
    });
  };

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
  // const fetchFoods = async () => {
  //   const res = await fetch("/api/foods");
  //   const data = await res.json();
  //   setFoods(data);
  // };

  // useEffect(() => {
  //   fetchFoods();
  // }, []);

  const fetchFoods = async () => {
  try {
    setLoading(true); // شروع لودینگ
    const res = await fetch("/api/foods"); // API خودت
    const data = await res.json();
    setFoods(data);  // ذخیره غذاها
  } catch (error) {
    console.error("خطا در گرفتن لیست غذاها:", error);
  } finally {
    setLoading(false); // پایان لودینگ
  }
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
    <>
    <Head>
        <title>منو رستوران قوام</title>
    </Head>
    <div className={styles.bodyy}>
      {/* هدر */}
      <img
        className={styles.qavamHeaderImg}
        src='/assets/images/logo/qavamHeaderPoster2.png'
        alt="Header Poster"
      />

      {/* دسته‌بندی */}
      <Suspense fallback={<div>در حال بارگذاری زبان...</div>}>
      <MenuCategoryButtons onSelectCategory={handleSelectCategory} selectedCategory={selectedCategory} />
      {isPending && <p>در حال بارگذاری غذاها...</p>}
      </Suspense>
      
 
      <div className={styles.scrollOverflow}  >
      {loading ? (  <div className={styles.loader}><img src='/assets/images/logo/lineVector.svg'/></div>
      ) : filteredFoods.length > 0 ? (
        filteredFoods.map(food => (
          <Suspense fallback={<div>در حال بارگذاری زبان...</div>}>
          <FoodItem
          className={styles.foodItemContainer}
            key={food.id}
            food={food}
            onClick={() => setSelectedFood(food)}
            onAddToCart={addToCart}
          />
          </Suspense>
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
      <Suspense fallback={<div>در حال بارگذاری زبان...</div>}>
      <FoodModal 
      food={selectedFood} 
      onClose={() => setSelectedFood(null)}
      onAddToCart={addToCart}
      />
      </Suspense>

      {/* سایدبار سبد خرید */}
      <Suspense fallback={<div>در حال بارگذاری زبان...</div>}>
      <CartSidebar
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cart}
        updateQuantity={updateQuantity}
      />
      </Suspense>
    </div>
    </>
  );
  
}
