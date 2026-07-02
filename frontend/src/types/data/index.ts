export type SensorData = {
  type: "DATA";
  device_id: string;
  payload: {
    telemetry: Telemetry;
    status: DeviceStatus;
  };
};

type Telemetry = {
  humidity: number;
  water_temperature: number;
  air_temperature: number;
};

type DeviceStatus = {
  uptime: number;
  rotations_today: number;
  is_door_open: boolean;
  expected_hatch_date: string | null;
};