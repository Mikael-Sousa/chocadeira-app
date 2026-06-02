import express from "express"
import authRoutes from "../../../modules/auth/auth.routes"
import settingsRoutes from "../../../modules/settings/settings.routes"

const router = express.Router()

router.use("/auth", authRoutes)
router.use("/settings", settingsRoutes)

export default router