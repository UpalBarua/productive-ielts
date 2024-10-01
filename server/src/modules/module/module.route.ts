import { Router } from "express";
import upload from "../../middlewares/multer";
import { downloadModuleVideo, uploadModuleVideo } from "./module.controller";

const router = Router();

router.get("/module/:fileId", downloadModuleVideo);
router.post("/module", upload.single("module_video"), uploadModuleVideo);

export default router;
