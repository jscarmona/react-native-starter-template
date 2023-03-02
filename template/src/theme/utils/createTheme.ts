import { EdgeInsets } from 'react-native-safe-area-context';
import { ColorMode, Theme } from '../types/Theme';
import { createSpacing } from './createSpacing';
import { createPalette } from './createPalette';
import { createTypography } from './createTypography';

const BASE_SPACING = 4;

interface CreateThemeProps {
  mode: ColorMode;
  insets: EdgeInsets;
}

export const createTheme = ({ mode, insets }: CreateThemeProps): Theme => {
  const spacing = createSpacing(BASE_SPACING);
  const palette = createPalette(mode);
  const typography = createTypography();

  return {
    mode,
    insets,
    spacing,
    palette,
    typography,
  };
};
