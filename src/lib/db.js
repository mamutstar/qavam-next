import mysql from "mysql2/promise";

export const db = mysql.createPool({
  // host: "localhost",   // یا آدرس سرور دیتابیس
  // user: "root",        // یوزرنیم MySQL
  // password: "",        // پسورد MySQL
  // database: "qvqmnext" // اسم دیتابیس

  host: "localhost",   // یا آدرس سرور دیتابیس
  user: "qavamuser2",        // یوزرنیم MySQL
  password: "9176298900@Qavam",        // پسورد MySQL
  database: "qvqmnext" // اسم دیتابیس
});