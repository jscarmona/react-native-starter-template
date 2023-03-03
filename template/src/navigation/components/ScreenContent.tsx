import React, { forwardRef, Ref } from 'react';
import { ScrollView, View } from 'react-native';
import type { ViewProps as NativeViewProps, ScrollViewProps as NativeScrollViewProps } from 'react-native';
import { makeStyles } from '../../theme/utils/makeStyles';
import { useScreen } from '../hooks/useScreen';

export interface ScreenContentProps {
  gutter?: boolean;
  sticky?: boolean;
  scrollable?: boolean;
  ViewProps?: NativeViewProps;
  ScrollViewProps?: NativeScrollViewProps;
  children?: React.ReactNode;
}

const useStyles = makeStyles<{ gutter?: boolean; sticky?: boolean }>((theme, { gutter, sticky }) => ({
  root: {
    flexGrow: sticky ? 1 : 0,
    paddingHorizontal: theme.spacing(gutter ? 4 : 0),
  },
}));

export const ScreenContent = forwardRef(function ScreenContent(
  {
    children,
    sticky: stickyProp,
    gutter: gutterProp,
    scrollable: scrollableProp,
    ScrollViewProps = {},
    ViewProps = {},
  }: ScreenContentProps,
  ref: Ref<View | ScrollView>,
): JSX.Element {
  const { gutter, sticky, scrollable } = useScreen();
  const styles = useStyles({ gutter: gutterProp ?? gutter, sticky: stickyProp ?? sticky });

  const isScrollable = scrollableProp ?? scrollable;

  if (isScrollable) {
    return (
      <ScrollView {...ScrollViewProps} style={[styles.root, ScrollViewProps?.style]} ref={ref as Ref<ScrollView>}>
        {children}
      </ScrollView>
    );
  }

  return (
    <View {...ViewProps} style={[styles.root, ViewProps?.style]} ref={ref as Ref<View>}>
      {children}
    </View>
  );
});
