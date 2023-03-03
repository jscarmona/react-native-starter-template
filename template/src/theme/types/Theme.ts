import { EdgeInsets } from 'react-native-safe-area-context';
import { TextStyle } from 'react-native';

export type ColorMode = 'light' | 'dark';

export interface TypographyStyle {
  fontSize: TextStyle['fontSize'];
  fontWeight: TextStyle['fontWeight'];
  lineHeight: TextStyle['lineHeight'];
}

export interface Typography {
  header1: TypographyStyle;
  header2: TypographyStyle;
  header3: TypographyStyle;
  header4: TypographyStyle;
  header5: TypographyStyle;
  header6: TypographyStyle;
  primaryRegular: TypographyStyle;
  primaryBold: TypographyStyle;
  secondaryRegular: TypographyStyle;
  secondaryBold: TypographyStyle;
  tertiaryRegular: TypographyStyle;
  tertiaryBold: TypographyStyle;
  toFontWeight: (weight: TextStyle['fontWeight']) => TextStyle['fontWeight'];
}

export interface PaletteScale {
  900: string;
  800: string;
  700: string;
  600: string;
  500: string;
  400: string;
  300: string;
  200: string;
  100: string;
  50: string;
}

export interface BackgroundPalette {
  default: string;
  overlay: string;
  disabled: string;
}

export interface BorderPalette {
  default: string;
  focus: string;
}

export interface TextPalette {
  primary: string;
  secondary: string;
  hint: string;
  disabled: string;
}

export interface Palette {
  primary: PaletteScale;
  secondary: PaletteScale;
  gray: PaletteScale;
  info: PaletteScale;
  warning: PaletteScale;
  error: PaletteScale;
  background: BackgroundPalette;
  text: TextPalette;
  border: BorderPalette;
  toggleColor: (lightColor: string, darkColor: string) => string;
}

export interface Theme {
  mode: ColorMode;
  insets: EdgeInsets;
  spacing: (multiplier: number) => number;
  palette: Palette;
  typography: Typography;
}
