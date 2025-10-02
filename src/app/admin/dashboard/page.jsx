// "use client";
// import { useEffect, useState } from "react";
// import styles from "@/app/admin/dashboard/dashboard.module.css"

// export default function AdminDashboard() {
  
//   const [foods, setFoods] = useState([]);
//   const [newFood, setNewFood] = useState({ name: "",en_name: "", price: "", image: "" , description :"",en_description :"",category :""});

//   // گرفتن لیست غذاها
//   const fetchFoods = async () => {
//     const res = await fetch("/api/foods");
//     const data = await res.json();
//     setFoods(data);
//   };

//   useEffect(() => {
//     fetchFoods();
//   }, []);

//   // افزودن غذا
//   async function addFood() {
//   const formData = new FormData();
//   formData.append("name", newFood.name);
//   formData.append("en_name", newFood.en_name);
//   formData.append("price", newFood.price);
//   formData.append("description", newFood.description || "");
//   formData.append("en_description", newFood.en_description || "");
//   formData.append("category", newFood.category);
//   formData.append("image", newFood.image); // فایل واقعی

//   const res = await fetch("/api/foods", {
//     method: "POST",
//     body: formData, // دیگه JSON نیست
//   });

//   if (res.ok) {
//     alert("غذا اضافه شد ✅");
//     fetchFoods();
//     // اینجا می‌تونی foods رو دوباره از سرور بگیری و لیست رو آپدیت کنی
//     setNewFood({
//       name: "",
//       en_name: "",
//       price: "",
//       description: "",
//       en_description: "",
//       category: "",
//       image: null,
//     });
//     setPreview(null); // پیش‌نمایش هم پاک میشه
//   } else {
//     alert("خطا در افزودن غذا ❌");
//   }
// }
// const [preview, setPreview] = useState(null);

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setNewFood({ ...newFood, image: file });
//       setPreview(URL.createObjectURL(file)); // ساخت آدرس موقت برای پیش‌نمایش
//     }
//   };

//   // حذف غذا
//   const deleteFood = async (id) => {
//     await fetch(`/api/foods/${id}`, { method: "DELETE" });
//     fetchFoods();
//   };

//   // ویرایش غذا
//   const [highlightedId, setHighlightedId] = useState(null);
//   const updateFood = async (id, updated) => {
//     await fetch(`/api/foods/${id}`, {
//       method: "PUT",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(updated),
//     });
//     fetchFoods();
//   };
//   const [selectedCategory, setSelectedCategory] = useState("all");

//   const filteredFoods = selectedCategory === "all"
//   ? foods
//   : foods.filter((food) => food.category === selectedCategory);
//   return (
//     <div className={`${styles.colorText} ${styles.mainContainerDashboard}`} style={{ padding: "2rem" }}>
//       <h2>مدیریت غذاها</h2>
//       <div className={styles.addFoodsContainer} >
      

//       {/* فرم افزودن غذا */}
//       <h3>افزودن غذا</h3>
//       <br/>
//       <input
//         type="text"
//         placeholder="نام غذا"
//         value={newFood.name}
//         onChange={(e) => setNewFood({ ...newFood, name: e.target.value })}
//       />
//       <input
//         type="text"
//         placeholder="name of food"
//         value={newFood.en_name}
//         onChange={(e) => setNewFood({ ...newFood, en_name: e.target.value })}
//       />
//       <textarea
      
//         type="text"
//         placeholder="محتویات غذا"
//         value={newFood.description}
//         onChange={(e) => setNewFood({ ...newFood, description: e.target.value })}
//       />
//       <textarea
//         type="text"
//         placeholder=" Food contents"
//         value={newFood.en_description}
//         onChange={(e) => setNewFood({ ...newFood, en_description: e.target.value })}
//       />
//       <input
//         type="text"
//         placeholder="قیمت"
//         value={newFood.price}
//         onChange={(e) => setNewFood({ ...newFood, price: e.target.value })}
//       />
//       {/* <input
//         type="file"
//         accept="image/*"
//         onChange={(e) => setNewFood({ ...newFood, image: e.target.files[0] })}
//       /> */}
//       {/* فیلد کشویی دسته‌بندی */}
//       <select
//         value={newFood.category}
//         onChange={(e) => setNewFood({ ...newFood, category: e.target.value })}
//       >
//         <option value="">انتخاب دسته‌بندی</option>
//         <option value="persianFood">غذای ایرانی</option>
//         <option value="seaFood">غذای دریایی</option>
//         <option value="fastFood"> فست فود</option>
//         <option value="appetizer">پیش غذا</option>
//         <option value="dessert">دسر</option>
//         <option value="drink">نوشیدنی</option>
//       </select>
      
