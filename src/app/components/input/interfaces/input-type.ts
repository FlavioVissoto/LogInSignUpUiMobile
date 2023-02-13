import { ObjectValues } from '../../../interface/object-value';

export const INPUT_TYPE = {
  email: 'email',
  password: 'password',
  text: 'text',
} as const;

export type InputType = ObjectValues<typeof INPUT_TYPE>;
