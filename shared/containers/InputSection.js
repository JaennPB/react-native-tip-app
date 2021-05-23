import React from "react";
import { View, StyleSheet, Alert } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import Button from "../components/Button";
import Inputs from "../components/Inputs";

import { calculateBill, clearInputs } from "../store/reducer";

const InputSection = (props) => {
  const dispatch = useDispatch();
  const billValue = useSelector((state) => state.billAmount);
  const tipPercent = useSelector((state) => state.tipPercent);

  const clearHandler = () => {
    dispatch(clearInputs());
  };

  const calcHandler = () => {
    if (billValue && tipPercent) {
      dispatch(calculateBill());
    } else {
      Alert.alert("Error", "Please add valid values 😉");
    }
  };

  return (
    <>
      <View>
        <Inputs />
      </View>
      <View style={styles.buttonSection}>
        <Button title="Clear" pressed={clearHandler} secondary />
        <Button title="Calculate" pressed={calcHandler} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  buttonSection: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 20,
  },
});

export default InputSection;
