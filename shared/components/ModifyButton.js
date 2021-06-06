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

    return updatedButtonStyles;
  };

  return (
    <Pressable
      style={({ pressed }) => buttonStyles(pressed)}
      onPress={props.pressed}
      disabled={props.disabled}
    >
      <Text>{props.children}</Text>
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
    elevation: 3,
    justifyContent: "center",
  },
});

export default ModifyButtons;
