import { SafeAreaView } from "react-native-safe-area-context";
import { View } from "react-native";
import InfoHeader from "@/src/components/headers/InfoHeader";
import InfoCard from "@/src/components/cards/InfoCard";
import { useSettings } from "./useSettings";
import { styles } from "./settings.styles";

export function SettingsScreen() {
  const { settings } = useSettings();

  return (
    <SafeAreaView style={styles.container} edges={[]}>
      <View style={styles.content}>
        <InfoHeader icon="cog" title="Configurações" />
        <InfoCard typeMenu={"tema"} data={settings} showMenu={true} />
      </View>
    </SafeAreaView>
  );
}
