import { AxiosPromise } from 'axios';
import http from '../utils/http';

interface IGetExData {
  id: number;
}
export const getEx = (data: IGetExData): AxiosPromise<any> => {
  return http({
    url: '/api/getEx',
    method: 'GET',
    params: data,
  })
}

interface IPostExData {
  id: number;
  name: string;
  age: number;
}
export const postEx = (data: IPostExData): AxiosPromise<any> => {
  return http({
    url: '/api/postEx',
    method: 'POST',
    data
  })
}

interface IPutExData {
  id: number;
  name: string;
  age: number;
}
export const putEx = (data: IPutExData): AxiosPromise<any> => {
  return http({
    url: '/api/putEx',
    method: 'PUT',
    data
  })
}

interface IDeleteExData {
  id: number
}
export const deleteEx = (data: IDeleteExData): any => {
  return http({
    url: '/api/putEx',
    method: 'DELETE',
    data
  })
}


export const getReport = (data: any): AxiosPromise<any> => {
  return http({
    url: '/api/getReport',
    params: data,
    headers: data.headers
  })
}