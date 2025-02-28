import { configureStore } from "@reduxjs/toolkit";
import initReducer from "./InitReducer"; // Example reducer

export const store = configureStore({
  reducer: {
    init: initReducer, // Add more reducers here
  },
});