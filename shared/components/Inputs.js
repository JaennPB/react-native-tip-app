import React from "react";
import { TextInput } from "react-native";

// =====================================================================
// =========================================================== component

const Inputs = (props) => {
  return (
    <TextInput
      style={props.inputStyles}
      placeholder={props.placeholder}
      onChangeText={props.onChangeText}
      value={props.value}
      keyboardType="numeric"
      returnKeyType="done"
    />
  );
};

// ==================================================================
// =========================================================== styles

export default Inputs;
