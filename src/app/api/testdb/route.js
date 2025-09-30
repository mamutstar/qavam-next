import { NextResponse } from "next/server";
import mysql from "mysql2/promise";

async function connectDB() {
  return await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",        // پسورد دیتابیس خودت
    database: "qvqmnext" // نام دیتابیس خودت
  });
}

export async function GET() {
  try {
    const db = await connectDB();

    // همه رکوردهای جدول adminuser
    const [rows] = await db.execute("SELECT * FROM adminuser");

    await db.end();

    return NextResponse.json({ success: true, users: rows });
  } catch (err) {
    console.error("TestDB error:", err);
    return NextResponse.json(
      { success: false, error: err.message },
      { status: 500 }
    );
  }
}
