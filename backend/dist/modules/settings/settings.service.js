"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const settings_model_1 = __importDefault(require("./settings.model"));
const createSettings = async (userId) => {
    const settings = await settings_model_1.default.create(userId);
    return {
        status: 201,
        data: settings,
    };
};
const getSettings = async (userId) => {
    const settings = await settings_model_1.default.findByUserId(userId);
    if (!settings) {
        return {
            status: 404,
            message: "Settings not found"
        };
    }
    return {
        status: 200,
        data: settings
    };
};
const updateSettings = async (userId, data) => {
    const updated = await settings_model_1.default.update(userId, data);
    if (!updated) {
        return {
            status: 404,
            message: "Settings not found"
        };
    }
    return {
        status: 200,
        data: updated
    };
};
exports.default = {
    createSettings,
    getSettings,
    updateSettings
};
//# sourceMappingURL=settings.service.js.map