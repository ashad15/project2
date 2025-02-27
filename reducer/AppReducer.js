import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { setUser, logout } = appSlice.actions;
export default appSlice.reducer;