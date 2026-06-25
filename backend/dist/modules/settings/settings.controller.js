"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const settings_service_1 = __importDefault(require("./settings.service"));
const get = async (req, res) => {
    const userId = req.user.id;
    try {
        const result = await settings_service_1.default.getSettings(userId);
        return res.status(result.status).json(result);
    }
    catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Internal server error" });
    }
};
const update = async (req, res) => {
    const userId = req.user.id;
    try {
        const result = await settings_service_1.default.updateSettings(userId, req.body);
        return res.status(result.status).json(result);
    }
    catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Internal server error" });
    }
};
exports.default = {
    get,
    update
};
//# sourceMappingURL=settings.controller.js.map