export interface TshirtState {
  countNum: number;
  value: number;
  tshirtId: string;
  tshirtById: tshirtDataObj;
  buttonColor: colorObj[];
  tshirtData: tshirtDataObj[];
}

export interface colorObj {
  id: string;
  color: string;
}

export interface Color {
  id: number;
  color: string;
  canChange: boolean;
}

export interface tshirtDataObj {
  id?: string;
  frontImage: any;
  backImage?: string;
  tshirtFrontOption?: {
    template: {
      templateName: string,
      templateColor: Color[],
    };
    chestStripingName: string;
    frontChest: {
      frontChestImage?: any;
      imagePattern: {
        patternName: string,
        patternOpacity: number,
      },
      chestImageSetting: {
        horizontal: number;
        vertical: number;
        scale: number;
      };
      wordmark: {
        text: string;
        textStyle: string;
        textDirection: string;
        fontFamily: string;
        wordmarkColor: Color[];
        chestWordmarkSetting: {
          vertical: number;
          scale: number;
          arching: number;
        };
        wordmarkPattern: {
          patternName: string,
          patternOpacity: number,
        },
      };
    };
    sleeveNumber: {
      number: string,
      textStyle: string,
      fontFamily: string,
    },
    sleeveStriping: string;
  };
}
