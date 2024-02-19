import React, { forwardRef, Ref } from 'react';
import { View } from 'react-native';
import type { ViewProps } from 'react-native';
import { makeStyles } from '../../theme/utils/makeStyles';

export interface ScreenContentProps extends ViewProps {
  gutter?: boolean;
}

const useStyles = makeStyles<{ gutter?: boolean }>((theme, { gutter }) => ({
  root: {
    flex: 1,
    paddingHorizontal: theme.spacing(gutter ? 4 : 0),
  },
}));

export const ScreenContent = forwardRef(function ScreenContent(
  { children, gutter, style, ...props }: ScreenContentProps,
  ref: Ref<View>,
): JSX.Element {
  const styles = useStyles({ gutter });

  return (
    <View {...props} style={[styles.root, style]} ref={ref}>
      {children}
    </View>
  );
});
