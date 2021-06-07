import React from "react";
import { View, StyleSheet, Alert, Keyboard } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import Button from "../components/Button";
import Data from "../components/Data";

import { calculateBill, clearInputs } from "../store/reducer";

// =====================================================================
// =========================================================== component

const InputSection = (props) => {
  const dispatch = useDispatch();
  const billValue = useSelector((state) => state.billAmount);
  const tipPercent = useSelector((state) => state.tipPercent);

  const clearHandler = () => {
    dispatch(clearInputs());
  };

  const calcHandler = () => {
    if (billValue && tipPercent) {
      Keyboard.dismiss();
      dispatch(calculateBill());
    } else {
      Alert.alert("Error", "Please add valid values 😉");
    }
  };

  return (
    <>
      <View>
        <Data />
      </View>
      <View style={styles.buttonSection}>
        <Button title="Clear" pressed={clearHandler} secondary />
        <Button
          title="Calculate"
          pressed={calcHandler}
          disabled={!billValue || !tipPercent}
        />
      </View>
    </>
  );
};

// ==================================================================
// =========================================================== styles

const styles = StyleSheet.create({
  buttonSection: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 20,
  },
});

export default InputSection;
