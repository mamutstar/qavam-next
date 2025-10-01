// import { db } from "@/lib/db";

// // حذف غذا
// export async function DELETE(_, { params }) {
//   const { id } = params;
//   await db.query("DELETE FROM foodinformationen WHERE id = ?", [id]);
//   return new Response(JSON.stringify({ message: "Food deleted" }), { status: 200 });
// }

// // ویرایش غذا
// export async function PUT(req, { params }) {
//   const { id } = params;
//   const { name,en_name, price, description,en_description, image } = await req.json();

//   await db.query(
//     "UPDATE foodinformationen SET name = ?, en_name = ? , price = ?, description = ?, en_description = ? image = ? WHERE id = ?",
//     [name,en_name, price, description,en_description, image, id]
//   );

//   return new Response(JSON.stringify({ message: "Food updated" }), { status: 200 });
// }
//*********************************************************************** */
// import { db } from "@/lib/db";
// import fs from "fs";
// import path from "path";

// // حذف غذا
// export async function DELETE(_, context) {
//   const { id } = await context.params;
//   await db.query("DELETE FROM foodinformationen WHERE id = ?", [id]);
//   return new Response(JSON.stringify({ message: "Food deleted" }), { status: 200 });
// }

// // ویرایش غذا
// export async function PUT(req, context) {
//   const { id } = await context.params;
//   const formData = await req.formData();

//   const name = formData.get("name");
//   const en_name = formData.get("en_name");
//   const description = formData.get("description");
//   const en_description = formData.get("en_description");
//   const price = formData.get("price");
//   const image = formData.get("image");

  

//   // اگر عکس جدید آپلود شد
//   if (image && typeof image === "object") {
//     const bytes = await image.arrayBuffer();
//     const buffer = Buffer.from(bytes);

//     const uploadDir = path.join(process.cwd(), "public", "uploads");
//     if (!fs.existsSync(uploadDir)) {
//       fs.mkdirSync(uploadDir, { recursive: true });
//     }

//     const filePath = path.join(uploadDir, image.name);
//     fs.writeFileSync(filePath, buffer);

//     imagePath = `/uploads/${image.name}`;
//   }

//   // اگر عکس جدید نیومده، عکس قبلی رو نگه دار
//   if (!imagePath) {
//     const [old] = await db.query("SELECT image FROM foodinformationen WHERE id = ?", [id]);
//     imagePath = old?.image || null;
//   }

//   await db.query(
//     "UPDATE foodinformationen SET name=?, en_name=?, price=?, description=?, en_description=?, image=? WHERE id=?",
//     [name, en_name, price, description, en_description, imagePath, id]
//   );

//   return new Response(JSON.stringify({ message: "Food updated" }), { status: 200 });
// }
import { db } from "@/lib/db";
import fs from "fs";
import path from "path";

// حذف غذا
export async function DELETE(_, context) {
  const { id } = await context.params;
  await db.query("DELETE FROM foodinformationen WHERE id = ?", [id]);
  return new Response(JSON.stringify({ message: "Food deleted" }), {
    status: 200,
  });
}

// ویرایش غذا
export async function PUT(req, context) {
  const { id } = await context.params;
  const formData = await req.formData();

  const name = formData.get("name");
  const en_name = formData.get("en_name");
  const description = formData.get("description");
  const en_description = formData.get("en_description");
  const price = formData.get("price");
  const image = formData.get("image");

  let imagePath = null;

  // اگر عکس جدید آپلود شد
  if (image && typeof image === "object" && image.name) {
    const bytes = await image.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const uploadDir = path.join(process.cwd(), "public", "uploads");
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    const filePath = path.join(uploadDir, image.name);
    fs.writeFileSync(filePath, buffer);

    imagePath = `'/uploads/${image.name}'`;
  }

  // اگر عکس جدید نیومده، عکس قبلی رو نگه دار
  if (!imagePath) {
    const [old] = await db.query(
      "SELECT image FROM foodinformationen WHERE id = ?",
      [id]
    );
    imagePath = old?.[0]?.image || null;
  }

  await db.query(
    "UPDATE foodinformationen SET name=?, en_name=?, price=?, description=?, en_description=?, image=? WHERE id=?",
    [name, en_name, price, description, en_description, imagePath, id]
  );

  return new Response(JSON.stringify({ message: "Food updated" }), {
    status: 200,
  });
}

