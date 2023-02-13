import { ObjectValues } from '../../../interface/object-value';

export const BUTTON_TYPE = {
  email: 'email',
  password: 'password',
  text: 'text',
} as const;

export type ButtonType = ObjectValues<typeof BUTTON_TYPE>;
