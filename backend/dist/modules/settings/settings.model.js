"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("../../shared/database/connection"));
const findByUserId = async (userId) => {
    const result = await connection_1.default.query(`SELECT * FROM user_settings WHERE user_id = $1`, [userId]);
    return result.rows[0] || null;
};
const create = async (userId) => {
    const result = await connection_1.default.query(`
    INSERT INTO user_settings (user_id)
    VALUES ($1)
    RETURNING *
    `, [userId]);
    return result.rows[0];
};
const update = async (userId, data) => {
    const result = await connection_1.default.query(`
    UPDATE user_settings
    SET
      default_theme = $1
    WHERE user_id = $2
    RETURNING *
    `, [
        data.defaultTheme,
        userId
    ]);
    return result.rows[0];
};
exports.default = {
    findByUserId,
    create,
    update
};
//# sourceMappingURL=settings.model.js.map