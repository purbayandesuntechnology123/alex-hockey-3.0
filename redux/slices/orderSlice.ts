import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  isOrderInprogress: false,
};

const orderSlice = createSlice({
  name: "tshirtOrder",
  initialState,
  reducers: {
    isCaptureGoing: (state, action: PayloadAction<boolean>) => {
      state.isOrderInprogress = action.payload;
    },
  },
});

export const { isCaptureGoing } = orderSlice.actions;

export default orderSlice.reducer;
