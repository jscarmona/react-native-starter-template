import React, { PropsWithChildren } from 'react';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useColorScheme } from 'react-native';
import { createTheme } from '../utils/createTheme';

export function ThemeProvider({ children }: PropsWithChildren): JSX.Element {
  const colorScheme = useColorScheme();
  const insets = useSafeAreaInsets();
  const theme = createTheme({ mode: colorScheme || 'light', insets });

  return <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>;
}