//       <input type="file" accept="image/*" onChange={handleFileChange} />
//       {/* نمایش پیش‌نمایش تصویر */}
//       {preview && (
//         <div>
//           <p>پیش‌نمایش تصویر:</p>
//           <img
//             src={preview}
//             alt="preview"
//             style={{ width: "150px", borderRadius: "8px", marginTop: "10px" }}
//           />
//         </div>
//       )}
//       <button onClick={addFood}>افزودن</button>
//       </div>

//       {/* لیست غذاها */}
//       <div className={styles.foodsListContainer}>
//       <h3>لیست غذاها</h3>
//       <ul>
//         <h3>فیلتر دسته‌بندی</h3>
//     <select
//       value={selectedCategory}
//       onChange={(e) => setSelectedCategory(e.target.value)}
//     >
//       <option value="all">همه</option>
//       <option value="persianFood">غذای ایرانی</option>
//       <option value="seaFood">غذای دریایی</option>
//       <option value="fastFood">فست فود</option>
//       <option value="appetizer">پیش غذا</option>
//       <option value="dessert">دسر</option>
//       <option value="drink">نوشیدنی</option>
//     </select>
        
//         <li className={styles.titleLi}>
//           <h3>تصویر</h3>
//           <h3>نام فارسی</h3>
//           <h3>نام انگلیسی</h3>
//           <h3>توضیحات فارسی</h3>
//           <h3>توضیحات انگلیسی</h3>
//           <h3>قیمت</h3>
//           <h3>دسته بندی</h3>
//           <h3>تنظیمات</h3>
//         </li>
//   {foods.map((food) => (
    
//     <li key={food.id}>
//       <div className={`${styles.foodItem} ${styles.foodRow} ${highlightedId === food.id ? styles.highlight : ""}`}>
//         {/* پیش نمایش عکس */}
//         <img src={food.previewImage || food.image} alt={food.name} width="50" />
//         <br/>

//         {/* فیلدهای قابل ویرایش */}
//         <input
//           className={styles.faNameFood}
//           type="text"
//           value={food.name}
//           onChange={(e) =>
//             setFoods((prev) =>
//               prev.map((f) =>
//                 f.id === food.id ? { ...f, name: e.target.value } : f
//               )
//             )
//           }
//         />
//         <input
//         className={styles.faNameFood}
//           type="text"
//           value={food["en_name"]}
//           onChange={(e) =>
//             setFoods((prev) =>
//               prev.map((f) =>
//                 f.id === food.id ? { ...f, "en_name": e.target.value } : f
//               )
//             )
//           }
//         />
//         <br/>
//         <textarea
//           className={`${styles.descriptionFood} ${styles.faDescription}`}
//           value={food.description}
//           onChange={(e) =>
//             setFoods((prev) =>
//               prev.map((f) =>
//                 f.id === food.id ? { ...f, description: e.target.value } : f
//               )
//             )
//           }
//         />
//         <textarea
//           className={styles.descriptionFood}
//           value={food["en_description"]}
//           onChange={(e) =>
//             setFoods((prev) =>
//               prev.map((f) =>
//                 f.id === food.id ? { ...f, "en_description": e.target.value } : f
//               )
//             )
//           }
//         />
//         <br/>
//         <input
//           className={styles.priceFood}
//           type="number"
//           value={food.price}
//           onChange={(e) =>
//             setFoods((prev) =>
//               prev.map((f) =>
//                 f.id === food.id ? { ...f, price: e.target.value } : f
//               )
//             )
//           }
//         />
//         {/* فیلد کشویی دسته‌بندی */}
//       <select
//         value={food.category || ""}
//     onChange={(e) =>
//     setFoods((prev) =>
//       prev.map((f) =>
//         f.id === food.id ? { ...f, category: e.target.value } : f
//       )
//     )
//   }
//       >
//         <option value=""> {food.category}</option>
//         <option value="persianFood">غذای ایرانی</option>
//         <option value="seaFood">غذای دریایی</option>
//         <option value="fastFood"> فست فود</option>
//         <option value="appetizer">پیش غذا</option>
//         <option value="dessert">دسر</option>
//         <option value="drink">نوشیدنی</option>
//       </select>

