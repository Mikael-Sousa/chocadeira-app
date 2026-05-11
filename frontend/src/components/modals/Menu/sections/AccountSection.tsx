// sections/AccountSection.tsx

import { Pressable, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { Text } from "@/src/components/ui";
import { useTheme } from "@/src/theme/useTheme";

import { createStyles } from "../styles";

export default function AccountSection() {

  const { theme } = useTheme();
  const styles = createStyles(theme);

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
            Administrador
          </Text>

          <Text style={styles.accountEmail}>
            incubadora@ifpi.edu.br
          </Text>

        </View>

        <View style={styles.accountButtonsContainer}>

          <Pressable style={styles.accountButton}>
            <MaterialCommunityIcons
              name="account-edit"
              style={styles.accountButtonIcon}
            />

            <Text style={styles.accountButtonText}>
              Editar Perfil
            </Text>
          </Pressable>

          <Pressable style={styles.accountButton}>
            <MaterialCommunityIcons
              name="shield-check"
              style={styles.accountButtonIcon}
            />

            <Text style={styles.accountButtonText}>
              Segurança
            </Text>
          </Pressable>

          <Pressable style={styles.accountButton}>
            <MaterialCommunityIcons
              name="history"
              style={styles.accountButtonIcon}
            />

            <Text style={styles.accountButtonText}>
              Histórico
            </Text>
          </Pressable>

          <Pressable style={styles.logoutButton}>
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