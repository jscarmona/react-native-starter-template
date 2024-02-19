import React from 'react';
import type { RootStackScreenProps } from '../types/RootStackScreenProps';
import { Screen } from '../components/Screen';
import { useHeader } from '../hooks/useHeader';

export const NotFoundScreenName = 'NotFound';
export const NotFoundScreenPath = '*';

export type NotFoundScreenParams = undefined;
export type NotFoundScreenProps = RootStackScreenProps<typeof NotFoundScreenName>;
export type NotFoundScreenRouteProp = NotFoundScreenProps['route'];
export type NotFoundScreenNavigationProp = NotFoundScreenProps['navigation'];

export function NotFoundScreen(): JSX.Element {
  useHeader({ title: 'Not Found' });

  return <Screen />;
}
