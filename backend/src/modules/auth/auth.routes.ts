import express from "express"
import registerMiddleware from "./register.middleware"
import authController from "./auth.controller";

const router = express.Router()

router.post("/register", registerMiddleware, authController.register)
router.post("/login", authController.login)

export default router