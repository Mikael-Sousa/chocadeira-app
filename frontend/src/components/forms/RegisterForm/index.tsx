import { useState } from "react";

import {
  View,
  Text,
  Pressable,
  ActivityIndicator,
} from "react-native";

import { useTheme } from "@/src/hooks/theme/useTheme";
import Input from "@/src/components/inputs/Input";
import { createStyles } from "./styles";
import { useRouter } from "expo-router";
import { useAuth } from "@/src/contexts/auth/AuthContext";

export default function RegisterForm() {
  const { theme } = useTheme();

  const styles = createStyles(theme);

  const { signUp } = useAuth();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const router = useRouter()

  const handleLogin = async () => {
    try {
      setLoading(true);

      await signUp(
        name,
        email,
        password
      )

    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Input
        label="Nome"
        placeholder="Digite seu nome"
        value={name}
        onChangeText={setName}
      />

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
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.buttonText}>
            Criar
          </Text>
        )}
      </Pressable>
      <Pressable
        style={styles.loginButton}
        onPress={() => router.push("/")}
      >
        <Text style={styles.loginButtonText}>
          Já tenho conta
        </Text>
      </Pressable>
    </View>
  );
}