//         {/* تغییر عکس */}
//         <label for="file">تغییر تصویر</label>
//         <input
//           className={styles.chooseFile}
//           id="file"
//           type="file"
//           accept="image/*"
//           onChange={(e) => {
//             const file = e.target.files[0];
//             if (file) {
//               const preview = URL.createObjectURL(file);
//               setFoods((prev) =>
//                 prev.map((f) =>
//                   f.id === food.id
//                     ? { ...f, newImage: file, previewImage: preview }
//                     : f
//                 )
//               );
//             }
//           }}
//         />

//         {/* دکمه‌ها */}
//         <div className={styles.buttonsContainer}>
//           <button onClick={() => deleteFood(food.id)}>❌ حذف</button>
//           <button
//             onClick={() => {
//               const formData = new FormData();
//               formData.append("name", food.name);
//               formData.append("en_name", food["en_name"]);
//               formData.append("description", food.description);
//               formData.append("en_description", food["en_description"]);
//               formData.append("category", food.category);
//               formData.append("price", food.price);

//               if (food.newImage) {
//                 formData.append("image", food.newImage);
//               }

//               fetch(`/api/foods/${food.id}`, {
                
//                 method: "PUT",
//                 body: formData,
//               }).then(async (res) => {
//                if (res.ok) {
//                // می‌تونی مستقیم از state مقدار جدید رو نگه داری
//             setFoods((prev) =>
//             prev.map((f) =>
//            f.id === food.id ? { ...f, ...Object.fromEntries(formData) } : f
//       )
//     );
//     setHighlightedId(food.id); // آیتم ویرایش‌شده
//   }
// });
//             }}
//           >
//             💾 ذخیره تغییرات
//           </button>
//         </div>
//       </div>
//     </li>
//   ))}
// </ul>
//       {/* <ul>
//         {foods.map((food) => (
//           <li key={food.id}>
//             <img src={food.image} alt={food.name} width="50" />
//             {food.name} - {food.price} تومان
//             <div className={styles.addOrRemoveBtn}>
//             <button onClick={() => deleteFood(food.id)}>❌ حذف</button>
//             <button
//               onClick={() =>
//                 updateFood(food.id, {
//                   name: prompt("نام جدید:", food.name),
//                   price: prompt("قیمت جدید:", food.price),
//                   image: prompt("تصویر جدید:", food.image),
//                 })
//               }
//             >
//               ✏️ ویرایش
//             </button>
//             </div>
//           </li>
//         ))}
//       </ul> */}
//       </div>
//     </div>
//   );
// }


// "use client";
// import { useEffect, useState } from "react";
// import styles from "@/app/admin/dashboard/dashboard.module.css"

// export default function AdminDashboard() {
//   const [foods, setFoods] = useState([]);
//   const [newFood, setNewFood] = useState({
//     name: "",
//     en_name: "",
//     price: "",
//     image: "",
//     description: "",
//     en_description: "",
//     category: "",
//   });

//   const [preview, setPreview] = useState(null);
//   const [highlightedId, setHighlightedId] = useState(null);
//   const [selectedCategory, setSelectedCategory] = useState("all");

//   // گرفتن لیست غذاها
//   const fetchFoods = async () => {
//     const res = await fetch("/api/foods");
//     const data = await res.json();
//     setFoods(data);
//   };

//   useEffect(() => {
//     fetchFoods();
//   }, []);

//   // افزودن غذا
//   async function addFood() {
//     const formData = new FormData();
//     formData.append("name", newFood.name);
//     formData.append("en_name", newFood.en_name);
//     formData.append("price", newFood.price);
//     formData.append("description", newFood.description || "");
//     formData.append("en_description", newFood.en_description || "");
//     formData.append("category", newFood.category);
//     formData.append("image", newFood.image);

//     const res = await fetch("/api/foods", {
//       method: "POST",
//       body: formData,
//     });

