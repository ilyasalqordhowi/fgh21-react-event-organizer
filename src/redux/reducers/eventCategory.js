import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listEventCategry: [],
};
console.log(initialState);

const events = createSlice({
  name: "events",
  initialState,
  reducers: {
    eventCategory: (state, action) => {
      state.listEventCategry = action.payload;
    },
  },
});

export const { eventCategory } = events.actions;
export default events.reducer;
