import type { BottomTabScreenProps, BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import type { CompositeNavigationProp, CompositeScreenProps, RouteProp } from '@react-navigation/native';
import type { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootBottomTabParamList } from './RootBottomTabParamList';
import type { RootStackParamList } from './RootStackParamList';

type RootBottomTabParam = keyof RootBottomTabParamList;

export type RootBottomTabScreenProps<T extends RootBottomTabParam> = CompositeScreenProps<
  BottomTabScreenProps<RootBottomTabParamList, T>,
  NativeStackScreenProps<RootStackParamList>
>;

export type RootBottomTabNavigationProp<T extends RootBottomTabParam> = CompositeNavigationProp<
  BottomTabNavigationProp<RootBottomTabParamList, T>,
  NativeStackNavigationProp<RootStackParamList>
>;

export type RootBottomTabRouteProp<T extends RootBottomTabParam> = RouteProp<RootBottomTabParamList, T>;
