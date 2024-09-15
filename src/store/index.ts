import { configureStore } from "@reduxjs/toolkit";
import chainSlice from "./slices/chainSlice";
import tokenSlice from "./slices/tokenSlice";
import userSlice from "./slices/userSlice";
import txSlice from "./slices/txSlice";

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    chain: chainSlice.reducer,
    token: tokenSlice.reducer,
    tx: txSlice.reducer,
  },
});

export type IRootState = ReturnType<typeof store.getState>;

export default store;
