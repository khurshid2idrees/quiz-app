import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchDataAsync = createAsyncThunk(
  "data",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://opentdb.com/api.php?amount=10&category=22&difficulty=easy&type=multiple"
      );
      const data = response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const quizeSlice = createSlice({
  name: "quize",
  initialState: {
    data: [],
    loading: true,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDataAsync.pending, (state, action) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchDataAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchDataAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});


export default quizeSlice.reducer;