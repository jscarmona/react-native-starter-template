import React from 'react';
import type { RootStackScreenProps } from '../../navigation/types/RootStackScreenProps';
import { Screen } from '../../navigation/components/Screen';
import { useHeader } from '../../navigation/hooks/useHeader';

export const ThemeScreenName = 'Theme';
export const ThemeScreenPath = 'theme';

export type ThemeScreenParams = undefined;
export type ThemeScreenProps = RootStackScreenProps<typeof ThemeScreenName>;
export type ThemeScreenRouteProp = ThemeScreenProps['route'];
export type ThemeScreenNavigationProp = ThemeScreenProps['navigation'];

export function ThemeScreen(): JSX.Element {
  useHeader({ title: 'Theme' });

  return <Screen />;
}
