import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  like: [],
  jumlah: 0,
};

const likeSlice = createSlice({
  name: "like",
  initialState,
  reducers: {
    addLike(state, actions) {
      const itemIndex = state.like.findIndex(
        (item) => item.nomor === actions.payload.nomor
      );
      if (itemIndex >= 0) {
        state.like[itemIndex].jumlah += 1;
      } else {
        const temp = { ...actions.payload, jumlah: 1 };
        state.like.push(temp);
      }
    },
  },
});

export const { addLike } = likeSlice.actions;

export default likeSlice.reducer;
