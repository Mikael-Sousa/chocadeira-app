import notificationsService from "./notifications.service";

const create = async (req: any, res: any) => {
  const userId = req.user.id;
  const { sensor, status, value } = req.body;

  try {
    const result = await notificationsService.createNotifications({userId, sensor, status, value});
    return res.status(result.status).json(result);

  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const get = async (req: any, res: any) => {
  const userId = req.user.id;

  try {
    const result = await notificationsService.getNotifications(userId);
    return res.status(result.status).json(result);

  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal server error" });
  }
};


export default {
  create,
  get,
};