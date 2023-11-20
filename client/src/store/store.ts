import { configureStore } from "@reduxjs/toolkit";
import changingReducer from "./slice/slice";
import communityReducer from "./slice/CommunitySlice";
import personalReducer from "./slice/PersonalSlice";
import campReducer from "./slice/CampSlice";

const store = configureStore({
  reducer: {
    starter: changingReducer,
    community: communityReducer,
    personal: personalReducer,
    camp: campReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type appDispatch = typeof store.dispatch;
