import settingsModel from "./settings.model";

const createSettings = async (userId: number) => {
  const settings = await settingsModel.create(userId);

  return {
    status: 201,
    data: settings,
  };
};

const getSettings = async (userId: number) => {
  const settings = await settingsModel.findByUserId(userId);

  if (!settings) {
    return {
      status: 404,
      message: "Settings not found"
    };
  }

  return {
    status: 200,
    data: settings
  };
};

const updateSettings = async (userId: number, data: { notificationsEnabled: boolean }) => {
  const updated = await settingsModel.update(userId, data);

  if (!updated) {
    return {
      status: 404,
      message: "Settings not found"
    };
  }

  return {
    status: 200,
    data: updated
  };
};

export default {
  createSettings,
  getSettings,
  updateSettings
};