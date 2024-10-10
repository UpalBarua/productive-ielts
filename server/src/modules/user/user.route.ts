import { Router } from "express";
import {
  getAllUsers,
  getUserByEmail,
  loginUser,
  registerUser,
} from "./user.controller";

const router = Router();

router.post("/sign-up", registerUser);
router.post("/sign-in", loginUser);
router.get("/:email", getUserByEmail);
// router.patch("/enroll/:userId", enrollCourse);
// router.get("/", getAllUsers);

export default router;
