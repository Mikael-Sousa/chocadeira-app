"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const register = (req, res, next) => {
    if (!req.body || typeof req.body !== "object") {
        return res.status(400).json({
            message: "Request body must be a JSON object",
        });
    }
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        return res.status(400).json({
            message: "username, email and password are required",
        });
    }
    if (name.length < 3) {
        return res.status(400).json({
            message: "username must be at least 3 characters long",
        });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({
            message: "Invalid email format",
        });
    }
    if (password.length < 6) {
        return res.status(400).json({
            message: "Password must be at least 6 characters long",
        });
    }
    next();
};
exports.default = register;
//# sourceMappingURL=register.middleware.js.map