import React from "react";
import { Text, Pressable, StyleSheet } from "react-native";
import theme from "../theme/theme";

const ModifyButtons = (props) => {
  const buttonStyle = (pressed) => {
    let style = [styles.button];

    if (pressed) {
      style.push({ backgroundColor: theme.colors.inputLight });
    }

    return style;
  };

  return (
    <Pressable
      style={({ pressed }) => buttonStyle(pressed)}
      onPress={props.pressed}
      disabled={props.disabled}
    >
      <Text>{props.children}</Text>
    </Pressable>
  );
};

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
