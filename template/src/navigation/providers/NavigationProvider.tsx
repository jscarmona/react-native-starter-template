import React, { PropsWithChildren } from 'react';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import { RootStackParamList } from '../types/RootStackParamList';
import { linking } from '../utils/linking';

export function NavigationProvider({ children }: PropsWithChildren<unknown>) {
  const navigationRef = useNavigationContainerRef<RootStackParamList>();

  return (
    <NavigationContainer ref={navigationRef} linking={linking}>
      {children}
    </NavigationContainer>
  );
}
