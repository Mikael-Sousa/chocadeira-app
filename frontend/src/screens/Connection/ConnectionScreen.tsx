import { View } from "react-native";
import InfoCard from "@/src/components/cards/InfoCard";
import InfoHeader from "@/src/components/headers/InfoHeader";
import { styles } from "./connection.styles";
import { useConnection } from "./useConnection";
import { useWebSocket } from "@/src/contexts/websocket/useWebSocket";

export function ConnectionScreen() {
  const { connected } = useWebSocket();
  const { connections, lastConnection } = useConnection(connected);

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
