import { View } from "react-native";
import LoginForm from "@/src/components/forms/LoginForm";
import { styles } from "./connection.styles";
import InfoHeader from "@/src/components/headers/InfoHeader";

export default function LoginScreen() {

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <InfoHeader title={"Login"} icon={"login"}/>
        <LoginForm />
      </View>
    </View>
  );
}