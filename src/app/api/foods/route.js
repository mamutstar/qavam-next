import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import path from "path";
import { db } from "@/lib/db";

// گرفتن همه غذاها
export async function GET() {
  const [rows] = await db.query("SELECT * FROM foodinformationen");
  return new Response(JSON.stringify(rows), { status: 200 });
}

// افزودن غذا


export async function POST(req) {
  const formData = await req.formData();

  const name = formData.get("name");
  const en_name = formData.get("en_name");
  const price = formData.get("price");
  const description = formData.get("description");
  const en_description = formData.get("en_description");
  const category = formData.get("category");
  const image = formData.get("image"); // فایل واقعی

  if (!image) {
    return NextResponse.json({ error: "No image uploaded" }, { status: 400 });
  }

  // ذخیره فایل در public/uploads
  const buffer = Buffer.from(await image.arrayBuffer());
  const filename = Date.now() + "-" + image.name;
  const filepath = path.join(process.cwd(), "public/uploads", filename);
  await writeFile(filepath, buffer);

  // ذخیره مسیر فایل در دیتابیس
  const imagePath = "/uploads/" + filename;
  await db.query(
    "INSERT INTO foodinformationen (name, en_name, price, description, en_description,category, image) VALUES (?, ?, ?, ?,?,?,?)",
    [name,en_name, price, description,en_description,category, imagePath]
  );

  return NextResponse.json({ message: "Food added" }, { status: 201 });
}
