import { SafeAreaView } from "react-native-safe-area-context";
import { View } from "react-native";
import InfoCard from "@/src/components/cards/InfoCard";
import InfoHeader from "@/src/components/headers/InfoHeader";
import { useHistory } from "./useHistory";
import { styles } from "./history.styles";

export function HistoryScreen() {
  const { history } = useHistory();

  return (
    <SafeAreaView style={styles.container} edges={[]} >
      <View style={styles.content}>
        <InfoHeader icon="history" title="Histórico" />
        <InfoCard data={history} showModal={false} showMenu={false} />
      </View>
    </SafeAreaView>
  );
}
