import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counter";
import darkThemeReducer from "./darkTheme";

const store = configureStore({
  reducer: {
    counterSlice: counterReducer,
    darkThemeSlice: darkThemeReducer,
  },
});

export default store;
