"use client";
import { useEffect, useState } from "react";
import styles from "@/app/admin/dashboard/dashboard.module.css"

export default function AdminDashboard() {
  const [foods, setFoods] = useState([]);
  const [newFood, setNewFood] = useState({ name: "", price: "", image: "" });

  // گرفتن لیست غذاها
  const fetchFoods = async () => {
    const res = await fetch("/api/foods");
    const data = await res.json();
    setFoods(data);
  };

  useEffect(() => {
    fetchFoods();
  }, []);

  // افزودن غذا
  const addFood = async () => {
    await fetch("/api/foods", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newFood),
    });
    setNewFood({ name: "", price: "", image: "" });
    fetchFoods();
  };

  // حذف غذا
  const deleteFood = async (id) => {
    await fetch(`/api/foods/${id}`, { method: "DELETE" });
    fetchFoods();
  };

  // ویرایش غذا
  const updateFood = async (id, updated) => {
    await fetch(`/api/foods/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updated),
    });
    fetchFoods();
  };

  return (
    <div className={styles.colorText} style={{ padding: "2rem" }}>
      <h2>مدیریت غذاها</h2>

      {/* فرم افزودن غذا */}
      <h3>افزودن غذا</h3>
      <input
        type="text"
        placeholder="نام غذا"
        value={newFood.name}
        onChange={(e) => setNewFood({ ...newFood, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="قیمت"
        value={newFood.price}
        onChange={(e) => setNewFood({ ...newFood, price: e.target.value })}
      />
      <input
        type="text"
        placeholder="آدرس تصویر"
        value={newFood.image}
        onChange={(e) => setNewFood({ ...newFood, image: e.target.value })}
      />
      <button onClick={addFood}>افزودن</button>

      {/* لیست غذاها */}
      <h3>لیست غذاها</h3>
      <ul>
        {foods.map((food) => (
          <li key={food.id}>
            <img src={food.image} alt={food.name} width="50" />
            {food.name} - {food.price} تومان
            <button onClick={() => deleteFood(food.id)}>❌ حذف</button>
            <button
              onClick={() =>
                updateFood(food.id, {
                  name: prompt("نام جدید:", food.name),
                  price: prompt("قیمت جدید:", food.price),
                  image: prompt("تصویر جدید:", food.image),
                })
              }
            >
              ✏️ ویرایش
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
