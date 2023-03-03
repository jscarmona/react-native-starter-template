import styled from '@emotion/native';
import { TextProps as RNTextProps, TextStyle } from 'react-native/types';
import { TextPalette } from '../../theme/types/Theme';

export type TextVariant =
  | 'header1'
  | 'header2'
  | 'header3'
  | 'header4'
  | 'header5'
  | 'header6'
  | 'primaryBold'
  | 'primaryRegular'
  | 'secondaryBold'
  | 'secondaryRegular'
  | 'tertiaryBold'
  | 'tertiaryRegular';

export interface TextProps extends RNTextProps {
  variant?: TextVariant;
  align?: TextStyle['textAlign'];
  color?: keyof TextPalette;
}

export const Text = styled.Text<TextProps>(
  ({ theme, variant = 'primaryRegular', align = 'auto', color = 'secondary' }) => ({
    ...theme.typography[variant],
    color: theme.palette.text[color],
    textAlign: align,
  }),
);
