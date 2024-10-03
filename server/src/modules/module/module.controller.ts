import { NextFunction, Request, Response } from "express";
import fs from "fs";
import { v4 as uuid } from "uuid";
import drive from "../../utils/drive";
import Module from "./module.model";

export async function uploadModuleVideo(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const { file } = req;

    // TODO: add proper file validation using zod
    if (!file) return;

    const { data } = await drive.files.create({
      media: {
        mimeType: file.mimetype,
        body: fs.createReadStream(file.path),
      },
      requestBody: {
        name: file.originalname + uuid(),
        parents: [process.env.DRIVE_PARENT_DIR as string],
      },
      fields: "id",
    });

    res.json({
      status: 1,
      message: "File uploaded successfully",
      fileId: data.id,
    });
  } catch (error) {
    next(error);
  }
}

export async function downloadModuleVideo(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const range = req.headers.range as string;
    const { fileId } = req.params;

    if (!range) {
      res.status(400).send("Requires Range header");
      return;
    }

    const fileMetadata = await drive.files.get({
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
    const driveStream = await drive.files.get(
      {
        fileId,
        alt: "media",
      },
      { responseType: "stream", headers: { Range: `bytes=${start}-${end}` } },
    );

    // Pipe the video file stream to the client
    driveStream.data.pipe(res);
  } catch (error) {
    next(error);
  }
}

export async function createNewModule(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const { body } = req;

    const newModule = new Module(body);
    await newModule.save();

    res.status(201).json({
      success: true,
      message: "new module created",
    });
  } catch (error) {
    next(error);
  }
}

export async function getModules(
  _req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const modules = await Module.find({});

    res.status(200).json({
      success: true,
      message: "modules found",
      data: modules,
    });
  } catch (error) {
    next(error);
  }
}
