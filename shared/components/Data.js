import React from "react";
import { Text, TextInput, View, StyleSheet, Alert } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import theme from "../theme/theme";
import ModifyButtons from "./ModifyButton";
import Inputs from "./Inputs";

import {
  setBillData,
  setTipData,
  setDividedByData,
  increaseValue,
  decreaseValue,
} from "../store/reducer";

// =====================================================================
// =========================================================== component

const Input = (props) => {
  const dispatch = useDispatch();

  const billValue = useSelector((state) => state.billAmount);
  const tipValue = useSelector((state) => state.tipPercent);
  const dividedByValue = useSelector((state) => state.dividedBy);

  const sendBillData = (bill) => {
    dispatch(setBillData(bill));
  };

  const sendTipData = (tip) => {
    dispatch(setTipData(tip));
  };

  const sendDividedByData = (dividedBy) => {
    dispatch(setDividedByData(dividedBy));
  };

  const sendIncreaseValue = (type) => {
    dispatch(increaseValue(type));
  };

  const sendDecreaseValue = (type) => {
    dispatch(decreaseValue(type));
  };

  return (
    <>
      <View>
        <Text style={styles.label}>Bill $</Text>
        <Inputs
          inputStyles={styles.billInput}
          placeholder="Your total bill"
          onChangeText={(bill) => sendBillData(bill)}
          value={billValue ? billValue.toString() : null}
        />
      </View>
      <View>
        <Text style={styles.label}>Tip Percent %</Text>
        <View style={styles.InputContainer}>
          <ModifyButtons
            pressed={() => sendDecreaseValue("tip")}
            disabled={tipValue === 1}
            buttonType="-"
          />
          <Inputs
            inputStyles={styles.input}
            placeholder="Your tip in %"
            onChangeText={(tip) => sendTipData(tip)}
            value={tipValue ? tipValue.toString() : null}
          />
          <ModifyButtons
            pressed={() => sendIncreaseValue("tip")}
            buttonType="+"
          />
        </View>
      </View>
      <View>
        <Text style={styles.label}>Divide by</Text>
        <View style={styles.InputContainer}>
          <ModifyButtons
            pressed={() => sendDecreaseValue("people")}
            disabled={dividedByValue === 1}
            buttonType="-"
          />
          <Inputs
            inputStyles={styles.input}
            onChangeText={(divided) => sendDividedByData(divided)}
            value={dividedByValue ? dividedByValue.toString() : null}
          />
          <ModifyButtons
            pressed={() => sendIncreaseValue("people")}
            buttonType="+"
          />
        </View>
      </View>
    </>
  );
};

// ==================================================================
// =========================================================== styles

const defaultInputStyles = StyleSheet.create({
  input: {
    backgroundColor: theme.colors.inputLight,
    color: theme.colors.tertiary,
    borderRadius: theme.margins.borderRadius,
    textAlign: "center",
    flex: 3,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 10,
    marginBottom: 10,
    fontSize: 16,
  },
});

const styles = StyleSheet.create({
  input: {
    ...defaultInputStyles.input,
  },
  billInput: {
    ...defaultInputStyles.input,
    flex: null,
    marginHorizontal: 0,
  },
  InputContainer: {
    display: "flex",
    flexDirection: "row",
  },
  label: {
    color: theme.colors.font,
    fontSize: 20,
    marginBottom: 10,
  },
});

export default Input;
