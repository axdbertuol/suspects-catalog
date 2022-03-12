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
