import express from "express";
import settingsController from "./settings.controller";
import authMiddleware from "../middlewares/auth.middleware";

const router = express.Router();

router.use(authMiddleware);

router.get("/", settingsController.get);
router.put("/", settingsController.update);

export default router;