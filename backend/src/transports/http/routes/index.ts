import express from "express"
import authRoutes from "../../../modules/auth/auth.routes"
import settingsRoutes from "../../../modules/settings/settings.routes"
import notificationsRoutes from "../../../modules/notifications/notifications.routes"

const router = express.Router()

router.use("/auth", authRoutes)
router.use("/settings", settingsRoutes)
router.use("/notifications", notificationsRoutes)

export default router