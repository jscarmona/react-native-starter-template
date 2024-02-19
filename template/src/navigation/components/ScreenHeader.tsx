import React, { forwardRef, Ref, useEffect, useState } from 'react';
import { Platform, View } from 'react-native';
import type { ViewProps } from 'react-native';
import { makeStyles } from '../../theme/utils/makeStyles';
import { Text, TextProps } from '../../ui/components/Text';
import { useLayout } from '../../ui/hooks/useLayout';

type ScreenHeaderVariant = 'primary' | 'secondary';

export interface ScreenHeaderProps extends ViewProps {
  title?: string;
  TitleProps?: Partial<TextProps>;
  variant?: ScreenHeaderVariant;
  align?: 'left' | 'center';
  gutter?: boolean;
  leftAction?: React.ReactNode;
  rightAction?: React.ReactNode;
}

const useStyles = makeStyles<{ gutter: boolean; actionWidth: number }>((theme, { gutter, actionWidth }) => ({
  root: {
    paddingHorizontal: theme.spacing(gutter ? 4 : 0),
    backgroundColor: theme.palette.background.default,
    paddingTop: Platform.OS === 'ios' ? theme.insets.top : theme.spacing(4),
    paddingBottom: theme.spacing(2),
  },
  navigationBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    flexGrow: 1,
    flexShrink: 1,
  },
  action: {
    flexDirection: 'row',
    alignItems: 'center',
    minWidth: actionWidth,
  },
  leftAction: {
    paddingRight: theme.spacing(2),
  },
  rightAction: {
    paddingLeft: theme.spacing(2),
  },
}));

export const ScreenHeader = forwardRef(function ScreenHeader(
  {
    title,
    leftAction,
    rightAction,
    TitleProps,
    children,
    gutter = true,
    align = 'left',
    variant = 'primary',
    style,
    ...props
  }: ScreenHeaderProps,
  ref: Ref<View>,
): JSX.Element {
  const [{ width: leftActionWidth }, onLeftActionLayout] = useLayout();
  const [{ width: rightActionWidth }, onRightActionLayout] = useLayout();
  const [actionWidth, setActionWidth] = useState<number>(0);
  const styles = useStyles({ gutter, actionWidth });

  useEffect(() => {
    if (leftAction && leftActionWidth > actionWidth) {
      setActionWidth(leftActionWidth);
    }
  }, [actionWidth, leftAction, leftActionWidth]);

  useEffect(() => {
    if (rightAction && rightActionWidth > actionWidth) {
      setActionWidth(rightActionWidth);
    }
  }, [actionWidth, rightAction, rightActionWidth]);

  const hasActions = !!leftAction || !!rightAction;

  return (
    <View ref={ref} style={[styles.root, style]} testID="ScreenHeader" {...props}>
      <View style={styles.navigationBar}>
        {((hasActions && align !== 'left') || !!leftAction) && (
          <View
            style={[styles.action, styles.leftAction]}
            testID="ScreenHeaderLeftActionContainer"
            onLayout={onLeftActionLayout}
          >
            {leftAction}
          </View>
        )}
        {!!title && (
          <Text
            {...TitleProps}
            style={[styles.title, TitleProps?.style]}
            align={align}
            numberOfLines={1}
            variant={variant === 'primary' ? 'header3' : 'header4'}
            testID="ScreenHeaderTitle"
          >
            {title}
          </Text>
        )}
        {!title && <View style={styles.title} />}
        {hasActions && (
          <View
            style={[styles.action, styles.rightAction]}
            testID="ScreenHeaderRightActionContainer"
            onLayout={onRightActionLayout}
          >
            {rightAction}
          </View>
        )}
      </View>
      {children}
    </View>
  );
});
