import { Router } from "express";
import upload from "../../middlewares/multer";
import {
  downloadModuleVideo,
  uploadModuleVideo,
  createNewModule,
} from "./module.controller";

const router = Router();

router.post("/new-module", createNewModule);
router.get("/:fileId", downloadModuleVideo);
router.post("/", upload.single("module_video"), uploadModuleVideo);

export default router;
