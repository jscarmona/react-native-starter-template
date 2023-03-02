import styled from '@emotion/native';
import React, { PropsWithChildren } from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaView as RNSafeAreaView } from 'react-native-safe-area-context';

const SafeAreaView = styled(RNSafeAreaView)(({ theme }) => ({
  flex: 1,
  backgroundColor: theme.palette.background.default,
}));

export function Screen({ children }: PropsWithChildren) {
  return (
    <SafeAreaView edges={['top', 'bottom', 'left', 'right']}>
      <StatusBar barStyle="dark-content" />
      {children}
    </SafeAreaView>
  );
}
