import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {},
};

const profile = createSlice({
  name: "profile",
  initialState,
  reducers: {
    addProfile: (state, action) => {
      state.data = action.payload;
    },
    editProfile: (state, action) => {
      state.data = action.payload;
    },
    removeProfile: (state) => {
      state.data = null;
    },
  },
});

export const { addProfile, editProfile, removeProfile } = profile.actions;
export default profile.reducer;
