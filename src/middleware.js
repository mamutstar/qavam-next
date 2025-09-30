import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export function middleware(req) {
  const token = req.cookies.get("token")?.value;
  console.log(token)
  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  try {
    console.log(jwt)
    jwt.verify(token, "MY_SECRET_KEY");
    console.log("jwwwwwwwwwwwwwwwwwwwwt2222222222222")
    return NextResponse.next();
  } catch {
    return NextResponse.redirect(new URL("/login", req.url));
  }
}

export const config = {
  matcher: ["/"], // فقط مسیرهای /admin
};
