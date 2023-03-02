import { Theme, useTheme } from '@emotion/react';
import { ViewStyle, TextStyle } from 'react-native';

type BaseProps = Record<string, unknown>;

export function makeStyles<Props extends BaseProps = BaseProps>(
  createStylesFn: (theme: Theme, props: Props) => Record<string, ViewStyle | TextStyle>,
) {
  return function useStyles(props?: Props) {
    const theme = useTheme();

    return createStylesFn(theme, props || ({} as Props));
  };
}
