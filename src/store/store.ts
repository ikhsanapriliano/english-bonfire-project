import { configureStore } from "@reduxjs/toolkit";
import changingReducer from "./slice/slice";

const store = configureStore({
  reducer: {
    starter: changingReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type appDispatch = typeof store.dispatch;
