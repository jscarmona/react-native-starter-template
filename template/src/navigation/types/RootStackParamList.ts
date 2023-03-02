import type { NavigatorScreenParams } from '@react-navigation/native';
import type { RootBottomTabParamList } from './RootBottomTabParamList';

export type RootStackParamList = {
  BottomTab: NavigatorScreenParams<RootBottomTabParamList>;
  NotFound: undefined;
};
