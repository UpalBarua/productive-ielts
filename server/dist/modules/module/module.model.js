"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
// TODO: implement proper validations
const moduleSchema = new mongoose_1.default.Schema({
    moduleTitle: {
        type: String,
        required: true,
    },
    videos: [
        {
            title: {
                type: String,
                required: true,
            },
            videoId: {
                type: String,
                required: true,
            },
        },
    ],
});
exports.default = mongoose_1.default.model("Module", moduleSchema);
//# sourceMappingURL=module.model.js.map