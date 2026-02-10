import React, { useEffect, useState } from "react";
import {
    Modal,
    View,
    Pressable,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { connectionSteps } from "./steps";
import { Text } from "@/src/components/ui";
import ArrowButton from "../../buttons/ArrowButton";
import { useTheme } from "@/src/theme/useTheme";
import { createStyles } from "./styles";

export interface Props {
    visible: boolean;
    setVisible: (value: boolean) => void;
}

export default function ConnectionGuideModal({
    visible,
    setVisible,
}: Props) {
    const { theme } = useTheme();
    const styles = createStyles(theme);

    const [index, setIndex] = useState(0);
    const step = connectionSteps[index];

    const isFirst = index === 0;
    const isLast = index === connectionSteps.length - 1;

    function goNext() {
        if (isLast) {
            setVisible(false);
            return;
        }
        setIndex((prev) => prev + 1);
    }

    function goBack() {
        if (!isFirst) {
            setIndex((prev) => prev - 1);
        }
    }

    useEffect(() => {
        if (!visible) {
            setIndex(0);
        }
    }, [visible]);

    if (!step) return null;

    return (
        <Modal transparent animationType="fade" visible={visible}>
            <View style={styles.overlay}>
                <View style={styles.modalView}>

                    <Text style={styles.title}>Como conectar</Text>

                    <View style={styles.slide}>
                        <Text style={styles.stepTitle}>
                            {step.title}
                        </Text>

                        <View style={styles.card}>
                            <MaterialCommunityIcons
                                name={step.card.icon}
                                size={28}
                                color={theme.primary}
                            />
                            <Text style={styles.cardTitle}>
                                {step.card.title}
                            </Text>
                        </View>

                        {step.cardSecondary && (
                            <View style={styles.card}>
                                <MaterialCommunityIcons
                                    name={step.cardSecondary.icon}
                                    size={28}
                                    color={theme.primary}
                                />
                                <Text style={styles.cardTitle}>
                                    {step.cardSecondary.title}
                                </Text>
                            </View>
                        )}


                        <Text style={styles.description}>
                            {step.description}
                        </Text>

                        <View style={styles.pagination}>
                            {connectionSteps.map((_, i) => (
                                <View
                                    key={i}
                                    style={[
                                        styles.dot,
                                        i === index && styles.dotActive,
                                    ]}
                                />
                            ))}
                        </View>
                    </View>

                    <View style={styles.actions}>
                        <ArrowButton
                            direction="left"
                            theme={theme}
                            disabled={isFirst}
                            onPress={goBack}
                        />

                        <ArrowButton
                            direction="right"
                            theme={theme}
                            onPress={goNext}
                        />
                    </View>


                    <Pressable
                        style={styles.closeButton}
                        onPress={() => setVisible(false)}
                    >
                        <MaterialCommunityIcons
                            name="close"
                            size={22}
                            color={theme.primary}
                        />

                    </Pressable>
                </View>
            </View>
        </Modal>
    );
}
