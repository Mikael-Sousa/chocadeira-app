import express from "express"
import registerMiddleware from "../middlewares/register.middleware"
import authMiddleware from "../middlewares/auth.middleware";
import authController from "./auth.controller";

const router = express.Router()

router.post("/register", registerMiddleware, authController.register)
router.post("/login", authController.login)
router.get("/me", authMiddleware, authController.getMe)
export default router