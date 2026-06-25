"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const devices_model_1 = __importDefault(require("./devices.model"));
const getDeviceById = async (deviceId) => {
    const device = await devices_model_1.default.getDeviceById(deviceId);
    if (!device) {
        throw new Error("Device not found");
    }
    return device;
};
const startIncubation = async (deviceId) => {
    if (!deviceId) {
        throw new Error("deviceId is required");
    }
    const device = await devices_model_1.default.upsertIncubationStart(deviceId);
    if (device &&
        device.incubation_status === "active" &&
        new Date(device.expected_hatch_date) <= new Date()) {
        return completeIncubation(deviceId);
    }
    return device;
};
const cancelIncubation = async (deviceId) => {
    const device = await devices_model_1.default.updateStatus(deviceId, "cancelled");
    if (!device) {
        throw new Error("Device not found");
    }
    return device;
};
const completeIncubation = async (deviceId) => {
    const device = await devices_model_1.default.updateStatus(deviceId, "completed");
    if (!device) {
        throw new Error("Device not found");
    }
    return device;
};
exports.default = {
    getDeviceById,
    startIncubation,
    cancelIncubation,
    completeIncubation,
};
//# sourceMappingURL=devices.service.js.map