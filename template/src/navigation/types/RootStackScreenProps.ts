import { BottomTabNavigationProp, BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeNavigationProp, CompositeScreenProps, RouteProp } from '@react-navigation/native';
import type { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootBottomTabParamList } from './RootBottomTabParamList';
import type { RootStackParamList } from './RootStackParamList';

type RootStackParam = keyof RootStackParamList;

export type RootStackScreenProps<T extends RootStackParam> = CompositeScreenProps<
  NativeStackScreenProps<RootStackParamList, T>,
  BottomTabScreenProps<RootBottomTabParamList>
>;

export type RootStackNavigationProp<T extends RootStackParam> = CompositeNavigationProp<
  NativeStackNavigationProp<RootStackParamList, T>,
  BottomTabNavigationProp<RootBottomTabParamList>
>;

export type RootStackRouteProp<T extends RootStackParam> = RouteProp<RootStackParamList, T>;
