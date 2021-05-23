import React from "react";
import { Text, StyleSheet, Pressable } from "react-native";

import theme from "../theme/theme";

const Button = (props) => {
  const buttonEffect = (pressed) => {
    let bg;

    if (pressed && !props.secondary) {
      bg = theme.colors.primaryPressed;
    } else if (!props.secondary) {
      bg = theme.colors.primary;
    }

    if (pressed && props.secondary) {
      bg = theme.colors.secondaryPressed;
    } else if (props.secondary) {
      bg = theme.colors.secondary;
    }

    return [
      {
        backgroundColor: bg,
      },
      styles.button,
    ];
  };

  return (
    <Pressable
      onPress={props.pressed}
      style={({ pressed }) => buttonEffect(pressed)}
    >
      <Text style={styles.text}>{props.title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: theme.margins.borderRadius,
    elevation: 3,
  },
  text: {
    color: "#fff",
    fontSize: 20,
  },
});

export default Button;
