import { Pressable, Text, View } from "react-native";
import { createStyles } from "./styles";

type Props = {
  title: string;
  setIndexSelected: React.Dispatch<React.SetStateAction<number>>;
  theme: any;
};

export default function ArrowButton({ title, setIndexSelected, theme }: Props) {
  const styles = createStyles(theme);

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() =>
  setIndexSelected(prev => {
    const max = 2;
    const direction = title === "left" ? -1 : 1;

    const next = prev + direction;

    if (next < 0) return max;
    if (next > max) return 0;

    return next;
  })
}

        style={styles.btn}
      >
        <Text style={styles.title}>{title === "left" ? "<" : ">"}</Text>
      </Pressable>
    </View>
  );
}
