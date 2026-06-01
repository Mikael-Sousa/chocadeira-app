import { Redirect, Slot } from "expo-router";
import { ActivityIndicator, View } from "react-native";

import Navbar from "@/src/components/navigation/Navbar";
import { useAuth } from "@/src/hooks/auth/useAuth";
import { useTemperatureAlerts } from "@/src/hooks/alerts/useTemperatureAlerts";

export default function TabsLayout() {
  const { authenticated, loading } = useAuth();
  useTemperatureAlerts();

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ActivityIndicator />
      </View>
    );
  }

  if (!authenticated) {
    return <Redirect href="/(auth)/login" />;
  }

  return (
    <>
      <Slot />
      <Navbar />
    </>
  );
}