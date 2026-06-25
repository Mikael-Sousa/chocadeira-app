"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const notifications_model_1 = __importDefault(require("./notifications.model"));
const validSensors = ['humidity', 'water_temperature', 'air_temperature', 'wifi_signal'];
const validStatus = ['low', 'high', 'error'];
const createNotifications = async ({ userId, sensor, status, value }) => {
    if (!validStatus.includes(status)) {
        return {
            status: 400,
            error: 'Status inválido'
        };
    }
    if (!validSensors.includes(sensor)) {
        return {
            status: 400,
            error: 'Sensor inválido'
        };
    }
    const notifications = await notifications_model_1.default.create({ userId, sensor, status, value });
    return {
        status: 201,
        data: notifications,
    };
};
const getNotifications = async (userId) => {
    const notifications = await notifications_model_1.default.findByUserId(userId);
    if (!notifications) {
        return {
            status: 404,
            message: "Notifications not found"
        };
    }
    return {
        status: 200,
        data: notifications
    };
};
exports.default = {
    createNotifications,
    getNotifications,
};
//# sourceMappingURL=notifications.service.js.map