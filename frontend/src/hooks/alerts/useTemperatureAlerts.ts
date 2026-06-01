import { useEffect, useState } from 'react';

import { useNotification } from '../notification/useNotification';
import { useWebSocket } from '../websocket/useWebSocket';

export function useTemperatureAlerts() {
    const { sendNotification } = useNotification();
    const { history } = useWebSocket();

    const [notificationSent, setNotificationSent] = useState({
        humidity: false,
        waterTemp: false,
        airTemp: false,
    })

    useEffect(() => {
        history.forEach((row, index) => {
            if (row.length < 10) return;

            if (index === 0) {
                const high = row.filter(v => v > 55).length > 8;
                const low = row.filter(v => v < 50).length > 8;
                if (!notificationSent.humidity && low) {
                    sendNotification(
                        'Umidade Baixa',
                        'A umidade está muito baixa!'
                    );
                    setNotificationSent(prev => ({ ...prev, humidity: true }));
                }
                else if (!notificationSent.humidity && high) {
                    sendNotification(
                        'Umidade Alta',
                        'A umidade está muito alta!'
                    );
                    setNotificationSent(prev => ({ ...prev, humidity: true }));
                }
                else if (
                    !high &&
                    !low &&
                    notificationSent.humidity
                ) {
                    setNotificationSent(prev => ({
                        ...prev,
                        humidity: false,
                    }));
                }
            }

            if (index === 1) {
                const high = row.filter(v => v > 39).length > 8;
                const low = row.filter(v => v < 38).length > 8;

                if (!notificationSent.waterTemp && high) {
                    sendNotification(
                        'Temperatura Alta',
                        'A temperatura da água está muito alta!'
                    );

                    setNotificationSent(prev => ({
                        ...prev,
                        waterTemp: true,
                    }));
                }

                else if (!notificationSent.waterTemp && low) {
                    sendNotification(
                        'Temperatura Baixa',
                        'A temperatura da água está muito baixa!'
                    );

                    setNotificationSent(prev => ({
                        ...prev,
                        waterTemp: true,
                    }));
                }

                else if (
                    !high &&
                    !low &&
                    notificationSent.waterTemp
                ) {
                    setNotificationSent(prev => ({
                        ...prev,
                        waterTemp: false,
                    }));
                }
            }

            if (index === 2) {
                const high = row.filter(v => v > 37.9).length > 8;
                const low = row.filter(v => v < 37.6).length > 8;
                if (!notificationSent.airTemp && high) {
                    sendNotification(
                        'Temperatura Alta',
                        'A temperatura do ar está muito alta!'
                    );
                    setNotificationSent(prev => ({ ...prev, airTemp: true }));
                }

                else if (!notificationSent.airTemp && low) {
                    sendNotification(
                        'Temperatura Baixa',
                        'A temperatura do ar está muito baixa!'
                    );
                    setNotificationSent(prev => ({ ...prev, airTemp: true }));
                }
                else if (
                    !high &&
                    !low &&
                    notificationSent.airTemp
                ) {
                    setNotificationSent(prev => ({
                        ...prev,
                        airTemp: false,
                    }));
                }
            }
        });
    }, [history, sendNotification, notificationSent]);
}