import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView as RNGestureHandlerRootView } from 'react-native-gesture-handler';
import styled from '@emotion/native';
import { ThemeProvider } from '@emotion/react';
import { RootStackNavigator } from '../../navigation/navigators/RootStackNavigator';
import { NavigationProvider } from '../../navigation/providers/NavigationProvider';

const GestureHandlerRootView = styled(RNGestureHandlerRootView)({
  flex: 1,
});

export function AppProvider(): JSX.Element {
  return (
    <GestureHandlerRootView>
      <SafeAreaProvider>
        <ThemeProvider theme={{}}>
          <NavigationProvider>
            <RootStackNavigator />
          </NavigationProvider>
        </ThemeProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
