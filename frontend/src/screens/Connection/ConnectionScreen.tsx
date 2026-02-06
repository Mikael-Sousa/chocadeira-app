import { View } from "react-native";
import InfoCard from "@/src/components/InfoCard";
import InfoHeader from "@/src/components/InfoHeader";
import { styles } from "./connection.styles";
import { useConnection } from "./useConnection";

export function ConnectionScreen() {
  const { connections, lastConnection } = useConnection();

  return (
    <View style={styles.container}>
      <InfoHeader title="Chokedex" />

      <InfoCard
        data={connections}
        showModal={false}
        showMenu={false}
        title="Conexão"
      />

      <InfoCard
        data={lastConnection}
        showModal
        showMenu={false}
        title="Última conexão"
        situations={[]}
      />
    </View>
  );
}