//     if (res.ok) {
//       alert("غذا اضافه شد ✅");
//       fetchFoods();
//       setNewFood({
//         name: "",
//         en_name: "",
//         price: "",
//         description: "",
//         en_description: "",
//         category: "",
//         image: null,
//       });
//       setPreview(null);
//     } else {
//       alert("خطا در افزودن غذا ❌");
//     }
//   }

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setNewFood({ ...newFood, image: file });
//       setPreview(URL.createObjectURL(file));
//     }
//   };

//   // حذف غذا
//   const deleteFood = async (id) => {
//     await fetch(`/api/foods/${id}`, { method: "DELETE" });
//     fetchFoods();
//   };

//   // ویرایش غذا
//   const updateFood = async (id, updated) => {
//     await fetch(`/api/foods/${id}`, {
//       method: "PUT",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(updated),
//     });
//     fetchFoods();
//   };

//   // فیلتر دسته‌بندی
//   const filteredFoods =
//     selectedCategory === "all"
//       ? foods
//       : foods.filter((food) => food.category === selectedCategory);

//   return (
//     <div
//       className={`${styles.colorText} ${styles.mainContainerDashboard}`}
//       style={{ padding: "2rem" }}
//     >
//       <h2>مدیریت غذاها</h2>

//       {/* فرم افزودن غذا */}
//       <div className={styles.addFoodsContainer}>
//         <h3>افزودن غذا</h3>
//         <br />
//         <input
//           type="text"
//           placeholder="نام غذا"
//           value={newFood.name}
//           onChange={(e) => setNewFood({ ...newFood, name: e.target.value })}
//         />
//         <input
//           type="text"
//           placeholder="name of food"
//           value={newFood.en_name}
//           onChange={(e) => setNewFood({ ...newFood, en_name: e.target.value })}
//         />
//         <textarea
//           placeholder="محتویات غذا"
//           value={newFood.description}
//           onChange={(e) =>
//             setNewFood({ ...newFood, description: e.target.value })
//           }
//         />
//         <textarea
//           placeholder="Food contents"
//           value={newFood.en_description}
//           onChange={(e) =>
//             setNewFood({ ...newFood, en_description: e.target.value })
//           }
//         />
//         <input
//           type="text"
//           placeholder="قیمت"
//           value={newFood.price}
//           onChange={(e) => setNewFood({ ...newFood, price: e.target.value })}
//         />

//         {/* دسته‌بندی */}
//         <select
//           value={newFood.category}
//           onChange={(e) => setNewFood({ ...newFood, category: e.target.value })}
//         >
//           <option value="">انتخاب دسته‌بندی</option>
//           <option value="persianFood">غذای ایرانی</option>
//           <option value="seaFood">غذای دریایی</option>
//           <option value="fastFood">فست فود</option>
//           <option value="appetizer">پیش غذا</option>
//           <option value="dessert">دسر</option>
//           <option value="drink">نوشیدنی</option>
//         </select>

//         {/* انتخاب تصویر */}
//         <input type="file" accept="image/*" onChange={handleFileChange} />
//         {preview && (
//           <div>
//             <p>پیش‌نمایش تصویر:</p>
//             <img
//               src={preview}
//               alt="preview"
//               style={{ width: "150px", borderRadius: "8px", marginTop: "10px" }}
//             />
//           </div>
//         )}
//         <button onClick={addFood}>افزودن</button>
//       </div>

//       {/* لیست غذاها */}
//       <div className={styles.foodsListContainer}>
//         <h3>لیست غذاها</h3>

//         {/* فیلتر دسته‌بندی */}
//         <h3>فیلتر دسته‌بندی</h3>
//         <select
//           value={selectedCategory}
//           onChange={(e) => setSelectedCategory(e.target.value)}
//         >
//           <option value="all">همه</option>
//           <option value="persianFood">غذای ایرانی</option>
//           <option value="seaFood">غذای دریایی</option>
//           <option value="fastFood">فست فود</option>
//           <option value="appetizer">پیش غذا</option>
//           <option value="dessert">دسر</option>
//           <option value="drink">نوشیدنی</option>
//         </select>

//         <ul>
//           <li className={styles.titleLi}>
//             <h3>تصویر</h3>
//             <h3>نام فارسی</h3>
//             <h3>نام انگلیسی</h3>
//             <h3>توضیحات فارسی</h3>
//             <h3>توضیحات انگلیسی</h3>
//             <h3>قیمت</h3>
//             <h3>دسته بندی</h3>
//             <h3>تنظیمات</h3>
//           </li>

