const express = require("express");
const next = require("next");
const path = require("path");
const multer = require("multer");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

// مسیر ذخیره آپلودها
const uploadDir = path.join(process.cwd(), "uploads");

// تنظیم Multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  }
});
const upload = multer({ storage });

app.prepare().then(() => {
  const server = express();

  // سرو کردن فایل‌های uploads
  server.use('/uploads', express.static(uploadDir));

  // نمونه API برای آپلود
  server.post('/api/upload', upload.single('file'), (req, res) => {
    res.json({ url: `/uploads/${req.file.filename}` });
  });

  // تمام درخواست‌های Next.js
  server.all(/^\/.*$/, (req, res) => handle(req, res));

  server.listen(3000, () => {
    console.log('> Ready on http://localhost:3000');
  });
});
