import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider, SafeAreaView as RNSafeAreaView } from 'react-native-safe-area-context';
import { GestureHandlerRootView as RNGestureHandlerRootView } from 'react-native-gesture-handler';
import styled from '@emotion/native';
import { ThemeProvider } from '@emotion/react';
import Config from 'react-native-config';

const GestureHandlerRootView = styled(RNGestureHandlerRootView)({
  flex: 1,
});

const SafeAreaView = styled(RNSafeAreaView)({
  flex: 1,
  backgroundColor: 'white',
});

const Header = styled.View({
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  margin: 8,
});

const Title = styled.Text({
  fontSize: 28,
  fontWeight: '700',
});

export function AppProvider(): JSX.Element {
  return (
    <GestureHandlerRootView>
      <SafeAreaProvider>
        <ThemeProvider theme={{}}>
          <StatusBar barStyle="light-content" />
          <SafeAreaView edges={['top', 'bottom', 'left', 'right']}>
            <Header>
              <Title>{Config.TITLE}</Title>
            </Header>
          </SafeAreaView>
        </ThemeProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
