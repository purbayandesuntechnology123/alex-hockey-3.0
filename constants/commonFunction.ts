
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
    console.warn("Invalid parameters passed to getName");
    return "";
  }

  const tshirt = tshirtData.find((tshirt) => tshirt.id === tshirtId);

  return tshirt?.tshirtFrontOption?.chestStripingName || "";
};
