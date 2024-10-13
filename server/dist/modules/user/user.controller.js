"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllUsers = exports.getUserByEmail = exports.loginUser = exports.registerUser = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const zod_1 = __importDefault(require("zod"));
const user_service_1 = require("./user.service");
const user_validation_1 = require("./user.validation");
const user_service_2 = require("./user.service");
const registerUser = async (req, res, next) => {
    try {
        const newUser = req.body;
        const validationResult = user_validation_1.newUserSchema.safeParse(newUser);
        if (!validationResult.success) {
            res.status(400).json({
                success: false,
                message: "Provided new user data is invalid.",
                error: validationResult.error,
            });
            return;
        }
        const existingUser = await (0, user_service_1.findUserByEmail)(newUser.email);
        if (existingUser) {
            res.status(400).json({
                success: false,
                message: "An account with this email already exists.",
                error: null,
            });
            return;
        }
        const createdUser = await (0, user_service_1.createNewUser)(newUser);
        const { password, ...sanitizedUser } = createdUser;
        res.status(201).json({
            success: true,
            message: "Registered new user successfully.",
            data: sanitizedUser,
        });
    }
    catch (error) {
        next(error);
    }
};
exports.registerUser = registerUser;
const loginUser = async (req, res, next) => {
    try {
        const credentials = req.body;
        const validationResult = user_validation_1.newUserSchema
            .omit({ name: true })
            .safeParse(credentials);
        if (!validationResult.success) {
            res.status(400).json({
                success: false,
                message: "Provided credentials is invalid.",
                error: validationResult.error,
            });
            return;
        }
        const foundUser = await (0, user_service_1.findUserByEmail)(credentials.email);
        if (!foundUser) {
            res.status(401).json({
                success: false,
                message: "Email or password was incorrect.",
                error: null,
            });
            return;
        }
        const isPasswordCorrect = await bcryptjs_1.default.compare(credentials.password, foundUser.password);
        if (!isPasswordCorrect) {
            res.status(401).json({
                success: false,
                message: "Email or password was incorrect.",
                error: null,
            });
            return;
        }
        const { password, ...sanitizedUser } = foundUser;
        res.status(201).json({
            success: true,
            message: "Logged in user successfully.",
            data: sanitizedUser,
        });
    }
    catch (error) {
        next(error);
    }
};
exports.loginUser = loginUser;
// export const enrollCourse = async (
//   req: Request,
//   res: Response,
//   next: NextFunction,
// ) => {
//   try {
//     const { userId } = req.params;
//     const { courseId } = req.body;
//
//     if (!isValidObjectId(userId)) {
//       return res.status(400).json({
//         success: false,
//         message: "Provided user id is invalid.",
//         error: null,
//       });
//     }
//
//     if (!isValidObjectId(courseId)) {
//       return res.status(400).json({
//         success: false,
//         message: "Provided course id is invalid.",
//         error: null,
//       });
//     }
//
//     const foundUser = await findUserById(userId!);
//
//     if (!foundUser) {
//       return res.status(401).json({
//         success: false,
//         message: "User not found for the provided id.",
//         error: null,
//       });
//     }
//
//     await createNewEnrollment(userId!, courseId);
//
//     res.status(200).json({
//       success: true,
//       message: "Enrolled course successfully.",
//       data: null,
//     });
//   } catch (error) {
//     next(error);
//   }
// };
const getUserByEmail = async (req, res, next) => {
    try {
        const { email } = req.params;
        const validationResult = zod_1.default.string().email().safeParse(email);
        if (!validationResult.success) {
            res.status(400).json({
                success: false,
                message: "Provided user email is invalid.",
                error: validationResult.error,
            });
            return;
        }
        const foundUser = await (0, user_service_1.findUserByEmail)(email);
        const { password, ...sanitizedUser } = foundUser;
        if (!foundUser) {
            res.status(401).json({
                success: false,
                message: "User not found for the provided id.",
                error: null,
            });
            return;
        }
        res.status(200).json({
            success: true,
            message: "User retrieved successfully.",
            data: sanitizedUser,
        });
    }
    catch (error) {
        next(error);
    }
};
exports.getUserByEmail = getUserByEmail;
const getAllUsers = async (req, res, next) => {
    try {
        const foundUsers = await (0, user_service_2.findAllUser)();
        if (!foundUsers) {
            return res.status(401).json({
                success: false,
                message: "Users not found.",
                error: null,
            });
        }
        const sanitizedUsers = foundUsers.map(({ password, ...rest }) => rest);
        res.status(200).json({
            success: true,
            message: "Users retrieved successfully.",
            data: sanitizedUsers,
        });
    }
    catch (error) {
        next(error);
    }
};
exports.getAllUsers = getAllUsers;
//# sourceMappingURL=user.controller.js.map