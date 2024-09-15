import { createSlice } from "@reduxjs/toolkit";

const txSlice = createSlice({
  name: "txSlice",
  initialState: {
    modalOpen: false,
  },
  reducers: {
    openModal: (state) => {
      state.modalOpen = true;
    },
    closeModal: (state) => {
      state.modalOpen = false;
    },
  },
});

export const txActions = txSlice.actions;

export default txSlice;
