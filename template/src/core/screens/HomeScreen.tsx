import React from 'react';
import { Screen } from '../../navigation/components/Screen';
import { RootBottomTabScreenProps } from '../../navigation/types/RootBottomTabScreenProps';
import { useHeader } from '../../navigation/hooks/useHeader';
import { ScreenContent } from '../../navigation/components/ScreenContent';
import { Input } from '../../ui/components/Input';

export const HomeScreenName = 'Home';
export const HomeScreenPath = 'home';

export type HomeScreenParams = undefined;
export type HomeScreenProps = RootBottomTabScreenProps<typeof HomeScreenName>;
export type HomeScreenRouteProp = HomeScreenProps['route'];
export type HomeScreenNavigationProp = HomeScreenProps['navigation'];

export function HomeScreen() {
  useHeader({ title: 'Home' });

  return (
    <Screen>
      <ScreenContent gutter>
        <Input />
      </ScreenContent>
    </Screen>
  );
}
