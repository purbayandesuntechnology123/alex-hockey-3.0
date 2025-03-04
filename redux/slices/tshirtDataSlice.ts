import { imageLink } from "@/constants/image";
import { colorObj, TshirtState } from "@/interface/tshirtinterface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: TshirtState = {
    countNum: 5,
    value: 0,
    tshirtId: "",
    buttonColor: [
      { id: "1", color: "#9BB8D3" },
      { id: "2", color: "#69B3E7" },
      { id: "3", color: "#0C2340" },
      { id: "4", color: "#FFFF" },
    ],
    tshirtData: [
      {
        id: "1",
        frontImage: imageLink.tshirtFront,
        backImage: imageLink.tshirtBack,
        tshirtFrontOption: {
          template: "Plain",
          chestStripingName: "None",
        },
      },
      {
        id: "2",
        frontImage: imageLink.chestStripping,
        backImage: imageLink.tshirtBack,
        tshirtFrontOption: {
          template: "Plain",
          chestStripingName: "None",
        },
      },
      {
        id: "3",
        frontImage: imageLink.chestStripping,
        backImage: imageLink.tshirtBack,
        tshirtFrontOption: {
          template: "mordern",
          chestStripingName: "None",
        },
      }
    ],
  };

  const tshirtDataSlice  = createSlice({
    name: "reduxTshirt",
    initialState,
    reducers: {
      setTemplateTypeFront: (state, action: PayloadAction<{ tshirtId: string, data: string }>) => {
        console.log("0000000======>",action.payload);
        const tshirt = state.tshirtData.find(
          (tshirt) => tshirt.id === action.payload.tshirtId
        );
        if (tshirt && tshirt.tshirtFrontOption) {
          tshirt.tshirtFrontOption.template = action.payload.data;
        }
        // const index = state.tshirtData.findIndex(tshirt => tshirt.id === action.payload.tshirtId);
        // if (index !== -1 && state.tshirtData[index].tshirtFrontOption) {
        //   state.tshirtData[index].tshirtFrontOption.template = action.payload.data;
        // }
        // if (state.tshirtData[0].tshirtFrontOption) {
        //   state.tshirtData[0].tshirtFrontOption.template = action.payload;
        // }
      },
      setChestStripingTypeFront: (state, action: PayloadAction<{ tshirtId: string, data: string }>) => {
        console.log("0000000======>",action.payload);
        const tshirt = state.tshirtData.find(
          (tshirt) => tshirt.id === action.payload.tshirtId
        );
        if (tshirt && tshirt.tshirtFrontOption) {
          tshirt.tshirtFrontOption.chestStripingName = action.payload.data;
        }
      },
      setTshirtId: (state, action: PayloadAction<string>) => {
        state.tshirtId = action.payload;
      },
      setTshirtcolor: (state, action: PayloadAction<any>) => {
        state.buttonColor = action.payload
      }
    }
  })

  export const { setTemplateTypeFront, setTshirtId, setChestStripingTypeFront, setTshirtcolor } = tshirtDataSlice.actions;

export default tshirtDataSlice.reducer;