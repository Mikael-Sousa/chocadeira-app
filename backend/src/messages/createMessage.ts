export function createMessage(type: any, deviceId: any, payload: any,) {
    return {
        type: type,
        deviceId: deviceId,
        payload: payload
    }
};