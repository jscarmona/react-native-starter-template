import React, { PropsWithChildren, useMemo } from 'react';
import { NavigationContainer, Theme, useNavigationContainerRef } from '@react-navigation/native';
import { useTheme } from '@emotion/react';
import { RootStackParamList } from '../types/RootStackParamList';
import { linking } from '../utils/linking';

export function NavigationProvider({ children }: PropsWithChildren<unknown>) {
  const navigationRef = useNavigationContainerRef<RootStackParamList>();
  const theme = useTheme();

  const navigationTheme: Theme = useMemo(
    () => ({
      dark: theme.mode === 'dark',
      colors: {
        primary: theme.palette.primary.main,
        background: theme.palette.background.default,
        card: theme.palette.background.default,
        text: theme.palette.text.primary,
        border: theme.palette.border.default,
        notification: theme.palette.error.main,
      },
    }),
    [theme],
  );

  return (
    <NavigationContainer ref={navigationRef} linking={linking} theme={navigationTheme}>
      {children}
    </NavigationContainer>
  );
}
