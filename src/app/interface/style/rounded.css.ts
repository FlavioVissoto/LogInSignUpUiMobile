import { ObjectValues } from '../object-value';

export const CSS_ROUNDED = {
  md: 'rounded-md',
  sm: 'rounded-sm',
  xs: 'rounded-xs',
} as const;

export type CssRounded = ObjectValues<typeof CSS_ROUNDED>;
