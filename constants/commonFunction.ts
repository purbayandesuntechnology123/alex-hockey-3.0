import { imageLink } from "./image";

export const getName = (tshirtData: any, tshirtId: string) => {
  if (!Array.isArray(tshirtData) || !tshirtId) {
    console.warn("Invalid parameters passed to getName");
    return "";
  }
  const tshirt = tshirtData.find((tshirt) => tshirt.id === tshirtId);

  return tshirt?.tshirtFrontOption?.template?.templateName || "";
};

export const getchestStriping = (tshirtData: any, tshirtId: string) => {
  if (!Array.isArray(tshirtData) || !tshirtId) {
    console.warn("Invalid parameters passed to chest striping");
    return "";
  }
  const tshirt = tshirtData.find((tshirt) => tshirt.id === tshirtId);
  return tshirt?.tshirtFrontOption?.chestStripingName || "";
};


export const getSleevStriping = (tshirtData: any, tshirtId: string) => {
  if (!Array.isArray(tshirtData) || !tshirtId) {
    console.warn("Invalid parameters passed to sleev striping");
    return "";
  }
  const tshirt = tshirtData.find((tshirt) => tshirt.id === tshirtId);
  return tshirt?.tshirtFrontOption?.sleeveStriping || "";
};


export const getFontFamilyName = (tshirtData: any, tshirtId: string) => {
  if (!Array.isArray(tshirtData) || !tshirtId) {
    console.warn("Invalid parameters passed to sleeve striping");
    return "";
  }
  const tshirt = tshirtData.find((tshirt) => tshirt.id === tshirtId);
  return tshirt?.tshirtFrontOption.frontChest?.wordmark?.fontFamily || "";
};

export const getSingleTshirt = (tshirtData: any, tshirtId: string) => {
  const tshirt = tshirtData.find((tshirt: any) => tshirt.id === tshirtId);
  return tshirt;
}

// get sleeveNumber
export const getSleevesFontFamilyName = (tshirtData: any, tshirtId: string) => {
 const sleevesNumber = tshirtData.find((tshirt: any) => tshirt.id === tshirtId);
 return sleevesNumber?.tshirtFrontOption?.sleeveNumber?.textStyle;
}

// get front chest image patter

export const getFontChestImagePatterUrl = (patternName: string) => {
  if(patternName === "Hexagons Dark"){
    return imageLink.hexagonsDark
  }else if(patternName === "Pride 1") {
    return imageLink.pride1;
  } else if (patternName === "Felt"){
    return imageLink.felt;
  } else if ( patternName ===  "Hexagons Light") {
    return imageLink.hexagonsLight;
  } else if (patternName === "Pride 2") {
    return imageLink.pride2;
  } else {
    return null;
  }
} 
