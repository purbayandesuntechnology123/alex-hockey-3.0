import { themeColor } from '@/constants/colors';
import { fontFamily } from '@/constants/fontFamily';
import { Text, TextProps, View } from 'react-native';

interface RNTextProps extends TextProps {
  size?: number;
  fontWeight?: 400 | 500 | 600 | 700 | 800;
  children: React.ReactNode;
}

const RNText: React.FC<RNTextProps> = ({
  size = 16,
  fontWeight = 400,
  children,
  ...textProps
}) => {
  return (
    <View>
      <Text
        {...textProps}
        style={[
          {
            color: themeColor.textPrimary,
            fontFamily: fontFamily[fontWeight],
            fontSize: size,
          },
          textProps?.style,
        ]}
      >
        {children}
      </Text>
    </View>
  );
};

export { RNText };
