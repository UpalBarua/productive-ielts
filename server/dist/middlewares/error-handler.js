"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorHandler = (error, _req, res, _next) => {
    console.error(error);
    res.status(500).json({
        success: false,
        message: error.message || "Something went wrong",
        error: error || null,
    });
};
exports.default = errorHandler;
//# sourceMappingURL=error-handler.js.map