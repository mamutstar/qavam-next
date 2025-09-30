"use client";
import { redirect } from "next/navigation";

export default function AdminRoot() {
  redirect("/admin/login");
}
// import { useEffect, useState } from "react";

// export default function AdminPage() {
//   const [foods, setFoods] = useState([]);
//   const [newFood, setNewFood] = useState({ name: "", price: "", description: "", image: "" });
//   const [file, setFile] = useState(null);
//   const [editFood, setEditFood] = useState(null);

//   useEffect(() => {
//     fetchFoods();
//   }, []);

//   const fetchFoods = async () => {
//     const res = await fetch("/api/foods");
//     const data = await res.json();
//     setFoods(data);
//   };

//   // آپلود عکس
//   const handleFileUpload = async () => {
//     const formData = new FormData();
//     formData.append("file", file);

//     const res = await fetch("/api/upload", { method: "POST", body: formData });
//     const data = await res.json();

//     if (res.ok) {
//       if (editFood) {
//         setEditFood((prev) => ({ ...prev, image: data.url }));
//       } else {
//         setNewFood((prev) => ({ ...prev, image: data.url }));
//       }
//     } else {
//       alert("Upload failed: " + data.error);
//     }
//   };

//   // افزودن غذا
//   const addFood = async () => {
//     await fetch("/api/foods", {
//       method: "POST",
//       body: JSON.stringify(newFood),
//     });
//     setNewFood({ name: "", price: "", description: "", image: "" });
//     fetchFoods();
//   };

//   // حذف غذا
//   const deleteFood = async (id) => {
//     await fetch(`/api/foods/${id}`, { method: "DELETE" });
//     fetchFoods();
//   };

//   // شروع ویرایش
//   const startEdit = (food) => {
//     setEditFood(food);
//   };

//   // ذخیره ویرایش
//   const updateFood = async () => {
//     await fetch(`/api/foods/${editFood.id}`, {
//       method: "PUT",
//       body: JSON.stringify(editFood),
//     });
//     setEditFood(null);
//     fetchFoods();
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h1>Food Management</h1>

//       <h3>{editFood ? "Edit Food" : "Add Food"}</h3>
//       <input
//         placeholder="Name"
//         value={editFood ? editFood.name : newFood.name}
//         onChange={(e) =>
//           editFood
//             ? setEditFood({ ...editFood, name: e.target.value })
//             : setNewFood({ ...newFood, name: e.target.value })
//         }
//       />
//       <input
//         placeholder="Price"
//         value={editFood ? editFood.price : newFood.price}
//         onChange={(e) =>
//           editFood
//             ? setEditFood({ ...editFood, price: e.target.value })
//             : setNewFood({ ...newFood, price: e.target.value })
//         }
//       />
//       <input
//         placeholder="Description"
//         value={editFood ? editFood.description : newFood.description}
//         onChange={(e) =>
//           editFood
//             ? setEditFood({ ...editFood, description: e.target.value })
//             : setNewFood({ ...newFood, description: e.target.value })
//         }
//       />

//       <input type="file" onChange={(e) => setFile(e.target.files[0])} />
//       <button onClick={handleFileUpload}>Upload Image</button>

//       {editFood ? (
//         <button onClick={updateFood}>Update Food</button>
//       ) : (
//         <button onClick={addFood}>Add Food</button>
//       )}

//       <h3>Food List</h3>
//       <ul>
//         {foods.map((food) => (
//           <li key={food.id} style={{ margin: "10px 0" }}>
//             {food.name} - ${food.price}
//             {food.image && <img src={food.image} alt={food.name} width="50" />}
//             <button onClick={() => startEdit(food)}>Edit</button>
//             <button onClick={() => deleteFood(food.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
