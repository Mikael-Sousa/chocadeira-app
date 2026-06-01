import * as Notifications from 'expo-notifications';

import {
  createContext,
  useCallback,
  useEffect,
  useState,
} from 'react';

import { Platform } from 'react-native';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowBanner: true,
    shouldShowList: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

type NotificationContextData = {
  permissionGranted: boolean;

  checkPermission: () => Promise<boolean>;
  requestPermission: () => Promise<boolean>;

  sendNotification: (
    title: string,
    body: string
  ) => Promise<void>;
};

export const NotificationContext =
  createContext({} as NotificationContextData);

export function NotificationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [permissionGranted, setPermissionGranted] =
    useState(false);

  useEffect(() => {
    async function configureNotifications() {
      if (Platform.OS === 'android') {
        await Notifications.setNotificationChannelAsync(
          'alerts',
          {
            name: 'Alertas',
            importance:
              Notifications.AndroidImportance.MAX,
            vibrationPattern: [
              0,
              250,
              250,
              250,
            ],
            enableVibrate: true,
            sound: 'default',
          }
        );
      }
    }

    configureNotifications();
    checkPermission();
  }, []);

  const checkPermission =
    useCallback(async () => {
      try {
        const { status } =
          await Notifications.getPermissionsAsync();

        const granted = status === 'granted';

        setPermissionGranted(granted);

        return granted;
      } catch (error) {
        console.warn(
          'Erro ao verificar permissão:',
          error
        );

        return false;
      }
    }, []);

  const requestPermission =
    useCallback(async () => {
      try {
        const currentPermission =
          await Notifications.getPermissionsAsync();

        if (
          currentPermission.status ===
          'granted'
        ) {
          setPermissionGranted(true);

          return true;
        }

        const { status } =
          await Notifications.requestPermissionsAsync();

        const granted = status === 'granted';

        setPermissionGranted(granted);

        return granted;
      } catch (error) {
        console.warn(
          'Erro ao solicitar permissão:',
          error
        );

        return false;
      }
    }, []);

  const sendNotification =
    useCallback(
      async (
        title: string,
        body: string
      ) => {
        try {
          const granted =
            await requestPermission();

          if (!granted) {
            return;
          }

          await Notifications.scheduleNotificationAsync(
            {
              content: {
                title,
                body,
                sound: 'default',
                priority:
                  Notifications.AndroidNotificationPriority.MAX,
              },
              trigger: null,
            }
          );

          console.log(
            'Notificação enviada com sucesso.'
          );
        } catch (error) {
          console.warn(
            'Erro ao enviar notificação:',
            error
          );
        }
      },
      [requestPermission]
    );

  return (
    <NotificationContext.Provider
      value={{
        permissionGranted,
        checkPermission,
        requestPermission,
        sendNotification,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
}