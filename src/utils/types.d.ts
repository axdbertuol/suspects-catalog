import React, { ChangeEvent } from 'react';

export interface ISuspect {
  id?: string;
  balance?: number;
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
  registered?: string;
  latitude?: number;
  longitude?: number;
  participants?: Array<ISuspect>;
}

export interface IOnChange {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export interface IOnSubmit {
  onSubmit: React.FormEventHandler<HTMLInputElement>;
}

export interface KeyValue {
  [key: string]: string | number | boolean;
}
