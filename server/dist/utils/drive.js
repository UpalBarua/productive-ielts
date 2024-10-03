"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const googleapis_1 = require("googleapis");
const path_1 = __importDefault(require("path"));
const KEY_FILE_PATH = path_1.default.join("credentials.json");
const SCOPES = ["https://www.googleapis.com/auth/drive"];
const auth = new googleapis_1.google.auth.GoogleAuth({
    keyFile: KEY_FILE_PATH,
    scopes: SCOPES,
});
const drive = googleapis_1.google.drive({ version: "v3", auth: auth });
exports.default = drive;
//# sourceMappingURL=drive.js.map