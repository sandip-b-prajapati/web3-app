import { createSlice } from "@reduxjs/toolkit";

const tokenSlice = createSlice({
  name: "tokenSlice",
  initialState: {
    name: "",
    decimals: 0,
    balance: "",
    symbol: "",
  },
  reducers: {
    setTokenData(state, action) {
      const { name, decimals, balance, symbol } = action.payload;

      state.name = name;
      state.decimals = decimals;
      state.symbol = symbol;
      state.balance = balance;
    },
  },
});

export const tokenActions = tokenSlice.actions;

export default tokenSlice;
