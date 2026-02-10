import { SafeAreaView } from "react-native-safe-area-context";
import { View } from "react-native";
import InfoHeader from "@/src/components/headers/InfoHeader";
import InfoCard from "@/src/components/cards/InfoCard";
import { useStatistics } from "./useStatistics";
import { styles } from "./statistics.styles";

export function StatisticsScreen() {
  const { statistics } = useStatistics();

  return (
    <SafeAreaView style={styles.container} edges={[]}>
      <View style={styles.content}>
        <InfoHeader icon="chart-box-outline" title="Dados Gerais" />
        <InfoCard data={statistics} showModal={true} />
      </View>
    </SafeAreaView>
  );
}
