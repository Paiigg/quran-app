import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
  isLoading: false,
};

export const quranFetch = createAsyncThunk("quran/quranFetch", async () => {
  const response = await axios.get("https://equran.id/api/surat");
  return response.data;
});

const quranSlice = createSlice({
  name: "quran",
  initialState,
  extraReducers: {
    [quranFetch.pending]: (state) => {
      state.isLoading = true;
    },
    [quranFetch.fulfilled]: (state, actions) => {
      state.data = actions.payload;
      state.isLoading = false;
    },
    [quranFetch.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default quranSlice.reducer;
