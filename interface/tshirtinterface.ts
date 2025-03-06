
export interface TshirtState {
  countNum: number;
  value: number;
  tshirtId: string;
  buttonColor: colorObj[];
  tshirtData: tshirtDataObj[];
}

export interface colorObj {
  id: string;
  color: string;
}
     
export interface tshirtDataObj {
    id?: string;
    frontImage: any;
    backImage?: string;
    tshirtFrontOption?: {
      template: string;
      chestStripingName: string
      frontChest: {
        frontChestImage?: any;
        chestImageSetting: {
          horizontal: number,
          vertical: number,
          scale: number
        }
      }
      sleeveStriping: string
    };
  }