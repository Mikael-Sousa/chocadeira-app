import { SafeAreaView } from "react-native-safe-area-context";
import { View } from "react-native";
import InfoCard from "@/src/components/cards/InfoCard";
import StatusHeader from "@/src/components/headers/StatusHeader";
import { useTemperature } from "./useTemperature";
import { styles } from "./temperature.styles";

export function TemperatureScreen() {
  const {
    list,
    history,
    indexSelected,
    setIndexSelected,
    situations,
  } = useTemperature();

  return (
    <SafeAreaView style={styles.container} edges={["top", "bottom"]}>
      <View style={styles.content}>
        <StatusHeader
          title={list[indexSelected].title}
          indexSelected={indexSelected}
          setIndexSelected={setIndexSelected}
          data={history}
        />

        <InfoCard
          data={list}
          showModal={false}
          showMenu={false}
          situations={situations}
        />
      </View>
    </SafeAreaView>
  );
}
