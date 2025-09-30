import { db }from "@/lib/db";

// گرفتن همه غذاها
export async function GET() {
  const [rows] = await db.query("SELECT * FROM foodinformationen");
  return new Response(JSON.stringify(rows), { status: 200 });
}

// افزودن غذا
export async function POST(req) {
  const { name, price, description, image } = await req.json();
  await db.query(
    "INSERT INTO foods (name, price, description, image) VALUES (?, ?, ?, ?)",
    [name, price, description, image]
  );
  return new Response(JSON.stringify({ message: "Food added" }), { status: 201 });
}
