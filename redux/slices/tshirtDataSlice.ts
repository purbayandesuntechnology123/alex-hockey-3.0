import { imageLink } from "@/constants/image";
import {
  colorObj,
  tshirtDataObj,
  TshirtState,
} from "@/interface/tshirtinterface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Alert } from "react-native";

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
        template: {
          templateName: "Plain",
          templateColor: [
            { id: 1, color: "#9BB8D3", canChange: true },
            { id: 2, color: "#69B3E7", canChange: true },
            { id: 3, color: "#0C2340", canChange: true },
            { id: 4, color: "#FFFF", canChange: false },
          ]
        },
        chestStripingName: "None",
        frontChest: {
          frontChestImage: null,
          chestImageSetting: {
            horizontal: 0,
            vertical: 0,
            scale: 1.0,
          },
          wordmark: {
            text: "",
            textStyle: "Single",
            textDirection: "horizontal",
            fontFamily: "Anaheim",
            wordmarkColor: [
              { id: 1, color: "#9BB8D3", canChange: true },
              { id: 2, color: "#69B3E7", canChange: true },
              { id: 3, color: "#0C2340", canChange: true },
              { id: 4, color: "#FFFF", canChange: false },
            ],
            chestWordmarkSetting: {
              vertical: 0,
              scale: 1,
              arching: 1.0,
            },
          },
        },
        sleeveStriping: "None",
      },
    },
    {
      id: "2",
      frontImage: imageLink.chestStripping,
      backImage: imageLink.tshirtBack,
      tshirtFrontOption: {
        template: {
          templateName: "Plain",
          templateColor: [
            { id: 1, color: "#9BB8D3", canChange: true },
            { id: 2, color: "#69B3E7", canChange: true },
            { id: 3, color: "#0C2340", canChange: true },
            { id: 4, color: "#FFFF", canChange: false },
          ]
        },
        chestStripingName: "None",
        frontChest: {
          frontChestImage: null,
          chestImageSetting: {
            horizontal: 0,
            vertical: 0,
            scale: 1.0,
          },
          wordmark: {
            text: "",
            textStyle: "Single",
            textDirection: "horizontal",
            fontFamily: "Anaheim",
            wordmarkColor: [
              { id: 1, color: "#9BB8D3", canChange: true },
              { id: 2, color: "#69B3E7", canChange: true },
              { id: 3, color: "#0C2340", canChange: true },
              { id: 4, color: "#FFFF", canChange: false },
            ],
            chestWordmarkSetting: {
              vertical: 0,
              scale: 1,
              arching: 1.0,
            },
          },
        },
        sleeveStriping: "None",
      },
    },
    {
      id: "3",
      frontImage: imageLink.chestStripping,
      backImage: imageLink.tshirtBack,
      tshirtFrontOption: {
        template: {
          templateName: "Plain",
          templateColor: [
            { id: 1, color: "#9BB8D3", canChange: true },
            { id: 2, color: "#69B3E7", canChange: true },
            { id: 3, color: "#0C2340", canChange: true },
            { id: 4, color: "#FFFF", canChange: false },
          ]
        },
        chestStripingName: "None",
        frontChest: {
          frontChestImage: null,
          chestImageSetting: {
            horizontal: 0,
            vertical: 0,
            scale: 1.0,
          },
          wordmark: {
            text: "",
            textStyle: "Single",
            textDirection: "horizontal",
            fontFamily: "Anaheim",
            wordmarkColor: [
              { id: 1, color: "#9BB8D3", canChange: true },
              { id: 2, color: "#69B3E7", canChange: true },
              { id: 3, color: "#0C2340", canChange: true },
              { id: 4, color: "#FFFF", canChange: false },
            ],
            chestWordmarkSetting: {
              vertical: 0,
              scale: 1,
              arching: 1.0,
            },
          },
        },
        sleeveStriping: "None",
      },
    },
  ],
};

