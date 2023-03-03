import { Platform, TextStyle } from 'react-native';
import { Theme } from '../types/Theme';

const toFontWeight = (weight: TextStyle['fontWeight']) => (Platform.OS === 'ios' ? weight : '400');

export function createTypography(): Theme['typography'] {
  return {
    toFontWeight,
    header1: {
      fontWeight: toFontWeight('900'),
      fontSize: 44,
      lineHeight: 56,
    },
    header2: {
      fontWeight: toFontWeight('900'),
      fontSize: 38,
      lineHeight: 48,
    },
    header3: {
      fontWeight: toFontWeight('900'),
      fontSize: 32,
      lineHeight: 44,
    },
    header4: {
      fontWeight: toFontWeight('900'),
      fontSize: 26,
      lineHeight: 40,
    },
    header5: {
      fontWeight: toFontWeight('900'),
      fontSize: 22,
      lineHeight: 32,
    },
    header6: {
      fontWeight: toFontWeight('900'),
      fontSize: 18,
      lineHeight: 24,
    },
    primaryRegular: {
      fontWeight: toFontWeight('400'),
      fontSize: 18,
      lineHeight: 28,
    },
    primaryBold: {
      fontWeight: toFontWeight('700'),
      fontSize: 18,
      lineHeight: 28,
    },
    secondaryRegular: {
      fontWeight: toFontWeight('400'),
      fontSize: 15,
      lineHeight: 24,
    },
    secondaryBold: {
      fontWeight: toFontWeight('700'),
      fontSize: 15,
      lineHeight: 24,
    },
    tertiaryRegular: {
      fontWeight: toFontWeight('400'),
      fontSize: 12.5,
      lineHeight: 20,
    },
    tertiaryBold: {
      fontWeight: toFontWeight('700'),
      fontSize: 12.5,
      lineHeight: 20,
    },
  };
}
