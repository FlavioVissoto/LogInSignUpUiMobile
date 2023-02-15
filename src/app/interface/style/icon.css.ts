import { ObjectValues } from '../object-value';

export const CSS_ICON = {
  facebook: 'fa-facebook-f',
  google: 'fa-google-plus-g',
  envolepe: 'fa-envelope',
  'lock-keyhole': 'fa-lock-keyhole',
  user: 'fa-user',
} as const;

export type CssIcon = ObjectValues<typeof CSS_ICON>;
