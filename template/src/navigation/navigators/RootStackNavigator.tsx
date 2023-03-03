import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/RootStackParamList';
import { NotFoundScreen, NotFoundScreenName } from '../screens/NotFoundScreen';
import { ThemeScreen, ThemeScreenName } from '../../theme/screens/ThemeScreen';
import { RootBottomTabNavigator, RootBottomTabNavigatorName } from './RootBottomTabNavigator';

const Stack = createNativeStackNavigator<RootStackParamList>();

export function RootStackNavigator() {
  return (
    <Stack.Navigator initialRouteName={RootBottomTabNavigatorName} screenOptions={{ headerShown: false }}>
      <Stack.Screen name={RootBottomTabNavigatorName} component={RootBottomTabNavigator} />
      <Stack.Screen name={ThemeScreenName} component={ThemeScreen} />
      <Stack.Screen name={NotFoundScreenName} component={NotFoundScreen} />
    </Stack.Navigator>
  );
}
