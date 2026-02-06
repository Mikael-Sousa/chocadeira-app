import { SafeAreaView } from "react-native-safe-area-context";
import { View } from "react-native";
import InfoHeader from "@/src/components/InfoHeader";
import InfoCard from "@/src/components/InfoCard";
import { useSettings } from "./useSettings";
import { styles } from "./settings.styles";

export function SettingsScreen() {
  const { settings } = useSettings();

  return (
    <SafeAreaView style={styles.container} edges={["top", "bottom"]}>
      <View style={styles.content}>
        <InfoHeader icon="cog" title="Configurações" />
        <InfoCard data={settings} showModal={false} showMenu={true} title="" />
      </View>
    </SafeAreaView>
  );
}
