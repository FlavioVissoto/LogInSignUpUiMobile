import { ObjectValues } from '../../../interface/object-value';

export const INPUT_TYPE = {
  email: 'email',
  file: 'file',
  hidden: 'hidden',
  month: 'month',
  number: 'number',
  password: 'password',
  reset: 'reset',
  search: 'search',
  submit: 'submit',
  tel: 'tel',
  text: 'text',
  time: 'time',
  url: 'url',
} as const;

export type InputType = ObjectValues<typeof INPUT_TYPE>;
