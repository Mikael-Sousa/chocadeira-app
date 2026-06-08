import { useEffect, useState } from 'react';

import { useNotification } from '../notification/useNotification';
import { useWebSocket } from '../websocket/useWebSocket';
import { getToken } from "@/src/services/auth/storage";

import { postNotificationsAPI } from '@/src/services/api/notifications/postNotifications';

export function useTemperatureAlerts() {
    const { sendNotification } = useNotification();
    const { history } = useWebSocket();

    const [notificationSent, setNotificationSent] = useState({
        humidity: false,
        waterTemp: false,
        airTemp: false,
    })

    useEffect(() => {
        history.forEach(async (row, index) => {
            const token = await getToken();
            
            if (row.length < 10) return;

            if (index === 0) {
                const high = row.filter(v => v > 55).length > 8;
                const low = row.filter(v => v < 50).length > 8;
                if (!notificationSent.humidity && low) {
                    sendNotification(
                        'Umidade Baixa',
                        'A umidade está muito baixa!'
                    );
                    await postNotificationsAPI(
                        token,
                        {
                            sensor: 'humidity',
                            status: 'low',
                            value: row[row.length - 1],
                        }
                    );
                    setNotificationSent(prev => ({ ...prev, humidity: true }));
                }
                else if (!notificationSent.humidity && high) {
                    sendNotification(
                        'Umidade Alta',
                        'A umidade está muito alta!'
                    );
                    await postNotificationsAPI(
                        token,
                        {
                            sensor: 'humidity',
                            status: 'high',
                            value: row[row.length - 1],
                        }
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
                    await postNotificationsAPI(
                        token,
                        {
                            sensor: 'water_temperature',
                            status: 'high',
                            value: row[row.length - 1],
                        }
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
                    await postNotificationsAPI(
                        token,
                        {
                            sensor: 'water_temperature',
                            status: 'low',
                            value: row[row.length - 1],
                        }
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
                    await postNotificationsAPI(
                        token,
                        {
                            sensor: 'air_temperature',
                            status: 'high',
                            value: row[row.length - 1],
                        }
                    );
                    setNotificationSent(prev => ({ ...prev, airTemp: true }));
                }

                else if (!notificationSent.airTemp && low) {
                    sendNotification(
                        'Temperatura Baixa',
                        'A temperatura do ar está muito baixa!'
                    );
                    await postNotificationsAPI(
                        token,
                        {
                            sensor: 'air_temperature',
                            status: 'low',
                            value: row[row.length - 1],
                        }
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