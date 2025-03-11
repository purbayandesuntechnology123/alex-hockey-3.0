
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
        },
        wordmark: {
          text: string,
          textStyle: string,
          textDirection: string,
          fontFamily: string,
          chestWordmarkSetting: {
            vertical: number,
            scale: number,
            arching: number,
          },
        }
      }
      sleeveStriping: string
    };
  }