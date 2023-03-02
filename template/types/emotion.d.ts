import '@emotion/react';
import { Theme as UITheme } from '../src/theme/types/Theme';

declare module '@emotion/react' {
  export interface Theme extends UITheme {}
}
