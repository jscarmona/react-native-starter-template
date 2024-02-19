import React, { forwardRef, Ref } from 'react';
import { View } from 'react-native';
import type { ViewProps } from 'react-native';
import { makeStyles } from '../../theme/utils/makeStyles';

export interface ScreenFooterProps extends ViewProps {
  gutter?: boolean;
}

const useStyles = makeStyles<{ gutter?: boolean }>((theme, { gutter }) => ({
  root: {
    paddingHorizontal: gutter ? theme.spacing(4) : 0,
  },
}));

export const ScreenFooter = forwardRef(function ScreenFooter(
  { gutter, children, ...props }: ScreenFooterProps,
  ref: Ref<View>,
): JSX.Element {
  const styles = useStyles({ gutter });

  return (
    <View ref={ref} {...props} style={[styles.root, props?.style]}>
      {children}
    </View>
  );
});
