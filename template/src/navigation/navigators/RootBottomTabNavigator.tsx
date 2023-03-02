import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootBottomTabParamList } from '../types/RootBottomTabParamList';
import { HomeScreen } from '../../core/screens/HomeScreen';

const BottomTab = createBottomTabNavigator<RootBottomTabParamList>();

export function RootBottomTabNavigator() {
  return (
    <BottomTab.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <BottomTab.Screen name="Home" component={HomeScreen} />
    </BottomTab.Navigator>
  );
}
