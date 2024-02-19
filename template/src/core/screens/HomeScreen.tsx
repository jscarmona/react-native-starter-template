import React from 'react';
import { Screen } from '../../navigation/components/Screen';
import { RootBottomTabScreenProps } from '../../navigation/types/RootBottomTabScreenProps';
import { useHeader } from '../../navigation/hooks/useHeader';

export const HomeScreenName = 'Home';
export const HomeScreenPath = '/';

export type HomeScreenParams = undefined;
export type HomeScreenProps = RootBottomTabScreenProps<typeof HomeScreenName>;
export type HomeScreenRouteProp = HomeScreenProps['route'];
export type HomeScreenNavigationProp = HomeScreenProps['navigation'];

export function HomeScreen() {
  useHeader({ title: 'Home' });

  return <Screen />;
}
