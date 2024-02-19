import { useState, useCallback } from 'react';
import { LayoutChangeEvent, LayoutRectangle } from 'react-native';

export type UseLayoutHookResult = [LayoutRectangle, (e: LayoutChangeEvent) => void];

export function useLayout(): UseLayoutHookResult {
  const [layout, setLayout] = useState<LayoutRectangle>({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });

  const handleOnLayout = useCallback((e: LayoutChangeEvent) => setLayout(e.nativeEvent.layout), []);

  return [layout, handleOnLayout];
}
