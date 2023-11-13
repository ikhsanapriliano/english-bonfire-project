import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
  value: boolean;
};

const initialState: InitialState = {
  value: true,
};

const changingSlice = createSlice({
  name: "starter",
  initialState,
  reducers: {
    changing: (state) => {
      state.value = !state.value;
    },
  },
});

export const { changing } = changingSlice.actions;
export default changingSlice.reducer;
