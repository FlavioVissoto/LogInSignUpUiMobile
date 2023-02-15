import { ObjectValues } from '../object-value';

export const CSS_COLOR = {
  blue: 'blue',
  red: 'red',
  white: 'white',
} as const;

export type CssColor = ObjectValues<typeof CSS_COLOR>;
