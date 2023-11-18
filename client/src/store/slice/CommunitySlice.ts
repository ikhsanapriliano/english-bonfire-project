import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../store";

type community = {
  sub: string;
  firstName: string;
  lastName: string;
  profile: string;
  status: string;
};

type InitialState = {
  data: community[];
  loading: boolean;
  error: any;
};

const initialState: InitialState = {
  data: [],
  loading: false,
  error: null,
};

const communitySlice = createSlice({
  name: "community",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const fetchData = createAsyncThunk<community[]>("community/fetchData", async () => {
  const response = await fetch("http://localhost:3000/community");
  const data: community[] = await response.json();
  return data;
});

export default communitySlice.reducer;
