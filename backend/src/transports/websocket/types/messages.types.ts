export type AuthMessage = {
  type: "auth";
  deviceId: string;
};

export type Telemetry = {
  water_temperature: number;
  air_temperature: number;
  humidity: number;
  timestamp: string; 
};

export type DeviceStatus = {
  uptime: number;
  time_to_hatch: number;
  daily_rotations: number;
  is_door_open: boolean;
  expected_hatch_date: string;
};

export type DataMessage = {
  type: "DATA";
  device_id: string;
  payload: {
    telemetry: Telemetry;
    status: DeviceStatus;
  };
};

export type IncomingMessage =
  | AuthMessage
  | DataMessage;