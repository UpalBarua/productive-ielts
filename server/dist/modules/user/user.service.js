"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAllUser = exports.findUserById = exports.findUserByEmail = exports.createNewUser = void 0;
const user_model_1 = __importDefault(require("./user.model"));
const createNewUser = async (user) => {
    const createdUser = new user_model_1.default(user);
    await createdUser.save();
    return await user_model_1.default.findOne({ email: user.email }).lean();
};
exports.createNewUser = createNewUser;
const findUserByEmail = async (email) => await user_model_1.default.findOne({ email }).lean();
exports.findUserByEmail = findUserByEmail;
const findUserById = async (userId) => await user_model_1.default.findOne({ _id: userId }).lean();
exports.findUserById = findUserById;
const findAllUser = async () => await user_model_1.default.find().lean();
exports.findAllUser = findAllUser;
//# sourceMappingURL=user.service.js.map