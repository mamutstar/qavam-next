// import { NextResponse } from "next/server";
// import mysql from "mysql2/promise";

// async function connectDB() {
//   return await mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "qvqmnext",
//   });
// }

// export async function POST(req) {
//   const { username, password } = await req.json();
//   console.log("Username:", username);
//   console.log("Password:", password);
//   const db = await connectDB();
//   const [rows] = await db.execute(
//     "SELECT * FROM adminuser WHERE userName = ? AND password = ?",
//     [username, password]
//   );
//   await db.end();

//   if (rows.length === 0) {
//     return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
//   }
//  const user = rows[0];
  
//   // در حالت واقعی باید JWT یا کوکی بگذاری
//   const token = jwt.sign(
//         { id: user.id, username: user.userName },
//         "MY_SECRET_KEY",
//         { expiresIn: "1h" }
//       );

//       const res = NextResponse.json({ success: true });
//     res.cookies.set("token", token, {
//       httpOnly: true,
//       secure: process.env.NODE_ENV === "production",
      
//       maxAge: 60 * 60,
//       path: "/",
//     });
//   return res;
// }
"use client";
import { useState } from "react";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    if (res.ok) {
      window.location.href = "/admin"; // یا هر صفحه‌ای که میخوای
    } else {
      alert("نام کاربری یا رمز عبور اشتباه است");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button type="submit">Login</button>
    </form>
  );
}
