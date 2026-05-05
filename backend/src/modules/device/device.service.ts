import deviceModel from "./device.model";
import jwt from "jsonwebtoken";
import "dotenv/config";

const register = async (espId: string) => {
  let device = await deviceModel.findByEspId(espId);

  if (!device) {
    device = await deviceModel.createDevice(espId);
  }

  return {
    status: 200,
    data: device,
  };
};

const authenticateDevice = async (espId: string) => {
  const device = await deviceModel.findByEspId(espId);

  if (!device) {
    return { status: 401, message: "esp_id invalid" };
  }

  const payload = {
    id: device.id,
    espId: device.esp_id,
  };

  const token = jwt.sign(payload, process.env.JWT_SECRET!, {
    expiresIn: "7d",
  });

  return {
    status: 200,
    data: {
      token,
      device: {
        id: device.id,
        espId: device.esp_id,
      },
    },
  };
};

export default {
  register,
  authenticateDevice,
};