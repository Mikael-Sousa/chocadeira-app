import { View } from "react-native";
import RegisterForm from "@/src/components/forms/RegisterForm";
import { styles } from "./register.styles";
import InfoHeader from "@/src/components/headers/InfoHeader"

export default function RegisterScreen() {

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <InfoHeader title={"Registro"} icon={"account-plus"}/>
        <RegisterForm />
      </View>
    </View>
  );
}