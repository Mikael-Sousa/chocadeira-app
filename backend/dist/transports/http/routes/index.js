"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_routes_1 = __importDefault(require("../../../modules/auth/auth.routes"));
const settings_routes_1 = __importDefault(require("../../../modules/settings/settings.routes"));
const notifications_routes_1 = __importDefault(require("../../../modules/notifications/notifications.routes"));
const router = express_1.default.Router();
router.use("/auth", auth_routes_1.default);
router.use("/settings", settings_routes_1.default);
router.use("/notifications", notifications_routes_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map