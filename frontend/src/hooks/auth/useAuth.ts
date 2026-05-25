import { useContext } from "react";
import { AuthContext } from "@/src/contexts/auth/AuthContext";

export function useAuth() {
  return useContext(AuthContext);
}