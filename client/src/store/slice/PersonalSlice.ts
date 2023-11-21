import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

type Personal = {
  sub: null | string;
  firstName: null | string;
  lastName: null | string;
  profile: undefined | string;
  status: null | string;
  camp: string[];
};

type InitialState = {
  data: Personal | null;
  isLoggedIn: boolean;
};

const initialState: InitialState = {
  data: null,
  isLoggedIn: false,
};

const personalSlice = createSlice({
  name: "personal",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchPersonal.fulfilled, (state, action) => {
        state.data = action.payload;
        if (state.data === null) {
          state.isLoggedIn = false;
        } else {
          state.isLoggedIn = true;
        }
      })
      .addCase(fetchPersonal.rejected, (state) => {
        state.isLoggedIn = false;
      }),
});

export const fetchPersonal = createAsyncThunk<Personal>("personal/fetchPersonal", async () => {
  const response = await fetch("http://localhost:3000/personal");
  const data: Personal = await response.json();
  return data;
});

export default personalSlice.reducer;
