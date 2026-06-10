import devicesModel from "./devices.model"

const getDeviceById = async (deviceId: string) => {
  const device = await devicesModel.getDeviceById(deviceId);
  if (!device) {
    throw new Error("Device not found");
  }
  return device
  }

  const startIncubation = async (deviceId: string) => {
    if (!deviceId) {
      throw new Error("deviceId is required")
    }

    const device = await devicesModel.upsertIncubationStart(deviceId);

    if (
    device &&
    device.incubation_status === "active" &&
    new Date(device.expected_hatch_date) <= new Date()
  ) {
    return completeIncubation(deviceId);
  }


    return device
  };

  const cancelIncubation = async (deviceId: string) => {
    const device = await devicesModel.updateStatus(deviceId, "cancelled");

    if (!device) {
      throw new Error("Device not found");
    }

    return device
  };

  const completeIncubation = async (deviceId: string) => {
    const device = await devicesModel.updateStatus(deviceId, "completed");

    if (!device) {
      throw new Error("Device not found");
    }

    return device
  };

  export default {
    getDeviceById,
    startIncubation,
    cancelIncubation,
    completeIncubation,
  };
