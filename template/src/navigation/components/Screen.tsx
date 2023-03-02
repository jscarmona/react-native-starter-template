import styled from '@emotion/native';
import React, { PropsWithChildren } from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaView as RNSafeAreaView } from 'react-native-safe-area-context';

const SafeAreaView = styled(RNSafeAreaView)({
  flex: 1,
  backgroundColor: 'white',
});

export function Screen({ children }: PropsWithChildren) {
  return (
    <SafeAreaView edges={['top', 'bottom', 'left', 'right']}>
      <StatusBar barStyle="light-content" />
      {children}
    </SafeAreaView>
  );
}
