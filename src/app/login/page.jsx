"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "@/app/login/loginPage.module.css";

export default function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    if (res.ok) {
      console.log("log shodeeeeeeeeeeeeeeee")
      router.push("/admin/dashboard"); // بعد از لاگین برو به داشبورد
    } else {
      setError("نام کاربری یا رمز اشتباه است");
    }
  };

  return (
    <div className={styles.loginInputContainer}  style={{ padding: "2rem" }}>
      <h2>ورود ادمین</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="نام کاربری"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="رمز عبور"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="submit">ورود</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
