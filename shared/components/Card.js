import React from "react";
import { View, StyleSheet } from "react-native";

import theme from "../theme/theme";

// =====================================================================
// =========================================================== component

const Card = (props) => {
  const cardStyles = () => {
    let updatedCardStyles = [styles.card];
    updatedCardStyles.push({ paddingVertical: props.title ? 10 : 25 });
    return updatedCardStyles;
  };
  return <View style={cardStyles()}>{props.children}</View>;
};

// ==================================================================
// =========================================================== styles

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.card,
    borderRadius: theme.margins.borderRadius,
    width: "95%",
    paddingHorizontal: 25,
    marginBottom: 20,
    elevation: 6,
  },
});

export default Card;
