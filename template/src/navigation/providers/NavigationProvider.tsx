import React, { PropsWithChildren } from 'react';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import { RootStackParamList } from '../types/RootStackParamList';

export function NavigationProvider({ children }: PropsWithChildren<unknown>) {
  const navigationRef = useNavigationContainerRef<RootStackParamList>();

  return <NavigationContainer ref={navigationRef}>{children}</NavigationContainer>;
}
