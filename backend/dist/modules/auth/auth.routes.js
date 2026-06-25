"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const register_middleware_1 = __importDefault(require("../middlewares/register.middleware"));
const auth_middleware_1 = __importDefault(require("../middlewares/auth.middleware"));
const auth_controller_1 = __importDefault(require("./auth.controller"));
const router = express_1.default.Router();
router.post("/register", register_middleware_1.default, auth_controller_1.default.register);
router.post("/login", auth_controller_1.default.login);
router.get("/me", auth_middleware_1.default, auth_controller_1.default.getMe);
exports.default = router;
//# sourceMappingURL=auth.routes.js.map