import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootBottomTabParamList } from '../types/RootBottomTabParamList';
import { HomeScreen, HomeScreenName } from '../../core/screens/HomeScreen';

const BottomTab = createBottomTabNavigator<RootBottomTabParamList>();

export const RootBottomTabNavigatorName = 'RootBottomTab';

export function RootBottomTabNavigator() {
  return (
    <BottomTab.Navigator initialRouteName={HomeScreenName} screenOptions={{ headerShown: false }}>
      <BottomTab.Screen name={HomeScreenName} component={HomeScreen} />
    </BottomTab.Navigator>
  );
}
