import multer from "multer";

const storage = multer.diskStorage({
  filename: function (req, file, callback) {
    callback(null, file.originalname);
  },
});

// @ts-ignore
const upload = multer({ storage });

export default upload;
