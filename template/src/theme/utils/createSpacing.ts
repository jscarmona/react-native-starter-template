import { Theme } from '../types/Theme';

export function createSpacing(spacing: number): Theme['spacing'] {
  return (multiplier: number) => multiplier * spacing;
}
