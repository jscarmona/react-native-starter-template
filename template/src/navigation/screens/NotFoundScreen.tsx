import React from 'react';
import type { RootStackScreenProps } from '../types/RootStackScreenProps';
import { Screen } from '../components/Screen';
import { ScreenContent } from '../components/ScreenContent';
import { Text } from '../../ui/components/Text';

export const NotFoundScreenName = 'NotFound';

export type NotFoundScreenParams = undefined;
export type NotFoundScreenProps = RootStackScreenProps<typeof NotFoundScreenName>;
export type NotFoundScreenRouteProp = NotFoundScreenProps['route'];
export type NotFoundScreenNavigationProp = NotFoundScreenProps['navigation'];

export function NotFoundScreen(): JSX.Element {
  return (
    <Screen name={NotFoundScreenName} sticky gutter>
      <ScreenContent ViewProps={{ style: { justifyContent: 'center' } }}>
        <Text variant="header3" align="center">
          Not Found
        </Text>
      </ScreenContent>
    </Screen>
  );
}
