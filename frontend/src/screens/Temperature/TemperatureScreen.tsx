import { SafeAreaView } from "react-native-safe-area-context";
import { View } from "react-native";
import InfoCard from "@/src/components/InfoCard";
import StatusHeader from "@/src/components/StatusHeader";
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
          title=""
          situations={situations}
        />
      </View>
    </SafeAreaView>
  );
}
