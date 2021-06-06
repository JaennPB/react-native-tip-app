import React from "react";
import { Text, Image, View, StyleSheet } from "react-native";

import theme from "../theme/theme";

// =====================================================================
// =========================================================== component

const Title = () => {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/hand.png")} style={styles.img} />
      <Text style={styles.title}>Tip app</Text>
    </View>
  );
};

// ==================================================================
// =========================================================== styles

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    color: theme.colors.font,
    fontSize: 30,
  },
  img: {
    marginRight: 10,
    height: 55,
    width: 55,
  },
});

export default Title;
