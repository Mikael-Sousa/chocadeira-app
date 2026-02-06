import { MaterialCommunityIcons } from "@expo/vector-icons";

export type Props = {
  title: string;
  icon?: React.ComponentProps<typeof MaterialCommunityIcons>["name"] | "none";
};