"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const mongoose_1 = __importDefault(require("mongoose"));
const userSchema = new mongoose_1.default.Schema({
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
        user.password = await bcryptjs_1.default.hash(user.password, 12);
    }
    next();
});
exports.default = mongoose_1.default.model("User", userSchema);
//# sourceMappingURL=user.model.js.map