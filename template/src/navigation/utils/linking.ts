import { LinkingOptions } from '@react-navigation/native';
import { Linking } from 'react-native';
import { RootStackParamList } from '../types/RootStackParamList';
import { NotFoundScreenName, NotFoundScreenPath } from '../screens/NotFoundScreen';
import { ThemeScreenName, ThemeScreenPath } from '../../theme/screens/ThemeScreen';
import { RootBottomTabNavigatorName } from '../navigators/RootBottomTabNavigator';
import { HomeScreenName, HomeScreenPath } from '../../core/screens/HomeScreen';

export const linking: LinkingOptions<RootStackParamList> = {
  prefixes: ['projecttemplate://'],

  async getInitialURL() {
    const url = await Linking.getInitialURL();

    return url;
  },

  subscribe(listener) {
    const linkingSubscription = Linking.addEventListener('url', ({ url }) => {
      listener(url);
    });

    return () => {
      linkingSubscription.remove();
    };
  },

  config: {
    screens: {
      [RootBottomTabNavigatorName]: {
        initialRouteName: HomeScreenName,
        screens: {
          [HomeScreenName]: HomeScreenPath,
        },
      },
      [ThemeScreenName]: ThemeScreenPath,
      [NotFoundScreenName]: NotFoundScreenPath,
    },
  },
};
