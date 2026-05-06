import settingsService from "./settings.service";

const get = async (req: any, res: any) => {
  const userId = req.user.id;

  try {
    const result = await settingsService.getSettings(userId);
    return res.status(result.status).json(result);

  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const update = async (req: any, res: any) => {
  const userId = req.user.id;

  try {
    const result = await settingsService.updateSettings(userId, req.body);
    return res.status(result.status).json(result);

  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export default {
  get,
  update
};