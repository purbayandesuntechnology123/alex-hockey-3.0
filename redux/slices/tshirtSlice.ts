import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
  buttonColor: colorObj[];
}

interface colorObj {
  id?: string;
  color: string;
}

const initialState: CounterState = {
  value: 0,
  buttonColor: [
    { id: "1", color: "#9BB8D3" },
    { id: "2", color: "#69B3E7" },
    { id: "3", color: "#0C2340" },
    { id: "4", color: "#FFFF" },
  ],
};

const tshirtSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    setButtonColor: (state, action: PayloadAction<colorObj[]>) => {
      state.buttonColor = action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount, setButtonColor } =
  tshirtSlice.actions;
export default tshirtSlice.reducer;
