import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text } from 'react-native';
import { RootStackParamList } from '../types/RootStackParamList';
import { NavigationRoute } from '../constants/navigation';
import { RootBottomTabNavigator } from './RootBottomTabNavigator';

function NotFoundScreen() {
  return <Text>Not Found</Text>;
}

const Stack = createNativeStackNavigator<RootStackParamList>();

export function RootStackNavigator() {
  return (
    <Stack.Navigator initialRouteName={NavigationRoute.BottomTab} screenOptions={{ headerShown: false }}>
      <Stack.Screen name={NavigationRoute.BottomTab} component={RootBottomTabNavigator} />
      <Stack.Screen name={NavigationRoute.NotFound} component={NotFoundScreen} />
    </Stack.Navigator>
  );
}
