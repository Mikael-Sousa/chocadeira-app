"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const notifications_controller_1 = __importDefault(require("./notifications.controller"));
const auth_middleware_1 = __importDefault(require("../middlewares/auth.middleware"));
const router = express_1.default.Router();
router.use(auth_middleware_1.default);
router.post("/", auth_middleware_1.default, notifications_controller_1.default.create);
router.get("/", auth_middleware_1.default, notifications_controller_1.default.get);
exports.default = router;
//# sourceMappingURL=notifications.routes.js.map