"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const settings_controller_1 = __importDefault(require("./settings.controller"));
const auth_middleware_1 = __importDefault(require("../middlewares/auth.middleware"));
const router = express_1.default.Router();
router.use(auth_middleware_1.default);
router.get("/", settings_controller_1.default.get);
router.put("/", settings_controller_1.default.update);
exports.default = router;
//# sourceMappingURL=settings.routes.js.map