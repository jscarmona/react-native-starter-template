import React, { forwardRef, Ref } from 'react';
import { View } from 'react-native';
import type { ViewProps } from 'react-native';
import { makeStyles } from '../../theme/utils/makeStyles';
import { Text, TextProps } from '../../ui/components/Text';
import { useScreen } from '../hooks/useScreen';

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

type StyleProps = Pick<ScreenHeaderProps, 'gutter'>;

const useStyles = makeStyles<StyleProps>((theme, { gutter }) => ({
  root: {
    paddingHorizontal: theme.spacing(gutter ? 4 : 0),
    paddingVertical: theme.spacing(2),
  },
  navigationBar: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
  },
  title: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  action: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    justifyContent: 'center',
    zIndex: 1,
  },
  leftAction: {
    left: 0,
  },
  rightAction: {
    right: 0,
  },
}));

export const ScreenHeader = forwardRef(function ScreenHeader(
  {
    title,
    gutter: gutterProp,
    leftAction,
    rightAction,
    TitleProps,
    children,
    align = 'left',
    variant = 'primary',
    style,
    ...props
  }: ScreenHeaderProps,
  ref: Ref<View>,
): JSX.Element {
  const { gutter } = useScreen();
  const styles = useStyles({ gutter: gutterProp ?? gutter });

  return (
    <View ref={ref} style={[styles.root, style]} {...props}>
      <View style={styles.navigationBar}>
        {align !== 'left' && leftAction && <View style={[styles.action, styles.leftAction]}>{leftAction}</View>}
        {!!title && (
          <Text
            {...TitleProps}
            style={[styles.title, TitleProps?.style]}
            align={align}
            variant={variant === 'primary' ? 'header3' : 'header4'}
          >
            {title}
          </Text>
        )}
        {rightAction && <View style={[styles.action, styles.rightAction]}>{rightAction}</View>}
      </View>
      {children}
    </View>
  );
});
