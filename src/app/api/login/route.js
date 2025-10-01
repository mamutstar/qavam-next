 import { db } from "@/lib/db";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { username, password } = await req.json();

    const [rows] = await db.query(
      "SELECT * FROM adminuser WHERE userName = ?",
      [username]
    );

    if (rows.length === 0) {
      return NextResponse.json({ error: "User not found" }, { status: 401 });
    }

    const user = rows[0];
    const validPassword = password === user.password; // ساده بدون هش

    if (!validPassword) {
      return NextResponse.json({ error: "Invalid password" }, { status: 401 });
    }

    const token = jwt.sign(
      { id: user.id, username: user.username },
      "MY_SECRET_KEY",
      { expiresIn: "1h" }
    );
    

    const res = NextResponse.json({ success: true });
    res.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      
      maxAge: 60 * 60,
      path: "/admin",
    });
    return res;
    
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
