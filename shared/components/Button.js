import React from "react";
import { Text, StyleSheet, Pressable } from "react-native";

import theme from "../theme/theme";

// =====================================================================
// =========================================================== component

const Button = (props) => {
  const buttonStyles = (pressed) => {
    let updatedButtonStyles = [styles.button];

    if (pressed && !props.secondary) {
      updatedButtonStyles.push({
        backgroundColor: theme.colors.primaryPressed,
      });
    } else if (!props.secondary) {
      updatedButtonStyles.push({ backgroundColor: theme.colors.primary });
    }

    if (pressed && props.secondary) {
      updatedButtonStyles.push({
        backgroundColor: theme.colors.secondaryPressed,
      });
    } else if (props.secondary) {
      updatedButtonStyles.push({ backgroundColor: theme.colors.secondary });
    }

    return updatedButtonStyles;
  };

  return (
    <Pressable
      onPress={props.pressed}
      style={({ pressed }) => buttonStyles(pressed)}
    >
      <Text style={styles.text}>{props.title}</Text>
    </Pressable>
  );
};

// ==================================================================
// =========================================================== styles

const styles = StyleSheet.create({
  button: {
    borderRadius: theme.margins.borderRadius,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  text: {
    color: theme.colors.font,
    fontSize: 20,
  },
});

export default Button;
