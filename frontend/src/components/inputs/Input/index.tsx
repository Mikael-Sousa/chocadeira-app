import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
} from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import { useTheme } from "@/src/hooks/theme/useTheme";

import { createStyles } from "./styles";
import { Props } from "./types";

export default function Input({
  label,
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  keyboardType,
}: Props) {
  const { theme } = useTheme();

  const styles = createStyles(theme);

  const [showPassword, setShowPassword] =
    useState(false);

  const isPassword = secureTextEntry;

  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        {label}
      </Text>

      <View style={styles.inputContainer}>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={theme.secondary}
          secureTextEntry={
            isPassword && !showPassword
          }
          keyboardType={keyboardType}
          style={styles.input}
        />

        {isPassword && (
          <Pressable
            onPress={() =>
              setShowPassword(!showPassword)
            }
          >
            <MaterialCommunityIcons
              name={
                showPassword
                  ? "eye-off"
                  : "eye"
              }
              style={styles.icon}
            />
          </Pressable>
        )}
      </View>
    </View>
  );
}