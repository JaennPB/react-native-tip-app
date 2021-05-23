import React from "react";
import { Text, Image, View, StyleSheet } from "react-native";
import theme from "../theme/theme";

const Title = () => {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/hand.png")} style={styles.img} />
      <Text style={styles.title}>Tip app</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    color: theme.colors.font,
  },
  img: {
    marginRight: 10,
  },
});

export default Title;
