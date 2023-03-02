import styled from '@emotion/native';
import React from 'react';
import { StatusBar } from 'react-native';
import Config from 'react-native-config';
import { SafeAreaView as RNSafeAreaView } from 'react-native-safe-area-context';

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

export function HomeScreen() {
  return (
    <SafeAreaView edges={['top', 'bottom', 'left', 'right']}>
      <StatusBar barStyle="light-content" />
      <Header>
        <Title>{Config.TITLE}</Title>
      </Header>
    </SafeAreaView>
  );
}