//           {filteredFoods.map((food) => (
//             <li key={food.id}>
//               <div
//                 className={`${styles.foodItem} ${styles.foodRow} ${
//                   highlightedId === food.id ? styles.highlight : ""
//                 }`}
//               >
//                 {/* عکس */}
//                 <img
//                   src={food.previewImage || food.image}
//                   alt={food.name}
//                   width="50"
//                 />
//                 <br />

//                 {/* نام‌ها */}
//                 <input
//                   className={styles.faNameFood}
//                   type="text"
//                   value={food.name}
//                   onChange={(e) =>
//                     setFoods((prev) =>
//                       prev.map((f) =>
//                         f.id === food.id ? { ...f, name: e.target.value } : f
//                       )
//                     )
//                   }
//                 />
//                 <input
//                   className={styles.faNameFood}
//                   type="text"
//                   value={food["en_name"]}
//                   onChange={(e) =>
//                     setFoods((prev) =>
//                       prev.map((f) =>
//                         f.id === food.id
//                           ? { ...f, en_name: e.target.value }
//                           : f
//                       )
//                     )
//                   }
//                 />
//                 <br />

//                 {/* توضیحات */}
//                 <textarea
//                   className={`${styles.descriptionFood} ${styles.faDescription}`}
//                   value={food.description}
//                   onChange={(e) =>
//                     setFoods((prev) =>
//                       prev.map((f) =>
//                         f.id === food.id
//                           ? { ...f, description: e.target.value }
//                           : f
//                       )
//                     )
//                   }
//                 />
//                 <textarea
//                   className={styles.descriptionFood}
//                   value={food["en_description"]}
//                   onChange={(e) =>
//                     setFoods((prev) =>
//                       prev.map((f) =>
//                         f.id === food.id
//                           ? { ...f, en_description: e.target.value }
//                           : f
//                       )
//                     )
//                   }
//                 />
//                 <br />

//                 {/* قیمت */}
//                 <input
//                   className={styles.priceFood}
//                   type="number"
//                   value={food.price}
//                   onChange={(e) =>
//                     setFoods((prev) =>
//                       prev.map((f) =>
//                         f.id === food.id
//                           ? { ...f, price: e.target.value }
//                           : f
//                       )
//                     )
//                   }
//                 />

//                 {/* دسته‌بندی */}
//                 <select
//                   value={food.category || ""}
//                   onChange={(e) =>
//                     setFoods((prev) =>
//                       prev.map((f) =>
//                         f.id === food.id
//                           ? { ...f, category: e.target.value }
//                           : f
//                       )
//                     )
//                   }
//                 >
//                   <option value=""> {food.category}</option>
//                   <option value="persianFood">غذای ایرانی</option>
//                   <option value="seaFood">غذای دریایی</option>
//                   <option value="fastFood">فست فود</option>
//                   <option value="appetizer">پیش غذا</option>
//                   <option value="dessert">دسر</option>
//                   <option value="drink">نوشیدنی</option>
//                 </select>

//                 {/* تغییر عکس */}
//                 <label htmlFor={`file-${food.id}`}>تغییر تصویر</label>
//                 <input
//                   className={styles.chooseFile}
//                   id={`file-${food.id}`}
//                   type="file"
//                   accept="image/*"
//                   onChange={(e) => {
//                     const file = e.target.files[0];
//                     if (file) {
//                       const preview = URL.createObjectURL(file);
//                       setFoods((prev) =>
//                         prev.map((f) =>
//                           f.id === food.id
//                             ? { ...f, newImage: file, previewImage: preview }
//                             : f
//                         )
//                       );
//                     }
//                   }}
//                 />

//                 {/* دکمه‌ها */}
//                 <div className={styles.buttonsContainer}>
//                   <button onClick={() => deleteFood(food.id)}>❌ حذف</button>
//                   <button
//                     onClick={() => {
//                       const formData = new FormData();
//                       formData.append("name", food.name);
//                       formData.append("en_name", food.en_name);
//                       formData.append("description", food.description);
//                       formData.append("en_description", food.en_description);
//                       formData.append("category", food.category);
//                       formData.append("price", food.price);

//                       if (food.newImage) {
//                         formData.append("image", food.newImage);
//                       }

