import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
  id: string;
  bivouac: string;
  day: string;
};

const initialState: InitialState = {
  id: "",
  bivouac: "",
  day: "",
};

const campSlice = createSlice({
  name: "camp",
  initialState,
  reducers: {
    addCamp: (state, action) => {
      state.id = action.payload.id;
      state.bivouac = action.payload.bivouac;
      state.day = action.payload.day;
    },
  },
});

export const { addCamp } = campSlice.actions;
export default campSlice.reducer;
