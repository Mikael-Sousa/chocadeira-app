import { Platform } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const TOKEN_KEY = "app_token";

// Tenta usar SecureStore, mas fallback para AsyncStorage se não disponível
let SecureStore: any = null;

const initSecureStore = async () => {
  if (SecureStore) return;
  
  try {
    SecureStore = await import("expo-secure-store");
  } catch (error) {
    console.log(error);
    console.warn(
      "SecureStore não disponível, usando AsyncStorage como fallback"
    );
    SecureStore = null;
  }
};

initSecureStore();

export async function saveToken(token: string) {
  if (Platform.OS === "web") {
    return localStorage.setItem(TOKEN_KEY, token);
  }

  // Se SecureStore estiver disponível, usa ele; caso contrário, usa AsyncStorage
  if (SecureStore) {
    try {
      return await SecureStore.setItemAsync(TOKEN_KEY, token);
    } catch (error) {
      console.log(error);
      console.warn("Erro ao salvar em SecureStore, usando AsyncStorage");
      return await AsyncStorage.setItem(TOKEN_KEY, token);
    }
  } else {
    return await AsyncStorage.setItem(TOKEN_KEY, token);
  }
}

export async function getToken() {
  if (Platform.OS === "web") {
    return localStorage.getItem(TOKEN_KEY);
  }

  // Se SecureStore estiver disponível, usa ele; caso contrário, usa AsyncStorage
  if (SecureStore) {
    try {
      return await SecureStore.getItemAsync(TOKEN_KEY);
    } catch (error) {
      console.log(error);
      console.warn("Erro ao recuperar de SecureStore, usando AsyncStorage");
      return await AsyncStorage.getItem(TOKEN_KEY);
    }
  } else {
    return await AsyncStorage.getItem(TOKEN_KEY);
  }
}

export async function removeToken() {
  if (Platform.OS === "web") {
    return localStorage.removeItem(TOKEN_KEY);
  }

  // Se SecureStore estiver disponível, usa ele; caso contrário, usa AsyncStorage
  if (SecureStore) {
    try {
      return await SecureStore.deleteItemAsync(TOKEN_KEY);
    } catch (error) {
      console.log(error);
      console.warn("Erro ao deletar de SecureStore, usando AsyncStorage");
      return await AsyncStorage.removeItem(TOKEN_KEY);
    }
  } else {
    return await AsyncStorage.removeItem(TOKEN_KEY);
  }
}