import React, { createContext, useMemo } from 'react';
import { Edge } from 'react-native-safe-area-context';

export interface ScreenContextProps {
  name: string;
  gutter?: boolean;
  sticky?: boolean;
  scrollable?: boolean;
  edges?: Edge[];
}

export interface ScreenProviderProps extends ScreenContextProps {
  children?: React.ReactNode;
}

export const ScreenContext = createContext<ScreenContextProps | undefined>(undefined);

export function ScreenProvider({
  children,
  name,
  edges,
  gutter,
  sticky,
  scrollable,
}: ScreenProviderProps): JSX.Element {
  const value = useMemo(
    () => ({
      name,
      gutter,
      sticky,
      edges,
      scrollable,
    }),
    [name, gutter, sticky, edges, scrollable],
  );

  return <ScreenContext.Provider value={value}>{children}</ScreenContext.Provider>;
}
