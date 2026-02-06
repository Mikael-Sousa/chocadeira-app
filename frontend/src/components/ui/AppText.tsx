import { Text as RNText, TextProps } from "react-native";
import { useContext } from "react";
import { ThemeContext } from "../../app/_layout"

export function AppText({ style, ...props }: TextProps) {
    const { theme } = useContext(ThemeContext)!;

    return (
        <RNText
            {...props}
            style={[
                {
                    fontFamily: theme.fontRegular,
                    color: theme.primary,
                },
                style,
            ]}
        />
    );
}