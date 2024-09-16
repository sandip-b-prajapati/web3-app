import { createSlice } from "@reduxjs/toolkit";

const txSlice = createSlice({
  name: "txSlice",
  initialState: {
    modalOpen: false,
    trasferData: [],
  },
  reducers: {
    openModal: (state) => {
      state.modalOpen = true;
    },
    closeModal: (state) => {
      state.modalOpen = false;
    },
    addTransferData: (state, action) => {
      state.trasferData = action.payload;
    },
  },
});

export const txActions = txSlice.actions;

export default txSlice;
