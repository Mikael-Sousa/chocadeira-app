import {
  createContext,
  useEffect,
  useState,
} from "react";

import {
  getToken,
  saveToken,
  removeToken,
} from "@/src/services/auth/storage";
import { getProfileAPI } from "@/src/services/api/auth/getProfile";
import { loginAPI } from "@/src/services/api/auth/login";

import { router } from "expo-router";

import { registerAPI } from "@/src/services/api/auth/register";

type User = {
  id: number;
  name: string;
  email: string;
};

type AuthContextData = {
  authenticated: boolean;
  loading: boolean;
  user: User | null;
  token: string | null;

  signIn: (
    email: string,
    password: string
  ) => Promise<void>;

  signUp: (
    name: string,
    email: string,
    password: string
  ) => Promise<void>;

  logout: () => Promise<void>;
};
export const AuthContext = createContext(
  {} as AuthContextData
);

export function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [authenticated, setAuthenticated] =
    useState(false);

  const [loading, setLoading] = useState(true);

  const [token, setToken] = useState<string | null>(
    null
  );

  const [user, setUser] = useState<User | null>(
    null
  );

  useEffect(() => {
    loadToken();
  }, []);

  async function loadToken() {
    try {
      const storedToken = await getToken();

      if (!storedToken) {
        setAuthenticated(false);
        setUser(null);
        setToken(null);
        return;
      }

      const user = await getProfileAPI(storedToken);

      setToken(storedToken);
      setUser(user.data);
      setAuthenticated(true);

    } catch (err) {
      console.log(err);

      await removeToken();

      setAuthenticated(false);
      setToken(null);
      setUser(null);

    } finally {
      setLoading(false);
    }
  }

  async function signIn(
    email: string,
    password: string
  ) {

    setLoading(true);

    try {

      const response =
        await loginAPI(
          email,
          password
        );

      const token =
        response.data.token;

      const user =
        response.data.user;

      await saveToken(token);

      setToken(token);
      setUser(user);
      setAuthenticated(true);

      router.replace("/(tabs)");

    } finally {

      setLoading(false);

    }

  }


  async function signUp(
    name: string,
    email: string,
    password: string
  ) {

    setLoading(true);

    try {

      const response = await registerAPI(
        name,
        email,
        password
      );

      const token = response.data.token;
      const user = response.data.user;

      await saveToken(token);

      setToken(token);
      setUser(user);
      setAuthenticated(true);

      router.replace("/(tabs)");

    } catch (err) {

      console.log(err);
      throw err;

    } finally {

      setLoading(false);

    }

  }

  async function logout() {

    setLoading(true);

    await removeToken();

    router.dismissAll();

    setAuthenticated(false);
    setUser(null);
    setToken(null);

    router.replace("/(auth)/login");

    setLoading(false);

  }

  return (
    <AuthContext.Provider
      value={{
        authenticated,
        loading,
        user,
        token,
        signIn,
        signUp,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}