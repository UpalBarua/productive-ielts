"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = __importDefault(require("multer"));
const os_1 = __importDefault(require("os"));
const uuid_1 = require("uuid");
const storage = multer_1.default.diskStorage({
    destination: os_1.default.tmpdir(),
    filename: (_req, file, callback) => callback(null, `${file.originalname}-${(0, uuid_1.v4)()}`),
});
const upload = (0, multer_1.default)({
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
exports.default = upload;
//# sourceMappingURL=multer.js.map