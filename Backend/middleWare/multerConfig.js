import multer from "multer";

const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    const timestamp = Date.now();
    const safeName = file.originalname.replace(/\s+/g, "_");
    cb(null, `${timestamp}-${safeName}`);
  },
});

const upload = multer({ storage });

export default upload;
