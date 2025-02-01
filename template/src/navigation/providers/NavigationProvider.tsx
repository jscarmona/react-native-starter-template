import React, { PropsWithChildren, useCallback, useMemo, useRef } from 'react';
import { NavigationContainer, Theme, useNavigationContainerRef, DefaultTheme } from '@react-navigation/native';
import { useTheme } from '@emotion/react';
import { RootStackParamList } from '../types/RootStackParamList';
import { linking } from '../utils/linking';

const useNavigationTheme = (): Theme => {
  const theme = useTheme();

  return useMemo(
    () => ({
      ...DefaultTheme,
      dark: theme.mode === 'dark',
      colors: {
        ...DefaultTheme.colors,
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
};

export function NavigationProvider({ children }: PropsWithChildren<unknown>) {
  const navigationRef = useNavigationContainerRef<RootStackParamList>();
  const navigationTheme = useNavigationTheme();

  const routeNameRef = useRef<string>();

  const handleOnReady = useCallback(() => {
    routeNameRef.current = navigationRef.getCurrentRoute()?.name;
  }, [navigationRef]);

  const handleStateChange = useCallback(() => {
    const previousRouteName = routeNameRef.current;
    const currentRouteName = navigationRef.getCurrentRoute()?.name;

    routeNameRef.current = currentRouteName;

    // eslint-disable-next-line no-console
    console.log({
      origin_screen_name: previousRouteName,
      screen_name: currentRouteName!,
    });
  }, [navigationRef]);

  return (
    <NavigationContainer
      ref={navigationRef}
      linking={linking}
      theme={navigationTheme}
      onReady={handleOnReady}
      onStateChange={handleStateChange}
    >
      {children}
    </NavigationContainer>
  );
}
