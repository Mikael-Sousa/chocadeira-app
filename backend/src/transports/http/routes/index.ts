import express from "express"
import usersRoutes from "../../../modules/users/users.routes"
import authDeviceRoutes from "../../../modules/device/device.routes"

const router = express.Router()

router.use("/users", usersRoutes)
router.use("/auth-device", authDeviceRoutes)

export default router