import { db } from "@/lib/db";

// حذف غذا
export async function DELETE(_, { params }) {
  const { id } = params;
  await db.query("DELETE FROM foodinformationen WHERE id = ?", [id]);
  return new Response(JSON.stringify({ message: "Food deleted" }), { status: 200 });
}

// ویرایش غذا
export async function PUT(req, { params }) {
  const { id } = params;
  const { name, price, description, image } = await req.json();

  await db.query(
    "UPDATE foodinformationen SET name = ?, price = ?, description = ?, image = ? WHERE id = ?",
    [name, price, description, image, id]
  );

  return new Response(JSON.stringify({ message: "Food updated" }), { status: 200 });
}
