import styled from '@emotion/native';
import { View } from 'react-native';

interface DividerProps {
  gutter?: boolean;
  direction?: 'vertical' | 'horizontal';
}

export const Divider = styled(View, {
  shouldForwardProp: (prop) => prop !== 'gutter' && prop !== 'direction',
})<DividerProps>(({ theme, gutter, direction = 'horizontal' }) => ({
  height: direction === 'vertical' ? '100%' : 1,
  width: direction === 'vertical' ? 1 : '100%',
  marginTop: direction === 'vertical' ? 0 : theme.spacing(gutter ? 4 : 0),
  marginBottom: direction === 'vertical' ? 0 : theme.spacing(gutter ? 4 : 0),
  marginLeft: direction === 'vertical' ? theme.spacing(gutter ? 4 : 0) : 0,
  marginRight: direction === 'vertical' ? theme.spacing(gutter ? 4 : 0) : 0,
  backgroundColor: theme.palette.background.disabled,
}));
