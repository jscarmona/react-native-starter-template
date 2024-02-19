import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ScreenHeader, ScreenHeaderProps } from '../components/ScreenHeader';

export function useHeader(headerProps: ScreenHeaderProps, deps: Parameters<typeof useLayoutEffect>[1] = []) {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      header: () => <ScreenHeader {...headerProps} />,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...deps, navigation, headerProps]);
}
