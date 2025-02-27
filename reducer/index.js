import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./AppReducer"; // Example reducer

export const store = configureStore({
  reducer: {
    app: appReducer, // Add more reducers here
  },
});