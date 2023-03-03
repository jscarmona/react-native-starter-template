import { useTheme } from '@emotion/react';
import { Platform, type StatusBarProps as NativeStatusBarProps } from 'react-native';

export type StatusBarProps = NativeStatusBarProps;

export type UseScreenStatusBarPropsHookResult = StatusBarProps;

const useStatusBarStyle = (props?: StatusBarProps) => {
  const theme = useTheme();

  if (Platform.OS === 'ios' && props?.barStyle) {
    return props.barStyle;
  }

  if (theme.mode === 'dark') {
    return 'light-content';
  }

  return 'dark-content';
};

const useStatusBarBackgroundColor = (props?: StatusBarProps) => {
  const theme = useTheme();

  if (props?.translucent) {
    return 'transparent';
  }

  return props?.backgroundColor || theme.palette.background.default;
};

export function useScreenStatusBarProps(props?: StatusBarProps): UseScreenStatusBarPropsHookResult {
  const statusBarStyle = useStatusBarStyle(props);
  const statusBarBackgroundColor = useStatusBarBackgroundColor(props);

  return {
    animated: true,
    hidden: false,
    ...props,
    barStyle: statusBarStyle,
    backgroundColor: statusBarBackgroundColor,
  };
}
