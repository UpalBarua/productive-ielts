import { NextFunction, Request, Response } from "express";
import fs from "fs";
import { v4 as uuid } from "uuid";
import drive from "../../utils/drive";

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
