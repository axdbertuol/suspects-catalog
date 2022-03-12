import { ChangeEvent } from 'react';

export interface ISuspect {
  id?: string;
  balance?: string | number;
  picture?: string;
  age?: number;
  eyeColor?: string;
  name?: string;
  gender?: string;
  company?: string;
  email?: string;
  phone?: string;
  address?: string;
  about?: string;
  registered?: string | boolean;
  latitude?: number;
  longitude?: number;
  participants?: Array<ISuspect>;
}

export interface IOnChange {
  onChange: React.FormEvent<HTMLInputElement>;
}

export interface IOnSubmit {
  onSubmit: React.FormEvent<HTMLInputElement>;
}
