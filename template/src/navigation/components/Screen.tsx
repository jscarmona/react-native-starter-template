import React, { forwardRef, Ref } from 'react';
import {
  View,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
  KeyboardAvoidingViewProps as RNKeyboardAvoidingViewProps,
} from 'react-native';
import { SafeAreaViewProps } from 'react-native-safe-area-context';
import { SafeAreaView } from '../../ui/components/SafeAreaView';
import { useScreenStatusBarProps, StatusBarProps as UIStatusBarProps } from '../hooks/useScreenStatusBarProps';

export interface ScreenProps extends SafeAreaViewProps {
  StatusBarProps?: UIStatusBarProps;
  KeyboardAvoidingViewProps?: RNKeyboardAvoidingViewProps;
}

export const Screen = forwardRef(function Screen(
  { children, edges = [], StatusBarProps, KeyboardAvoidingViewProps, ...props }: ScreenProps,
  ref: Ref<View>,
): JSX.Element {
  const statusBarProps = useScreenStatusBarProps(StatusBarProps);

  return (
    <SafeAreaView ref={ref} edges={edges} {...props}>
      <StatusBar {...statusBarProps} />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        {...KeyboardAvoidingViewProps}
        style={[{ flex: 1 }, KeyboardAvoidingViewProps?.style]}
      >
        {children}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
});
