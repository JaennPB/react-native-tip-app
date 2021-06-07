import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

import theme from "../theme/theme";

// =====================================================================
// =========================================================== component

const OutputSection = (props) => {
  const tip = useSelector((state) => state.tip);
  const tipPerPerson = useSelector((state) => state.tipPerPerson);
  const totalWithTip = useSelector((state) => state.totalWithTip);
  const tipPercent = useSelector((state) => state.tipPercent);
  const dividedBy = useSelector((state) => state.dividedBy);

  return (
    <>
      <View style={styles.outputContainer}>
        <Text style={styles.results}>Tip ({tipPercent}%)</Text>
        <Text style={styles.results}>${tip.toFixed(2)}</Text>
      </View>
      <View style={styles.outputContainer}>
        <Text style={styles.results}>Tip per person ({dividedBy})</Text>
        <Text style={styles.results}>${tipPerPerson.toFixed(2)}</Text>
      </View>
      <View style={styles.outputContainerTotal}>
        <Text style={styles.resultsTotal}>Total with tip:</Text>
        <Text style={styles.resultsTotal}>${totalWithTip.toFixed(2)}</Text>
      </View>
    </>
  );
};

// ==================================================================
// =========================================================== styles

const defaultOutputStyles = StyleSheet.create({
  results: {
    fontSize: 20,
  },
  outputContainer: {
    backgroundColor: theme.colors.inputLight,
    borderRadius: theme.margins.borderRadius,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});

const styles = StyleSheet.create({
  outputContainer: {
    ...defaultOutputStyles.outputContainer,
  },
  outputContainerTotal: {
    ...defaultOutputStyles.outputContainer,
    backgroundColor: theme.colors.primary,
    marginBottom: 0,
  },
  results: {
    ...defaultOutputStyles.results,
    color: theme.colors.tertiary,
  },
  resultsTotal: {
    ...defaultOutputStyles.results,
    color: theme.colors.font,
  },
});

export default OutputSection;
