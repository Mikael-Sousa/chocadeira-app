import { useWebSocket } from "@/src/hooks/websocket/useWebSocket";
import { mapDeviceStatusItems } from "./statistics.mapper";

export function useStatistics() {
    const { sensorData } = useWebSocket();
    const list = mapDeviceStatusItems(sensorData)

    return {
        list,
    };
}
