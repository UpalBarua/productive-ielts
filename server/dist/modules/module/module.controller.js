"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadModuleVideo = uploadModuleVideo;
exports.downloadModuleVideo = downloadModuleVideo;
exports.createNewModule = createNewModule;
exports.getModules = getModules;
const fs_1 = __importDefault(require("fs"));
const uuid_1 = require("uuid");
const drive_1 = __importDefault(require("../../utils/drive"));
const module_model_1 = __importDefault(require("./module.model"));
async function uploadModuleVideo(req, res, next) {
    try {
        const { file } = req;
        // TODO: add proper file validation using zod
        if (!file)
            return;
        const { data } = await drive_1.default.files.create({
            media: {
                mimeType: file.mimetype,
                body: fs_1.default.createReadStream(file.path),
            },
            requestBody: {
                name: file.originalname + (0, uuid_1.v4)(),
                parents: [process.env.DRIVE_PARENT_DIR],
            },
            fields: "id",
        });
        res.json({
            status: 1,
            message: "File uploaded successfully",
            fileId: data.id,
        });
    }
    catch (error) {
        next(error);
    }
}
async function downloadModuleVideo(req, res, next) {
    try {
        const range = req.headers.range;
        const { fileId } = req.params;
        if (!range) {
            res.status(400).send("Requires Range header");
            return;
        }
        const fileMetadata = await drive_1.default.files.get({
            fileId,
            fields: "size, mimeType",
        });
        const videoSize = parseInt(fileMetadata.data.size ?? "0");
        const mimeType = fileMetadata.data.mimeType ?? "video/mp4"; // Default to video/mp4 if no mimeType found
        // Parse the range to figure out which part of the file to send
        const CHUNK_SIZE = 10 ** 6; // 1MB chunk size
        const start = Number(range.replace(/\D/g, "")); // TOOD: remove type assertion
        const end = Math.min(start + CHUNK_SIZE, videoSize - 1);
        const contentLength = end - start + 1;
        // Set response headers for video streaming
        res.writeHead(206, {
            "Content-Range": `bytes ${start}-${end}/${videoSize}`,
            "Accept-Ranges": "bytes",
            "Content-Length": contentLength,
            "Content-Type": mimeType,
        });
        // Get the file stream from Google Drive with byte range
        const driveStream = await drive_1.default.files.get({
            fileId,
            alt: "media",
        }, { responseType: "stream", headers: { Range: `bytes=${start}-${end}` } });
        // Pipe the video file stream to the client
        driveStream.data.pipe(res);
    }
    catch (error) {
        next(error);
    }
}
async function createNewModule(req, res, next) {
    try {
        const { body } = req;
        const newModule = new module_model_1.default(body);
        await newModule.save();
        res.status(201).json({
            success: true,
            message: "new module created",
        });
    }
    catch (error) {
        next(error);
    }
}
async function getModules(_req, res, next) {
    try {
        const modules = await module_model_1.default.find({});
        res.status(200).json({
            success: true,
            message: "modules found",
            data: modules,
        });
    }
    catch (error) {
        next(error);
    }
}
//# sourceMappingURL=module.controller.js.map