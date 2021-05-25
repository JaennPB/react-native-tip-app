import React from "react";
import { View, StyleSheet } from "react-native";
import theme from "../theme/theme";

const Card = (props) => {
  return (
    <View style={[{ paddingVertical: props.title ? 10 : 25 }, styles.card]}>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.card,
    width: "95%",
    paddingHorizontal: 25,
    borderRadius: theme.margins.borderRadius,
    marginBottom: 20,
    elevation: 6,
  },
});

export default Card;
