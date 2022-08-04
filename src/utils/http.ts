import axios from 'axios';

import { apiHostConfig } from '../config/host';
import { env } from '../config/env';

const http = axios.create({
  baseURL: apiHostConfig[env],
  timeout: 5000,
  headers: {
    'content-type': 'application/json',
  },
});

http
  .interceptors
  .request
  .use(
    config => {
      // console.warn(config);
      return config;
    },
    error => Promise.reject(error)
  );

http
  .interceptors
  .response
  .use(
    response => {

      let { status = 0, data: responseData } = response || {};
      responseData =  responseData || {};
      status = status || 0;

      if (status !== 200) {
        return '';
      }

      // responseData：根据项目服务端返回数据改动
      let { errcode = 0, data = {}, errmsg = '' } = responseData;
      errcode = errcode || 0;
      data = data || {};
      errmsg = errmsg || '';

      if (errcode !== 0) {
        console.error('errmsg------', errmsg);
        // 提示弹窗
        return data;
      }

      return data;
    },
    error => {
      let { message = '' } = error || {};
      message = message || '';
      console.error('message------', message);
      // 提示弹窗

      return Promise.reject(error);
    });

export default http;