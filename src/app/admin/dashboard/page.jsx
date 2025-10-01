"use client";
import { useEffect, useState } from "react";
import styles from "@/app/admin/dashboard/dashboard.module.css"

export default function AdminDashboard() {
  const [foods, setFoods] = useState([]);
  const [newFood, setNewFood] = useState({ name: "",en_name: "", price: "", image: "" , description :"",en_description :""});

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
  async function addFood() {
  const formData = new FormData();
  formData.append("name", newFood.name);
  formData.append("en_name", newFood.en_name);
  formData.append("price", newFood.price);
  formData.append("description", newFood.description || "");
  formData.append("en_description", newFood.en_description || "");
  formData.append("image", newFood.image); // فایل واقعی

  const res = await fetch("/api/foods", {
    method: "POST",
    body: formData, // دیگه JSON نیست
  });

  if (res.ok) {
    alert("غذا اضافه شد ✅");
    // اینجا می‌تونی foods رو دوباره از سرور بگیری و لیست رو آپدیت کنی
  } else {
    alert("خطا در افزودن غذا ❌");
  }
}

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
    <div className={`${styles.colorText} ${styles.mainContainerDashboard}`} style={{ padding: "2rem" }}>
      <h2>مدیریت غذاها</h2>
      <div className={styles.addFoodsContainer} >
      

      {/* فرم افزودن غذا */}
      <h3>افزودن غذا</h3>
      <br/>
      <input
        type="text"
        placeholder="نام غذا"
        value={newFood.name}
        onChange={(e) => setNewFood({ ...newFood, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="name of food"
        value={newFood.en_name}
        onChange={(e) => setNewFood({ ...newFood, en_name: e.target.value })}
      />
      <textarea
      
        type="text"
        placeholder="محتویات غذا"
        value={newFood.description}
        onChange={(e) => setNewFood({ ...newFood, description: e.target.value })}
      />
      <textarea
        type="text"
        placeholder=" Food contents"
        value={newFood.en_description}
        onChange={(e) => setNewFood({ ...newFood, en_description: e.target.value })}
      />
      <input
        type="text"
        placeholder="قیمت"
        value={newFood.price}
        onChange={(e) => setNewFood({ ...newFood, price: e.target.value })}
      />
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setNewFood({ ...newFood, image: e.target.files[0] })}
      />
      <button onClick={addFood}>افزودن</button>
      </div>

      {/* لیست غذاها */}
      <div className={styles.foodsListContainer}>
      <h3>لیست غذاها</h3>
      <ul>
        <li className={styles.titleLi}>
          <h3>تصویر</h3>
          <h3>نام فارسی</h3>
          <h3>نام انگلیسی</h3>
          <h3>توضیحات فارسی</h3>
          <h3>توضیحات انگلیسی</h3>
          <h3>قیمت</h3>
          <h3>تنظیمات</h3>
        </li>
  {foods.map((food) => (
    <li key={food.id}>
      <div className={styles.foodItem}>
        {/* پیش نمایش عکس */}
        <img src={food.previewImage || food.image} alt={food.name} width="50" />
        <br/>

        {/* فیلدهای قابل ویرایش */}
        <input
          className={styles.faNameFood}
          type="text"
          value={food.name}
          onChange={(e) =>
            setFoods((prev) =>
              prev.map((f) =>
                f.id === food.id ? { ...f, name: e.target.value } : f
              )
            )
          }
        />
        <input
        className={styles.faNameFood}
          type="text"
          value={food["en_name"]}
          onChange={(e) =>
            setFoods((prev) =>
              prev.map((f) =>
                f.id === food.id ? { ...f, "en_name": e.target.value } : f
              )
            )
          }
        />
        <br/>
        <textarea
          className={`${styles.descriptionFood} ${styles.faDescription}`}
          value={food.description}
          onChange={(e) =>
            setFoods((prev) =>
              prev.map((f) =>
                f.id === food.id ? { ...f, description: e.target.value } : f
              )
            )
          }
        />
        <textarea
          className={styles.descriptionFood}
          value={food["en_description"]}
          onChange={(e) =>
            setFoods((prev) =>
              prev.map((f) =>
                f.id === food.id ? { ...f, "en_description": e.target.value } : f
              )
            )
          }
        />
        <br/>
        <input
          className={styles.priceFood}
          type="number"
          value={food.price}
          onChange={(e) =>
            setFoods((prev) =>
              prev.map((f) =>
                f.id === food.id ? { ...f, price: e.target.value } : f
              )
            )
          }
        />

        {/* تغییر عکس */}
        <label for="file">تغییر تصویر</label>
        <input
          id="file"
          type="file"
          accept="image/*"
          onChange={(e) => {
            const file = e.target.files[0];
            if (file) {
              const preview = URL.createObjectURL(file);
              setFoods((prev) =>
                prev.map((f) =>
                  f.id === food.id
                    ? { ...f, newImage: file, previewImage: preview }
                    : f
                )
              );
            }
          }}
        />

        {/* دکمه‌ها */}
        <div>
          <button onClick={() => deleteFood(food.id)}>❌ حذف</button>
          <button
            onClick={() => {
              const formData = new FormData();
              formData.append("name", food.name);
              formData.append("en_name", food["en_name"]);
              formData.append("description", food.description);
              formData.append("en_description", food["en_description"]);
              formData.append("price", food.price);

              if (food.newImage) {
                formData.append("image", food.newImage);
              }

              fetch(`/api/foods/${food.id}`, {
                method: "PUT",
                body: formData,
              }).then(() => fetchFoods());
            }}
          >
            💾 ذخیره تغییرات
          </button>
        </div>
      </div>
    </li>
  ))}
</ul>
      {/* <ul>
        {foods.map((food) => (
          <li key={food.id}>
            <img src={food.image} alt={food.name} width="50" />
            {food.name} - {food.price} تومان
            <div className={styles.addOrRemoveBtn}>
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
            </div>
          </li>
        ))}
      </ul> */}
      </div>
    </div>
  );
}