const tshirtDataSlice = createSlice({
  name: "reduxTshirt",
  initialState,
  reducers: {
    addNewTshirt: (state, action: PayloadAction<tshirtDataObj>) => {
      state.tshirtData.push(action.payload);
    },
    removeTshirt: (state, action: PayloadAction<{ id: string }>) => {
      state.tshirtData = state.tshirtData.filter(
        (tshirt) => tshirt.id !== action.payload.id
      );
    },
    
    // template start
    setTemplateTypeFront: (
      state,
      action: PayloadAction<{ tshirtId: string; data: string }>
    ) => {
      const tshirt = state.tshirtData.find(
        (tshirt) => tshirt.id === action.payload.tshirtId
      );
      if (tshirt) {
        if (tshirt.tshirtFrontOption) {
          tshirt.tshirtFrontOption.template.templateName = action.payload.data;
        }
      }
    },

    setTemplateColor: (state, action: PayloadAction<any>) => {
      const tshirt = state.tshirtData.find((tshirt) => tshirt.id === state.tshirtId);
      if(tshirt){
        if(tshirt.tshirtFrontOption?.template.templateName){
          tshirt.tshirtFrontOption.template.templateColor = action.payload.data;
        }
      }
    },

    setSleeveStripingTypeFront: (
      state,
      action: PayloadAction<{ tshirtId: string; data: string }>
    ) => {
      const tshirt = state.tshirtData.find(
        (tshirt) => tshirt.id === action.payload.tshirtId
      );
      if (tshirt) {
        if (tshirt.tshirtFrontOption) {
          tshirt.tshirtFrontOption.sleeveStriping = action.payload.data;
        }
      }
    },
    setChestStripingTypeFront: (
      state,
      action: PayloadAction<{ tshirtId: string; data: string }>
    ) => {
      const tshirt = state.tshirtData.find(
        (tshirt) => tshirt.id === action.payload.tshirtId
      );
      if (tshirt) {
        if (tshirt.tshirtFrontOption) {
          tshirt.tshirtFrontOption.chestStripingName = action.payload.data;
        }
      }
    },
    setFrontChestImage: (
      state,
      action: PayloadAction<{ tshirtId: string; data: any }>
    ) => {
      const tshirt = state.tshirtData.find(
        (tshirt) => tshirt.id === action.payload.tshirtId
      );
      if (tshirt) {
        if (tshirt.tshirtFrontOption) {
          tshirt.tshirtFrontOption.frontChest.frontChestImage =
            action.payload.data;
        }
      }
    },
    setFrontChestSettingHorizontal: (state, action: PayloadAction<any>) => {
      const tshirt = state.tshirtData.find(
        (tshirt) => tshirt.id === action.payload.tshirtId
      );
      if (tshirt) {
        if (tshirt.tshirtFrontOption?.frontChest.frontChestImage) {
          tshirt.tshirtFrontOption.frontChest.chestImageSetting.horizontal =
            action.payload.data;
        }
      }
    },
    setFrontChestSettingVertical: (state, action: PayloadAction<any>) => {
      const tshirt = state.tshirtData.find(
        (tshirt) => tshirt.id === state.tshirtId
      );
      if (tshirt) {
        if (tshirt.tshirtFrontOption?.frontChest.chestImageSetting) {
          tshirt.tshirtFrontOption.frontChest.chestImageSetting.vertical =
            action.payload.data;
        }
      }
    },

    setFrontChestSettingScale: (state, action: PayloadAction<any>) => {
      const tshirt = state.tshirtData.find(
        (tshirt) => tshirt.id === action.payload.tshirtId
      );
      if (tshirt) {
        if (tshirt.tshirtFrontOption?.frontChest.chestImageSetting) {
          tshirt.tshirtFrontOption.frontChest.chestImageSetting.scale =
            action.payload.data;
        }
      }
    },

    // wordmark set name start
    setFrontChestWordmarkName: (state, action: PayloadAction<any>) => {
      const tshirt = state.tshirtData.find(
        (tshirt) => tshirt.id === state.tshirtId
      );
      if (tshirt) {
        if (tshirt.tshirtFrontOption?.template?.templateName) {
          console.log("wordmark text===>", action.payload.data);
          tshirt.tshirtFrontOption.frontChest.wordmark.text =
            action.payload.data;
        }
      }
    },
    // wordmark set name end

    // font text style start
    setWordmarkFontStyleName: (state, action: PayloadAction<any>) => {
      const tshirt = state.tshirtData.find(
        (tshirt) => tshirt.id === state.tshirtId
      );
      if (tshirt) {
        if (tshirt.tshirtFrontOption?.frontChest?.wordmark.text) {
          console.log("wordmark textStyle Name===>", action.payload.data);
          tshirt.tshirtFrontOption.frontChest.wordmark.textStyle =
            action.payload.data;
        }
      }
    },
    // font text style end

    // fontFamily name set start
    setWordmarkFontFamilyName: (state, action: PayloadAction<any>) => {
      const tshirt = state.tshirtData.find(
        (tshirt) => tshirt.id === state.tshirtId
      );
      if (tshirt) {
        if (tshirt.tshirtFrontOption?.frontChest?.wordmark) {
          console.log("wordmark fontFamily===>", action.payload.data);
          tshirt.tshirtFrontOption.frontChest.wordmark.fontFamily =
            action.payload.data;
        }
      }
    },
    // fontFamily name set end

    // setFrontChestSettingVertical: (state, action: PayloadAction<any>) => {
    //   const tshirt = state.tshirtData.find(
    //     (tshirt) => tshirt.id === state.tshirtId
    //   );
    //   if (tshirt) {
    //     if (tshirt.tshirtFrontOption?.frontChest.chestImageSetting) {
    //       tshirt.tshirtFrontOption.frontChest.chestImageSetting.vertical =
    //         action.payload.data;
    //     }
    //   }
    // },

    // wordmarkSetting start

    // wordmark set vertical position start
    setFrontChestWordmarkVerticalPosition: (
      state,
      action: PayloadAction<any>
    ) => {
      const tshirt = state.tshirtData.find(
        (tshirt) => tshirt.id === state.tshirtId
      );
      if (tshirt) {
        if (tshirt.tshirtFrontOption?.frontChest?.wordmark?.text) {
          tshirt.tshirtFrontOption.frontChest.wordmark.chestWordmarkSetting.vertical =
            action.payload.data;
        }
      }
    },
    // wordmark set vertical position end

    setFrontChestWordmarkScale: (state, action: PayloadAction<any>) => {
      const tshirt = state.tshirtData.find(
        (tshirt) => tshirt.id === state.tshirtId
      );
      if (tshirt) {
        if (tshirt.tshirtFrontOption?.frontChest?.wordmark?.text) {
          tshirt.tshirtFrontOption.frontChest.wordmark.chestWordmarkSetting.scale =
            action.payload.data;
        } else {
          Alert.alert("Please type the text first");
          console.log("select the test first")
        }
      }
    },
    // wordmark set color start
    setWordmarkColor: (state, action: PayloadAction<any>) => {
      const tshirt = state.tshirtData.find(
        (tshirt) => tshirt.id === state.tshirtId
      );
      if (tshirt) {
        if (tshirt.tshirtFrontOption?.frontChest.wordmark.text) {
          tshirt.tshirtFrontOption.frontChest.wordmark.wordmarkColor =
            action.payload.data;
        }
      }
    },
    // wordmark set color end

    // wordmarkSetting end

    setTshirtId: (state, action: PayloadAction<string>) => {
      state.tshirtId = action.payload;
    },
    setTshirtColor: (state, action: PayloadAction<colorObj[]>) => {
      state.buttonColor = action.payload;
    },
  },
});

export const {
  addNewTshirt,
  removeTshirt,
  setTshirtId,
  setTemplateTypeFront,
  setTemplateColor,
  setChestStripingTypeFront,
  setTshirtColor,
  setFrontChestImage,
  setFrontChestSettingHorizontal,
  setFrontChestSettingVertical,
  setFrontChestSettingScale,
  setSleeveStripingTypeFront,
  setFrontChestWordmarkName,
  setWordmarkFontStyleName,
  setWordmarkFontFamilyName,
  setFrontChestWordmarkVerticalPosition,
  setFrontChestWordmarkScale,
  setWordmarkColor,
} = tshirtDataSlice.actions;

export default tshirtDataSlice.reducer;
