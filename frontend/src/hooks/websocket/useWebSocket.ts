import { useContext } from "react";
import { WebSocketContext } from "../../contexts/websocket/WebSocketContext";

export function useWebSocket() {
  const ctx = useContext(WebSocketContext);

  if (!ctx) {
    throw new Error("useWebSocket must be used inside WebSocketProvider");
  }

  return ctx;
}
