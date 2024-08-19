import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listBooking: [],
};
console.log(initialState);

const booking = createSlice({
  name: "booking",
  initialState,
  reducers: {
    myBooking: (state, action) => {
      state.listBooking = action.payload;
    },
  },
});

export const { myBooking } = booking.actions;
export default booking.reducer;
