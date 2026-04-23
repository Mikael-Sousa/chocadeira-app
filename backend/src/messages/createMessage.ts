export type Message =
    | { type: "CONNECT"; deviceId: string; payload: null }
    | { type: "DATA"; deviceId: string; payload: { value: number } }
    | { type: "DISCONNECT"; deviceId: string; payload: null };

export function createMessage<T extends Message>(
  message: T
): T {
  return message;
}