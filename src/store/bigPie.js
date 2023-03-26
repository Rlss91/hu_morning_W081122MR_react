import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counter";

const store = configureStore({
  reducer: {
    counterSlice: counterReducer,
  },
});

export default store;
