import { useState } from "react";

import {
  View,
  Text,
  Pressable,
  ActivityIndicator,
} from "react-native";

import { useTheme } from "@/src/hooks/theme/useTheme";
import { colors } from "@/src/constants/colors";
import Input from "@/src/components/inputs/Input";
import { useAuth } from "@/src/hooks/auth/useAuth";
import { createStyles } from "./styles";
import { useRouter } from "expo-router";

export default function LoginForm() {
  const { theme } = useTheme();

  const styles = createStyles(theme);
  const { signIn } = useAuth();

  const router = useRouter()

  const [email, setEmail] = useState("");
  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const handleLogin = async () => {
    try {
      setLoading(true);

      await signIn(
        email,
        password
      );

    } catch (err) {
      console.log(err)
      alert(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Input
        label="Email"
        placeholder="Digite seu email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <Input
        label="Senha"
        placeholder="Digite sua senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <Pressable
        style={styles.button}
        onPress={handleLogin}
      >
        {loading ? (
          <ActivityIndicator color={colors.white} />
        ) : (
          <Text style={styles.buttonText}>
            Entrar
          </Text>
        )}
      </Pressable>

      <Pressable
        style={styles.registerButton}
        onPress={() => router.push("/register")}
      >
        <Text style={styles.registerButtonText}>
          Criar Conta
        </Text>
      </Pressable>
    </View>
  );
}