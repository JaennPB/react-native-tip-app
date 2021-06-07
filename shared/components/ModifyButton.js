import React from "react";
import { Text, Pressable, StyleSheet } from "react-native";

import theme from "../theme/theme";

// =====================================================================
// =========================================================== component

const ModifyButtons = (props) => {
  const buttonStyles = (pressed) => {
    let updatedButtonStyles = [styles.button];

    if (pressed) {
      updatedButtonStyles.push({ backgroundColor: theme.colors.inputLight });
    }

    if (props.disabled) {
      updatedButtonStyles.push({ opacity: 0.5 });
    }

    return updatedButtonStyles;
  };

  return (
    <Pressable
      style={({ pressed }) => buttonStyles(pressed)}
      onPress={props.pressed}
      disabled={props.disabled}
    >
      <Text>{props.buttonType}</Text>
    </Pressable>
  );
};

// ==================================================================
// =========================================================== styles

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.inputDark,
    borderRadius: theme.margins.borderRadius,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 10,
    justifyContent: "center",
  },
});

export default ModifyButtons;
