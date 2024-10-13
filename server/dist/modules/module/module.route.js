"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const multer_1 = __importDefault(require("../../middlewares/multer"));
const module_controller_1 = require("./module.controller");
const router = (0, express_1.Router)();
router.post("/new-module", module_controller_1.createNewModule);
router.get("/:fileId", module_controller_1.downloadModuleVideo);
router.get("/", module_controller_1.getModules);
router.post("/", multer_1.default.single("module_video"), module_controller_1.uploadModuleVideo);
exports.default = router;
//# sourceMappingURL=module.route.js.map