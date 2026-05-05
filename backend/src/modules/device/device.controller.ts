import authService from "./device.service";

const register = async (req: any, res: any) => {
  const { espId } = req.body;

  try {
    const result = await authService.register(espId);
    return res.status(result.status).json(result);

  } catch (err: any) {
    console.error(err);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const authenticate = async (req: any, res: any) => {
  try {
    const espId = req.body;

    const result = await authService.authenticateDevice(espId);
    return res.status(result.status).json(result);

  } catch (err: any) {
    console.error(err);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export default {
  register,
  authenticate,
};