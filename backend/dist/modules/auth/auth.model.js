"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("../../shared/database/connection"));
const findByEmail = async (email) => {
    const result = await connection_1.default.query("SELECT * FROM users WHERE email = $1", [email]);
    return result.rows[0] || null;
};
const findProfileByUserId = async (userId) => {
    const result = await connection_1.default.query(`
    SELECT 
      id,
      name,
      email
    FROM users
    WHERE id = $1
    `, [userId]);
    return result.rows[0] || null;
};
const registerNewUser = async (name, email, password) => {
    const result = await connection_1.default.query(`
    INSERT INTO users (name, email, password)
    VALUES ($1, $2, $3)
    RETURNING id, name, email, password
    `, [name, email, password]);
    return result.rows[0] || null;
};
exports.default = {
    findByEmail,
    findProfileByUserId,
    registerNewUser,
};
//# sourceMappingURL=auth.model.js.map