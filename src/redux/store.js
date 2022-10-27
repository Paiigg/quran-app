import { configureStore } from "@reduxjs/toolkit";
import latestSlice from "./QuranSlice/latestSlice";
import likeSlice from "./QuranSlice/likeSlice";
import quranSlice from "./QuranSlice/quranSlice";

const store = configureStore({
  reducer: {
    quran: quranSlice,
    like: likeSlice,
    latest: latestSlice,
  },
});

export default store;
