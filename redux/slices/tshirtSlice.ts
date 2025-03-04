import { imageLink } from "@/constants/image";
import { colorObj, TshirtState } from "@/interface/tshirtinterface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// interface CounterState {
//   value: number;
//   buttonColor: colorObj[];
//   tshirtData: tshirtDataObj[];
// }

// interface colorObj {
//   id?: string;
//   color: string;
// }

interface tshirtDataObj {
  id?: string;
  frontImage: string;
  backImage: string;
  tshirtFrontOption: {
    template: string;
  };
}

const initialState: TshirtState = {
  countNum: 5,
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
      console.log("state.tshirtData", state);
    },
    setTemplateType: (state, action: PayloadAction<string>) => {
      console.log("action.payload", action.payload);
      // state.tshirtData[0].tshirtFrontOption.template = "Plain";
    }
  },  
});

export const { increment, decrement, incrementByAmount, setButtonColor, setTemplateType } =
  tshirtSlice.actions;
export default tshirtSlice.reducer;
