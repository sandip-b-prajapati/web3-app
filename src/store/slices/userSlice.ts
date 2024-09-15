import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    address: "0x",
  },
  reducers: {
    setAddress(state, action) {
      state.address = action.payload;
    },
  },
});
export const userActions = userSlice.actions;
export default userSlice;
