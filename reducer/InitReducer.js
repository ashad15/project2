import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   loginInfo: {},
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setLoginInfo: (state, action) => {
      state.loginInfo = action.payload;
    },
  },
});

export const { setLoginInfo } = appSlice.actions;
export default appSlice.reducer;