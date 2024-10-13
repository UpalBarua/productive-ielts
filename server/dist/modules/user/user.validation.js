"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.newUserSchema = void 0;
const z = __importStar(require("zod"));
exports.newUserSchema = z.object({
    name: z
        .string()
        .trim()
        .min(2, { message: "Name must be at least 3 characters long." })
        .max(50, { message: "Name cannot be longer than 50 characters." }),
    // .refine((name) => validateName(name), {
    //   message: "Name contains invalid characters.",
    // }),
    email: z.string().email({ message: "Email is not valid." }),
    password: z
        .string()
        .min(8, { message: "Password must be at least 8 characters long" }),
});
//# sourceMappingURL=user.validation.js.map