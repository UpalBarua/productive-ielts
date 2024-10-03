import multer from "multer";
import os from "os";
import { v4 as uuid } from "uuid";

const storage = multer.diskStorage({
  destination: os.tmpdir(),
  filename: (_req, file, callback) =>
    callback(null, `${file.originalname}-${uuid()}`),
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 1024,
  },
  fileFilter: (_req, file, cb) => {
    const allowedMimeTypes = [
      "image/jpeg",
      "image/png",
      "image/gif",
      "video/mp4",
      "video/webm",
      "video/ogg",
    ];
    if (!allowedMimeTypes.includes(file.mimetype)) {
      return cb(new Error("Invalid file type"));
    }
    cb(null, true);
  },
});

export default upload;
