"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const notifications_service_1 = __importDefault(require("./notifications.service"));
const create = async (req, res) => {
    const userId = req.user.id;
    const { sensor, status, value } = req.body;
    try {
        const result = await notifications_service_1.default.createNotifications({ userId, sensor, status, value });
        return res.status(result.status).json(result);
    }
    catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Internal server error" });
    }
};
const get = async (req, res) => {
    const userId = req.user.id;
    try {
        const result = await notifications_service_1.default.getNotifications(userId);
        return res.status(result.status).json(result);
    }
    catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Internal server error" });
    }
};
exports.default = {
    create,
    get,
};
//# sourceMappingURL=notifications.controller.js.map