//                       fetch(`/api/foods/${food.id}`, {
//                         method: "PUT",
//                         body: formData,
//                       }).then(async (res) => {
//                         if (res.ok) {
//                           setFoods((prev) =>
//                             prev.map((f) =>
//                               f.id === food.id
//                                 ? { ...f, ...Object.fromEntries(formData) }
//                                 : f
//                             )
//                           );
//                           setHighlightedId(food.id);
//                         }
//                       });
//                     }}
//                   >
//                     💾 ذخیره تغییرات
//                   </button>
//                 </div>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }
"use client";
import { useEffect, useState } from "react";
import styles from "@/app/admin/dashboard/dashboard.module.css";

export default function AdminDashboard() {
  const [foods, setFoods] = useState([]);
  const [newFood, setNewFood] = useState({
    name: "",
    en_name: "",
    price: "",
    description: "",
    en_description: "",
    category: "",
    image: null,
  });
  const [preview, setPreview] = useState(null);
  const [highlightedId, setHighlightedId] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState(""); // 🔎 جستجو

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
    formData.append("category", newFood.category);
    formData.append("image", newFood.image);

    const res = await fetch("/api/foods", {
      method: "POST",
      body: formData,
    });

    if (res.ok) {
      alert("غذا اضافه شد ✅");
      fetchFoods();
      setNewFood({
        name: "",
        en_name: "",
        price: "",
        description: "",
        en_description: "",
        category: "",
        image: null,
      });
      setPreview(null);
    } else {
      alert("خطا در افزودن غذا ❌");
    }
  }

  // مدیریت تغییر فایل (پیش‌نمایش)
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewFood({ ...newFood, image: file });
      setPreview(URL.createObjectURL(file));
    }
  };

  // حذف غذا
  const deleteFood = async (id) => {
    await fetch(`/api/foods/${id}`, { method: "DELETE" });
    fetchFoods();
  };

  // لیست غذاها بر اساس دسته‌بندی و جستجو
  const filteredFoods = foods.filter((food) => {
    const matchCategory =
      selectedCategory === "all" || food.category === selectedCategory;
    const matchSearch =
      food.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      food.en_name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div
      className={`${styles.colorText} ${styles.mainContainerDashboard}`}
      style={{ padding: "2rem" }}
    >
      <h2>مدیریت غذاها</h2>

      {/* فرم افزودن غذا */}
      <div className={styles.addFoodsContainer}>
        <h3>افزودن غذا</h3>
        <br />
        <input
          type="text"
          placeholder="نام غذا"
          value={newFood.name}
          onChange={(e) => setNewFood({ ...newFood, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Food name"
          value={newFood.en_name}
          onChange={(e) => setNewFood({ ...newFood, en_name: e.target.value })}
        />
        <textarea
          placeholder="محتویات غذا"
          value={newFood.description}
          onChange={(e) =>
            setNewFood({ ...newFood, description: e.target.value })
          }
        />
        <textarea
          placeholder="Food contents"
          value={newFood.en_description}
          onChange={(e) =>
            setNewFood({ ...newFood, en_description: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="قیمت"
          value={newFood.price}
          onChange={(e) => setNewFood({ ...newFood, price: e.target.value })}
        />

        {/* انتخاب دسته‌بندی */}
        <select
          value={newFood.category}
          onChange={(e) => setNewFood({ ...newFood, category: e.target.value })}
        >
          <option value="">انتخاب دسته‌بندی</option>
          <option value="persianFood">غذای ایرانی</option>
          <option value="seaFood">غذای دریایی</option>
          <option value="fastFood">فست فود</option>
          <option value="appetizer">پیش غذا</option>
          <option value="dessert">دسر</option>
          <option value="drink">نوشیدنی</option>
        </select>

        <input type="file" accept="image/*" onChange={handleFileChange} />
        {preview && (
          <div>
            <p>پیش‌نمایش تصویر:</p>
            <img
              src={preview}
              alt="preview"
              style={{ width: "150px", borderRadius: "8px", marginTop: "10px" }}
            />
          </div>
        )}
        <button onClick={addFood}>➕ افزودن</button>
      </div>

      {/* لیست غذاها */}
      <div className={styles.foodsListContainer}>
        <h3>لیست غذاها</h3>
        <div className={styles.filteredSelectorContainer}>
          <div className={styles.categoryField}>
        {/* فیلتر دسته‌بندی */}
        <h4>فیلتر دسته‌بندی</h4>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="all">همه</option>
          <option value="persianFood">غذای ایرانی</option>
          <option value="seaFood">غذای دریایی</option>
          <option value="fastFood">فست فود</option>
          <option value="appetizer">پیش غذا</option>
          <option value="dessert">دسر</option>
          <option value="drink">نوشیدنی</option>
        </select>
          </div>

          <div className={styles.searchField}>
        {/* فیلتر جستجو */}
        <h4>جستجو</h4>
        <input
          type="text"
          placeholder="جستجو بر اساس نام..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        </div>
          </div>
        <ul >
          {/* <div className={styles.titleLiContainer}>
            <li>تصویر</li>
            <li>نام فارسی</li>
            <li>نام انگلیسی</li>
            <li>توضیحات فارسی</li>
            <li>توضیحات انگلیسی</li>
            <li>قیمت</li>
            <li>دسته‌بندی</li>
            <li>تنظیمات</li>
          </div> */}

          {filteredFoods.map((food) => (
            <li key={food.id} className={styles.foodsListContainer}>
              <div
                className={`${styles.foodItem} ${styles.foodRow} ${
                  highlightedId === food.id ? styles.highlight : ""
                }`}
              >
                {/* تصویر */}
                <img
                  src={food.previewImage || food.image}
                  alt={food.name}
                  width="50"
                />

                {/* نام فارسی */}
                <input
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

                {/* نام انگلیسی */}
                <input
                  type="text"
                  value={food.en_name}
                  onChange={(e) =>
                    setFoods((prev) =>
                      prev.map((f) =>
                        f.id === food.id
                          ? { ...f, en_name: e.target.value }
                          : f
                      )
                    )
                  }
                />

                {/* توضیحات فارسی */}
                <textarea
                  value={food.description}
                  onChange={(e) =>
                    setFoods((prev) =>
                      prev.map((f) =>
                        f.id === food.id
                          ? { ...f, description: e.target.value }
                          : f
                      )
                    )
                  }
                />

                {/* توضیحات انگلیسی */}
                <textarea
                  value={food.en_description}
                  onChange={(e) =>
                    setFoods((prev) =>
                      prev.map((f) =>
                        f.id === food.id
                          ? { ...f, en_description: e.target.value }
                          : f
                      )
                    )
                  }
                />

                {/* قیمت */}
                <input
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

                {/* دسته‌بندی */}
                <select
                  value={food.category || ""}
                  onChange={(e) =>
                    setFoods((prev) =>
                      prev.map((f) =>
                        f.id === food.id
                          ? { ...f, category: e.target.value }
                          : f
                      )
                    )
                  }
                >
                  <option value=""> {food.category}</option>
                  <option value="persianFood">غذای ایرانی</option>
                  <option value="seaFood">غذای دریایی</option>
                  <option value="fastFood">فست فود</option>
                  <option value="appetizer">پیش غذا</option>
                  <option value="dessert">دسر</option>
                  <option value="drink">نوشیدنی</option>
                </select>

                {/* تغییر تصویر */}
                <label htmlFor={`file-${food.id}`}>📷 تغییر تصویر</label>
                <input
                  id={`file-${food.id}`}
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
                <div className={styles.buttonsContainer}>
                  <button onClick={() => deleteFood(food.id)}>❌ حذف</button>
                  <button
                    onClick={() => {
                      const formData = new FormData();
                      formData.append("name", food.name);
                      formData.append("en_name", food.en_name);
                      formData.append("description", food.description);
                      formData.append("en_description", food.en_description);
                      formData.append("category", food.category);
                      formData.append("price", food.price);

                      if (food.newImage) {
                        formData.append("image", food.newImage);
                      }

                      fetch(`/api/foods/${food.id}`, {
                        method: "PUT",
                        body: formData,
                      }).then((res) => {
                        if (res.ok) {
                          setFoods((prev) =>
                            prev.map((f) =>
                              f.id === food.id
                                ? { ...f, ...Object.fromEntries(formData) }
                                : f
                            )
                          );
                          setHighlightedId(food.id);
                        }
                      });
                    }}
                  >
                    💾 ذخیره تغییرات
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

