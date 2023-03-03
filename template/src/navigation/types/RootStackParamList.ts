import type { NavigatorScreenParams } from '@react-navigation/native';
import { ThemeScreenName, ThemeScreenParams } from '../../theme/screens/ThemeScreen';
import { RootBottomTabNavigatorName } from '../navigators/RootBottomTabNavigator';
import { NotFoundScreenName, NotFoundScreenParams } from '../screens/NotFoundScreen';
import type { RootBottomTabParamList } from './RootBottomTabParamList';

export type RootStackParamList = {
  [RootBottomTabNavigatorName]: NavigatorScreenParams<RootBottomTabParamList>;
  [ThemeScreenName]: ThemeScreenParams;
  [NotFoundScreenName]: NotFoundScreenParams;
};
