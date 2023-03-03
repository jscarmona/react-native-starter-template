import React from 'react';
import Config from 'react-native-config';
import { Screen } from '../../navigation/components/Screen';
import { ScreenHeader } from '../../navigation/components/ScreenHeader';
import { RootBottomTabScreenProps } from '../../navigation/types/RootBottomTabScreenProps';

export const HomeScreenName = 'Home';

export type HomeScreenParams = undefined;
export type HomeScreenProps = RootBottomTabScreenProps<typeof HomeScreenName>;
export type HomeScreenRouteProp = HomeScreenProps['route'];
export type HomeScreenNavigationProp = HomeScreenProps['navigation'];

export function HomeScreen() {
  return (
    <Screen name={HomeScreenName} gutter>
      <ScreenHeader title={Config.TITLE} />
    </Screen>
  );
}
