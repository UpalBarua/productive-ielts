"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
// routes
const module_route_1 = __importDefault(require("./modules/module/module.route"));
const user_route_1 = __importDefault(require("./modules/user/user.route"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Range", "Authorization"],
}));
app.use(express_1.default.json());
app.use((0, morgan_1.default)("dev"));
app.use((0, helmet_1.default)());
app.use("/api/module", module_route_1.default);
app.use("/api/user", user_route_1.default);
app.all("*", (_req, res) => {
    res.status(404).json({
        success: false,
        message: "There is no such route",
    });
});
exports.default = app;
//# sourceMappingURL=app.js.map