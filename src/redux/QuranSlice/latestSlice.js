import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  latest: [],
  jumlah: 0,
};

const latestSlice = createSlice({
  name: "latest",
  initialState,
  reducers: {
    addLatest(state, actions) {
      const itemIndex = state.latest.findIndex(
        (item) => item.nomor === actions.payload.nomor
      );
      if (itemIndex >= 0) {
        state.latest[itemIndex].jumlah += 1;
      } else {
        const temp = { ...actions.payload, jumlah: 1 };
        state.latest.push(temp);
      }
    },
  },
});

export const { addLatest } = latestSlice.actions;

export default latestSlice.reducer;
