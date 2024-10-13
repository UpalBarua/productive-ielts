"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("./user.controller");
const router = (0, express_1.Router)();
router.post("/sign-up", user_controller_1.registerUser);
router.post("/sign-in", user_controller_1.loginUser);
router.get("/:email", user_controller_1.getUserByEmail);
// router.patch("/enroll/:userId", enrollCourse);
// router.get("/", getAllUsers);
exports.default = router;
//# sourceMappingURL=user.route.js.map