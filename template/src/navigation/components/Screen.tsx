import React, { forwardRef, Ref } from 'react';
import { View, StatusBar } from 'react-native';
import { SafeAreaViewProps } from 'react-native-safe-area-context';
import { SafeAreaView } from '../../ui/components/SafeAreaView';
import { useScreenStatusBarProps, StatusBarProps as UIStatusBarProps } from '../hooks/useScreenStatusBarProps';

export interface ScreenProps extends SafeAreaViewProps {
  StatusBarProps?: UIStatusBarProps;
}

export const Screen = forwardRef(function Screen(
  { children, edges = ['top'], StatusBarProps, ...props }: ScreenProps,
  ref: Ref<View>,
): JSX.Element {
  const statusBarProps = useScreenStatusBarProps(StatusBarProps);

  return (
    <SafeAreaView ref={ref} edges={edges} {...props}>
      <StatusBar {...statusBarProps} />
      {children}
    </SafeAreaView>
  );
});
