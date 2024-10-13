import bcrypt from "bcryptjs";
import mongoose from "mongoose";
// import { validateEmail, validateName } from "../../configs/validation";
import type { TUser } from "./user.type";

const userSchema = new mongoose.Schema<TUser>({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: [2, "Name must be at least 2 characters long."],
    maxlength: [50, "Name cannot be longer than 50 characters."],
    // validate: [validateName, "Name contains invalid characters."],
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    // validate: [validateEmail, "Email contains invalid characters."],
  },
  password: {
    type: String,
    required: true,
    minlength: [8, "Password must be at least 8 characters long."],
  },
});

userSchema.pre("save", async function (next) {
  const user = this;

  if (user.isNew || user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 12);
  }

  next();
});

export default mongoose.model<TUser>("User", userSchema);
