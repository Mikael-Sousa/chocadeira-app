// sections/AccountSection.tsx

import { Pressable, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { Text } from "@/src/components/ui";
import { useTheme } from "@/src/hooks/theme/useTheme";

import { createStyles } from "../styles";

import { useAuth } from "@/src/hooks/auth/useAuth";

export default function AccountSection() {

  const { theme } = useTheme();
  const styles = createStyles(theme);

  const { user, logout } = useAuth();

  return (
    <>
      <Text style={styles.modalTitle}>
        Conta
      </Text>

      <View style={styles.accountContainer}>

        <View style={styles.profileSection}>

          <View style={styles.avatar}>
            <MaterialCommunityIcons
              name="account"
              style={styles.avatarIcon}
            />
          </View>

          <Text style={styles.accountName}>
            {user?.name}
          </Text>

          <Text style={styles.accountEmail}>
            {user?.email}
          </Text>

        </View>

        <View style={styles.accountButtonsContainer}>

          <Pressable 
          style={styles.logoutButton}
          onPress={() => logout()}
          >
            <MaterialCommunityIcons
              name="logout"
              style={styles.logoutIcon}
            />

            <Text style={styles.logoutText}>
              Deslogar
            </Text>
          </Pressable>

        </View>
      </View>
    </>
  );
}