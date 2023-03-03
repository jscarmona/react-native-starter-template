import { useTheme } from '@emotion/react';
import React, { Children, cloneElement, forwardRef, PropsWithChildren } from 'react';
import { View, ViewProps as RNViewProps, ViewProps, ViewStyle } from 'react-native';
import { Divider } from './Divider';

interface StackProps {
  align?: ViewStyle['alignItems'];
  direction?: ViewStyle['flexDirection'];
  justify?: ViewStyle['justifyContent'];
  wrap?: ViewStyle['flexWrap'];
  spacing?: number;
  divider?: boolean;
  style?: ViewStyle;
  ViewProps?: RNViewProps;
}

type Options = Required<Pick<StackProps, 'direction' | 'spacing'>>;

const useStackChildStyles = (options: Options) => {
  const theme = useTheme();
  const { spacing, direction } = options;

  const directionStyles = {
    column: {
      marginTop: theme.spacing(spacing),
      marginEnd: 0,
      marginBottom: 0,
      marginStart: 0,
    },
    'column-reverse': {
      marginTop: 0,
      marginEnd: 0,
      marginBottom: theme.spacing(spacing),
      marginStart: 0,
    },
    row: {
      marginTop: 0,
      marginEnd: 0,
      marginBottom: 0,
      marginStart: theme.spacing(spacing),
    },
    'row-reverse': {
      marginTop: 0,
      marginEnd: theme.spacing(spacing),
      marginBottom: 0,
      marginStart: 0,
    },
  };

  return directionStyles[direction];
};

export const Stack = forwardRef<View, StackProps>(function Stack(
  {
    justify,
    wrap,
    align,
    direction = 'column',
    divider: dividerProp,
    children: childrenProp,
    spacing = 0,
    style: styleProp,
    ...props
  }: PropsWithChildren<StackProps>,
  ref,
): JSX.Element {
  const childStyle = useStackChildStyles({ spacing, direction });
  const children = Children.map(childrenProp, (child, index) => {
    const dividerDirection = direction === 'column' || direction === 'column-reverse' ? 'horizontal' : 'vertical';
    const showDivider = dividerProp && index !== 0;

    return (
      <>
        {showDivider && <Divider direction={dividerDirection} style={childStyle} />}
        {React.isValidElement(child) ? (
          cloneElement<ViewProps>(child as any, {
            style: [index !== 0 && childStyle, child.props.style],
          })
        ) : (
          <View style={index !== 0 && childStyle}>{child}</View>
        )}
      </>
    );
  });

  return (
    <View
      ref={ref}
      style={[
        {
          flexDirection: direction,
          alignItems: align,
          justifyContent: justify,
          flexWrap: wrap,
        },
        styleProp,
      ]}
      {...props}
    >
      {children}
    </View>
  );
});

export const HStack = forwardRef<View, StackProps>(function HStack(props, ref) {
  return <Stack {...props} direction="row" ref={ref} />;
});

export const VStack = forwardRef<View, StackProps>(function VStack(props, ref) {
  return <Stack {...props} direction="column" ref={ref} />;
});
