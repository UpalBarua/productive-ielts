import express, { Router } from "express";
import upload from "../../middlewares/multer";
import { uploadModuleVideo } from "./module.controller";

const router = Router();

router.post("/module", upload.single("module_video"), uploadModuleVideo);

router.get("/module", function(_req, res: express.Response) {
  res.send("hello");
});

export default router;
