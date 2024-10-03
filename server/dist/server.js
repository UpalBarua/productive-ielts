"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const app_1 = __importDefault(require("./app"));
const port = process.env.PORT || 8080;
const uri = process.env.DB_URI || "";
(async () => {
    try {
        await mongoose_1.default.connect(uri);
        app_1.default.listen(port, () => {
            console.log(`[server] is running on http://localhost:${port}/`);
        });
    }
    catch (error) {
        console.error(error);
        process.exit(1);
    }
})();
//# sourceMappingURL=server.js.map