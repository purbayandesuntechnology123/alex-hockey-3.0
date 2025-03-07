
export const getName = (tshirtData: any, tshirtId: string) => {
  if (!Array.isArray(tshirtData) || !tshirtId) {
    console.warn("Invalid parameters passed to getName");
    return "";
  }
  const tshirt = tshirtData.find((tshirt) => tshirt.id === tshirtId);

  return tshirt?.tshirtFrontOption?.template || "";
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
    console.warn("Invalid parameters passed to sleev striping");
    return "";
  }
  const tshirt = tshirtData.find((tshirt) => tshirt.id === tshirtId);
  return tshirt?.tshirtFrontOption.frontChest?.wordmark?.fontFamily || "";
};
