import { DataMessage } from "../types/messages.types";

export type Message =
    | { type: "CONNECT"; deviceId: string; payload: null }
    | DataMessage
    | { type: "DISCONNECT"; deviceId: string; payload: null };

export function createMessage<T extends Message>(
  message: T
): T {
  return message;
}