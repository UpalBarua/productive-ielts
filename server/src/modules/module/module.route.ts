import { Router } from "express";
import upload from "../../middlewares/multer";
import {
  createNewModule,
  downloadModuleVideo,
  getModules,
  uploadModuleVideo,
} from "./module.controller";

const router = Router();

router.post("/new-module", createNewModule);
router.get("/:fileId", downloadModuleVideo);
router.get("/", getModules);
router.post("/", upload.single("module_video"), uploadModuleVideo);

export default router;
