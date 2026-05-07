type Telemetry = {
  water_temperature: number;
  air_temperature: number;
  humidity: number;
  timestamp: string;
};

type DeviceStatus = {
  uptime: number;
  time_to_hatch: number;
  daily_rotations: number;
  is_door_open: boolean;
  expected_hatch_date: string;
};

export type SensorData = {
  telemetry: Telemetry;
  status: DeviceStatus;
};