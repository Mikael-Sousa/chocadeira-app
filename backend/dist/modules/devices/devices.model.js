"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("../../shared/database/connection"));
const getDeviceById = async (deviceId) => {
    const result = await connection_1.default.query(`
    SELECT * FROM devices WHERE device_id = $1
    `, [deviceId]);
    return result.rows[0] || null;
};
const upsertIncubationStart = async (deviceId) => {
    const result = await connection_1.default.query(`
    INSERT INTO devices (device_id, incubation_started_at, expected_hatch_date, incubation_status)
    VALUES ($1, NOW(), NOW() + INTERVAL '21 days', 'active')
    ON CONFLICT (device_id) DO UPDATE
      SET incubation_started_at = NOW(),
          expected_hatch_date = NOW() + INTERVAL '21 days',
          incubation_status = 'active'
    RETURNING *
    `, [deviceId]);
    return result.rows[0];
};
const updateStatus = async (deviceId, status) => {
    const result = await connection_1.default.query(`
    UPDATE devices
    SET incubation_status = $2
    WHERE device_id = $1
    RETURNING *
    `, [deviceId, status]);
    return result.rows[0] || null;
};
exports.default = {
    getDeviceById,
    upsertIncubationStart,
    updateStatus,
};
//# sourceMappingURL=devices.model.js.map