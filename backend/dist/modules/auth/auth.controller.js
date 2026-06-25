"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const auth_service_1 = __importDefault(require("./auth.service"));
const register = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const result = await auth_service_1.default.register(name, email, password);
        return res.status(result.status).json(result);
    }
    catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Internal server error" });
    }
};
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const result = await auth_service_1.default.login(email, password);
        return res.status(result.status).json(result);
    }
    catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Internal server error" });
    }
};
const getMe = async (req, res) => {
    try {
        const userId = req.user.id;
        const result = await auth_service_1.default.getProfileByUserId(userId);
        return res.status(result.status).json(result);
    }
    catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Internal server error" });
    }
};
exports.default = {
    register,
    login,
    getMe
};
//# sourceMappingURL=auth.controller.js.map