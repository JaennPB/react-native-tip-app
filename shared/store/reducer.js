import { createAction, createReducer } from "@reduxjs/toolkit";

// ===================================================================
// =========================================================== actions

export const setBillData = createAction("tip/setBillData");
export const setTipData = createAction("tip/setTipData");
export const setDividedByData = createAction("tip/setDividedByData");

export const increaseValue = createAction("tip/increaseValue");
export const decreaseValue = createAction("tip/DecreaseValue");

export const calculateBill = createAction("tip/calculateBill");
export const clearInputs = createAction("tip/clearInputs");

// =================================================================
// =========================================================== state

const initialState = {
  billAmount: null,
  tipPercent: 15,
  dividedBy: 1,
  tip: 0,
  tipPerPerson: 0,
  totalWithTip: 0,
};

// ===================================================================
// =========================================================== reducer

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(setBillData, (state, action) => {
    state.billAmount = action.payload;
  });
  builder.addCase(setTipData, (state, action) => {
    state.tipPercent = action.payload;
  });
  builder.addCase(setDividedByData, (state, action) => {
    state.dividedBy = action.payload;
  });
  builder.addCase(calculateBill, (state) => {
    state.tip = +state.billAmount * (+state.tipPercent / 100);
    state.tipPerPerson = +state.tip / +state.dividedBy;
    state.totalWithTip = +state.tip + +state.billAmount;
  });
  builder.addCase(clearInputs, (state) => {
    state.billAmount = 0;
    state.tipPercent = 0;
    state.dividedBy = 1;
    state.tip = 0;
    state.tipPerPerson = 0;
    state.totalWithTip = 0;
  });
  builder.addCase(increaseValue, (state, action) => {
    if (action.payload === "tip") {
      state.tipPercent++;
    } else if (action.payload === "people") {
      state.dividedBy++;
    }
  });
  builder.addCase(decreaseValue, (state, action) => {
    if (action.payload === "tip") {
      state.tipPercent--;
    } else if (action.payload === "people") {
      state.dividedBy--;
    }
  });
});

export default reducer;
