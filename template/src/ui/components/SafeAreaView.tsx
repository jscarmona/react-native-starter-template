import styled from '@emotion/native';
import { SafeAreaView as RNSafeAreaView } from 'react-native-safe-area-context';

export const SafeAreaView = styled(RNSafeAreaView)(({ theme }) => ({
  flex: 1,
  backgroundColor: theme.palette.background.default,
}));
