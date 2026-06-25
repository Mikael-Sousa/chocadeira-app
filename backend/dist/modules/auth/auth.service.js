"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const auth_model_1 = __importDefault(require("./auth.model"));
const settings_service_1 = __importDefault(require("../settings/settings.service"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
require("dotenv/config");
const register = async (name, email, password) => {
    const existingUser = await auth_model_1.default.findByEmail(email);
    if (existingUser) {
        return { status: 409, message: "Email already registered" };
    }
    const hashedPassword = await bcrypt_1.default.hash(password, 10);
    const newUser = await auth_model_1.default.registerNewUser(name, email, hashedPassword);
    await settings_service_1.default.createSettings(newUser.id);
    const payload = {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
    };
    const token = jsonwebtoken_1.default.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "7d",
    });
    return {
        status: 201,
        data: {
            token,
            user: {
                id: newUser.id,
                name: newUser.name,
                email: newUser.email,
            }
        }
    };
};
const login = async (email, password) => {
    const user = await auth_model_1.default.findByEmail(email);
    if (!user) {
        return { status: 401, message: "Email or password invalid" };
    }
    const passwordMatch = await bcrypt_1.default.compare(password, user.password);
    if (!passwordMatch) {
        return { status: 401, message: "Email or password invalid" };
    }
    const payload = {
        id: user.id,
        name: user.name,
        email: user.email,
    };
    const token = jsonwebtoken_1.default.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "7d",
    });
    return {
        status: 200,
        data: {
            token,
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
            },
        },
    };
};
const getProfileByUserId = async (userId) => {
    if (!userId) {
        return { status: 400, message: "userId is required" };
    }
    const profile = await auth_model_1.default.findProfileByUserId(userId);
    if (!profile) {
        return { status: 404, message: "Profile not found" };
    }
    return {
        status: 200,
        data: profile,
    };
};
exports.default = {
    register,
    login,
    getProfileByUserId
};
//# sourceMappingURL=auth.service.js.map