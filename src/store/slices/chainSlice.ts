import { createSlice } from "@reduxjs/toolkit";


const chainSlice = createSlice({
    name: "chainSlice",
    initialState: {
        name: "",
        balance: "",
    },
    reducers: {
        setChainData(state, action) {
            const { name, balance } = action.payload;
            state.name = name;
            state.balance = balance;
        }
    }
});

export const chainActions = chainSlice.actions;

export default chainSlice;