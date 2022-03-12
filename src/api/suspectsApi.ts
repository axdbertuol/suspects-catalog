import axiosInstance from './axiosInstance';
import { AxiosResponse } from 'axios';
import { ISuspect } from '../utils/types';

export const getAllSuspects = async (): Promise<
  AxiosResponse<Array<ISuspect>, undefined>
> => {
  return axiosInstance.get('/suspects');
};
export const getSuspectById = async (
  id: string | undefined
): Promise<AxiosResponse<Array<ISuspect>, undefined>> => {
  return axiosInstance.get(`/suspects?id=${id}`);
};

export const saveSuspects = async (
  suspect: ISuspect
): Promise<AxiosResponse<Array<ISuspect>, undefined>> => {
  return axiosInstance.post('/suspects', suspect);
};

export const editSuspect = async (
  id: string,
  editedSuspect: ISuspect
): Promise<AxiosResponse<Array<ISuspect>, undefined>> => {
  return axiosInstance.put(`/messages/${id}`, editedSuspect);
};
export const deleteSuspect = async (id: string) => {
  return axiosInstance.delete<AxiosResponse<Array<ISuspect>, undefined>>(
    `/messages/${id}`
  );
};
