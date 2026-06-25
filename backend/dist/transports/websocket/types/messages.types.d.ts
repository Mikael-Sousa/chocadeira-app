type DataMessage = {
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
type DeviceAuthMessage = {
    type: "DEVICE_AUTH";
    device_id: string;
};
type AppAuthMessage = {
    type: "APP_AUTH";
    user_id: string;
};
type IncubationStartedMessage = {
    type: "INCUBATION_STARTED";
    device_id: string;
};
type IncubationCancelledMessage = {
    type: "INCUBATION_CANCELLED";
    device_id: string;
};
export type IncomingMessage = DataMessage | DeviceAuthMessage | AppAuthMessage | IncubationStartedMessage | IncubationCancelledMessage;
type IncubationDateMessage = {
    type: "INCUBATION_DATE";
    device_id: string;
    payload: {
        expected_hatch_date: string | null;
        status: string | null;
    };
};
type AckMessage = {
    type: "ACK";
    device_id: string;
    payload: {
        event: string;
        status: "ok" | "error";
        message?: string;
        expected_hatch_date?: string | null;
    };
};
export type OutgoingMessage = DataMessage | IncubationDateMessage | AckMessage;
export {};
//# sourceMappingURL=messages.types.d.ts.map