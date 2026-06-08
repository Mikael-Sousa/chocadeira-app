import express from "express";
import notificationsController from "./notifications.controller";
import authMiddleware from "../middlewares/auth.middleware";

const router = express.Router();

router.use(authMiddleware);

router.post("/", authMiddleware, notificationsController.create);
router.get("/", authMiddleware, notificationsController.get);

export default router;