// contexts/NotificationContext.tsx


import * as Notifications from 'expo-notifications';

import {
  createContext,
  useCallback,
  useEffect,
  useState,
} from 'react';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowBanner: true,
    shouldShowList: true,
    shouldPlaySound: false,
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
          'Erro ao verificar permissão de notificação:',
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

        if (!granted) {
          console.warn(
            'Permissão de notificação negada pelo usuário.'
          );
        }

        return granted;
      } catch (error) {
        console.warn(
          'Erro ao solicitar permissão de notificação:',
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
            console.warn(
              'Não foi possível enviar notificação: permissão negada.'
            );

            return;
          }

          await Notifications.scheduleNotificationAsync(
            {
              content: {
                title,
                body,
              },

              trigger: null,
            }
          );

          console.log(
            'Notificação enviada com sucesso.'
          );
        } catch (error) {
          console.warn(
            'Erro ao enviar notificação local:',
            error
          );
        }
      },
      [requestPermission]
    );

  useEffect(() => {
    checkPermission();
  }, [checkPermission]);

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