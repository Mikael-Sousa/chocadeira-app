"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("../../shared/database/connection"));
const create = async ({ userId, sensor, status, value }) => {
    const result = await connection_1.default.query(`
    INSERT INTO user_notifications (user_id, sensor, status, value)
    VALUES ($1, $2, $3, $4)
    RETURNING *
    `, [userId, sensor, status, value]);
    return result.rows[0];
};
const findByUserId = async (userId) => {
    const result = await connection_1.default.query(`SELECT * FROM user_notifications WHERE user_id = $1 ORDER BY created_at DESC`, [userId]);
    return result.rows;
};
exports.default = {
    findByUserId,
    create,
};
//# sourceMappingURL=notifications.model.js.map