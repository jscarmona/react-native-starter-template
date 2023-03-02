import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView as RNGestureHandlerRootView } from 'react-native-gesture-handler';
import styled from '@emotion/native';
import { RootStackNavigator } from '../../navigation/navigators/RootStackNavigator';
import { NavigationProvider } from '../../navigation/providers/NavigationProvider';
import { RootErrorBoundary } from '../../instrumentation/components/RootErrorBoundary';
import { ThemeProvider } from '../../theme/providers/ThemeProvider';

const GestureHandlerRootView = styled(RNGestureHandlerRootView)({
  flex: 1,
});

export function AppProvider(): JSX.Element {
  return (
    <GestureHandlerRootView>
      <SafeAreaProvider>
        <ThemeProvider>
          <RootErrorBoundary>
            <NavigationProvider>
              <RootStackNavigator />
            </NavigationProvider>
          </RootErrorBoundary>
        </ThemeProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
