"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.simulator = simulator;
//tests
const ws_1 = require("ws");
function futureDate(days) {
    const date = new Date();
    date.setDate(date.getDate() + days);
    return date.toISOString();
}
function onDataFake() {
    return {
        telemetry: {
            water_temperature: Number((37.7 + Math.random() * 0.2).toFixed(2)),
            air_temperature: Number((38.4 + Math.random() * 0.2).toFixed(2)),
            humidity: Math.floor(51 + Math.random() * 3),
        },
        status: {
            uptime: Math.floor(process.uptime()),
            daily_rotations: 6,
            is_door_open: Math.random() > 0.8,
            expected_hatch_date: futureDate(20)
        }
    };
}
function simulator(wss, port) {
    console.log("incoming connection");
    setInterval(() => {
        const payload = onDataFake();
        wss.clients.forEach((client) => {
            if (client.readyState === ws_1.WebSocket.OPEN) {
                client.send(JSON.stringify({
                    type: "DATA",
                    device_id: "SIMULADOR",
                    payload
                }));
            }
        });
        console.log("Payload:", payload);
    }, 3000);
    console.log(`WebSocket is running in the port ${port}`);
}
//# sourceMappingURL=simulator.js.map