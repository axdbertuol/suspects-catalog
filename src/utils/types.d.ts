export interface ISuspect {
  id?: string;
  balance?: string;
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
