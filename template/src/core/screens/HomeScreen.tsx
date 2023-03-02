import styled from '@emotion/native';
import React from 'react';
import Config from 'react-native-config';
import { Screen } from '../../navigation/components/Screen';

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
    <Screen>
      <Header>
        <Title>{Config.TITLE}</Title>
      </Header>
    </Screen>
  );
}
