import React, { forwardRef, Ref } from 'react';
import { View, ViewProps, StatusBar } from 'react-native';
import { SafeAreaView } from '../../ui/components/SafeAreaView';
import { useScreenStatusBarProps, StatusBarProps as UIStatusBarProps } from '../hooks/useScreenStatusBarProps';
import { ScreenContextProps, ScreenProvider } from '../providers/ScreenProvider';

export interface ScreenProps extends ScreenContextProps, ViewProps {
  StatusBarProps?: UIStatusBarProps;
}

export const Screen = forwardRef(function Screen(
  { children, edges = ['top'], gutter, sticky, scrollable, StatusBarProps, name, ...props }: ScreenProps,
  ref: Ref<View>,
): JSX.Element {
  const statusBarProps = useScreenStatusBarProps(StatusBarProps);

  return (
    <ScreenProvider name={name} gutter={gutter} sticky={sticky} scrollable={scrollable}>
      <StatusBar {...statusBarProps} />
      <SafeAreaView ref={ref} edges={edges} {...props}>
        {children}
      </SafeAreaView>
    </ScreenProvider>
  );
});
