import React from "react";
import { Text, TextInput, View, StyleSheet, Alert } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import theme from "../theme/theme";
import ModifyButtons from "./ModifyButton";
import {
  setBillData,
  setTipData,
  setDividedByData,
  increaseValue,
  decreaseValue,
} from "../store/reducer";

const Input = (props) => {
  const dispatch = useDispatch();

  const billValue = useSelector((state) => state.billAmount);
  const tipValue = useSelector((state) => state.tipPercent);
  const dividedByValue = useSelector((state) => state.dividedBy);

  const sendBillData = (bill) => {
    if (bill < 0) {
      Alert.alert("Error", "Please add a bill above $0");
    }
    dispatch(setBillData(bill));
  };

  const sendTipData = (tip) => {
    if (tip < 0) {
      Alert.alert("Error", "Please add a tip above 0%");
    }
    dispatch(setTipData(tip));
  };

  const sendDividedByData = (dividedBy) => {
    if (dividedBy < 0) {
      Alert.alert("Error", "Please add more than 1 people");
    }
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
        <TextInput
          style={styles.billInput}
          onChangeText={(bill) => sendBillData(bill)}
          value={billValue ? billValue.toString() : null}
          placeholder="Your total bill"
          keyboardType="numeric"
          returnKeyType="done"
        />
      </View>
      <View>
        <Text style={styles.label}>Tip Percent %</Text>
        <View style={styles.InputContainer}>
          <ModifyButtons
            pressed={() => sendDecreaseValue("tip")}
            disabled={tipValue === 1}
          >
            -
          </ModifyButtons>
          <TextInput
            style={styles.input}
            onChangeText={(tip) => sendTipData(tip)}
            value={tipValue ? tipValue.toString() : null}
            placeholder="Your tip in %"
            keyboardType="numeric"
            returnKeyType="done"
          />
          <ModifyButtons pressed={() => sendIncreaseValue("tip")}>
            +
          </ModifyButtons>
        </View>
      </View>
      <View>
        <Text style={styles.label}>Divide by</Text>
        <View style={styles.InputContainer}>
          <ModifyButtons
            pressed={() => sendDecreaseValue("people")}
            disabled={dividedByValue === 1}
          >
            -
          </ModifyButtons>
          <TextInput
            style={styles.input}
            onChangeText={(divided) => sendDividedByData(divided)}
            value={dividedByValue ? dividedByValue.toString() : null}
            keyboardType="numeric"
            returnKeyType="done"
          />
          <ModifyButtons pressed={() => sendIncreaseValue("people")}>
            +
          </ModifyButtons>
        </View>
      </View>
    </>
  );
};

const stylesDefault = StyleSheet.create({
  inputStyles: {
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
  InputContainer: {
    display: "flex",
    flexDirection: "row",
  },
  label: {
    fontSize: 20,
    color: theme.colors.font,
    marginBottom: 10,
  },
  input: {
    ...stylesDefault.inputStyles,
  },
  billInput: {
    ...stylesDefault.inputStyles,
    flex: null,
    marginHorizontal: 0,
  },
});

export default Input;
