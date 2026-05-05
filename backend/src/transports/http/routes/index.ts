import express from "express"

import authRoutes from "../../../modules/auth/auth.routes"
import authDeviceRoutes from "../../../modules/device/device.routes"

const router = express.Router()

router.use("/auth", authRoutes)
router.use("/auth-device", authDeviceRoutes)

export default router