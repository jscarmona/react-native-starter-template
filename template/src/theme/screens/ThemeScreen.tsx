import React from 'react';
import type { RootStackScreenProps } from '../../navigation/types/RootStackScreenProps';
import { Screen } from '../../navigation/components/Screen';
import { ScreenContent } from '../../navigation/components/ScreenContent';
import { ScreenHeader } from '../../navigation/components/ScreenHeader';

export const ThemeScreenName = 'Theme';

export type ThemeScreenParams = undefined;
export type ThemeScreenProps = RootStackScreenProps<typeof ThemeScreenName>;
export type ThemeScreenRouteProp = ThemeScreenProps['route'];
export type ThemeScreenNavigationProp = ThemeScreenProps['navigation'];

export function ThemeScreen(): JSX.Element {
  return (
    <Screen name={ThemeScreenName} sticky gutter>
      <ScreenHeader title="Theme" />
      <ScreenContent>{/*  */}</ScreenContent>
    </Screen>
  );
}
