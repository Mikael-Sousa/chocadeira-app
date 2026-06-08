import notificationsModel from "./notifications.model";
const validSensors = ['humidity', 'water_temperature', 'air_temperature', 'wifi_signal'];
const validStatus = ['low', 'high', 'error'];

const createNotifications = async (
  { userId, sensor, status, value }:
    { userId: number, sensor: string, status: string, value: number }
) => {
  if (!validStatus.includes(status)) {
    return {
      status: 400,
      error: 'Status inválido'
    };
  }

  if (!validSensors.includes(sensor)) {
    return {
      status: 400,
      error: 'Sensor inválido'
    };
  }
  const notifications = await notificationsModel.create({ userId, sensor, status, value });

  return {
    status: 201,
    data: notifications,
  };
};

const getNotifications = async (userId: number) => {
  const notifications = await notificationsModel.findByUserId(userId);

  if (!notifications) {
    return {
      status: 404,
      message: "Notifications not found"
    };
  }

  return {
    status: 200,
    data: notifications
  };
};

export default {
  createNotifications,
  getNotifications,
};