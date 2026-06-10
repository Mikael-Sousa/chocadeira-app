import { OutgoingMessage } from "../types/messages.types";

export function createMessage<T extends OutgoingMessage>(
  message: T
): T {
  return message;
}