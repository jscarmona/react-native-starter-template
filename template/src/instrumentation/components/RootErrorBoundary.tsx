import React, { PropsWithChildren, useCallback } from 'react';
import RNErrorBoundary from 'react-native-error-boundary';

export function RootErrorBoundary({ children }: PropsWithChildren<any>): JSX.Element {
  const handleError = useCallback((error: Error) => {
    // Replace with own instrumentation
    // eslint-disable-next-line no-console
    console.error(error);
  }, []);

  return <RNErrorBoundary onError={handleError}>{children}</RNErrorBoundary>;
}
