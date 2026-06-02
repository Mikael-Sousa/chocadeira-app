import authService from "./auth.service";

const register = async (req: any, res: any) => {
  const { name, email, password } = req.body;

  try {
    const result = await authService.register(name, email, password);
    return res.status(result.status).json(result);

  } catch (err: any) {
    console.error(err);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const login = async (req: any, res: any) => {
  try {
    const { email, password } = req.body;

    const result = await authService.login(email, password);
    return res.status(result.status).json(result);

  } catch (err: any) {
    console.error(err);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const getMe = async (req: any, res: any) => {
    try {
        const userId = req.user.id;
        const result = await authService.getProfileByUserId(userId);
        return res.status(result.status).json(result)

    } catch (err: any) {
        console.error(err);
        return res.status(500).json({ message: "Internal server error" });
    }
};


export default {
  register,
  login,
  getMe
};