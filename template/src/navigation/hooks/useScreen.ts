import { useContext } from 'react';
import { ScreenContext, ScreenContextProps } from '../providers/ScreenProvider';

export const useScreen = (): ScreenContextProps => {
  const context = useContext(ScreenContext);

  if (!context) {
    throw new Error('[useScreen] must be used within a Screen component');
  }

  return context;
};
