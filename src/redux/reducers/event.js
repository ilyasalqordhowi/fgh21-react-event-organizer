import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listEvent: [],
};
console.log(initialState);

const event = createSlice({
  name: "event",
  initialState,
  reducers: {
    events: (state, action) => {
      state.listEvent = action.payload;
    },
    eventsId: (state, action) => {
      state.listEvent = action.payload;
    },
  },
});

export const { events, eventsId } = event.actions;
export default event.reducer;
