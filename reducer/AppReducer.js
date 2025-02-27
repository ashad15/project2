import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  randomText: 'hey this is random text',
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setRandomText: (state, action) => {
      state.randomText = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { setUser, logout, setRandomText } = appSlice.actions;
export default appSlice.reducer;