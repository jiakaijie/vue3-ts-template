import { webHostConfig } from './host';
import { envConfig, Env } from './type';

export const getEnv = (): Env => {
  const host = window.location.host;

  if (host === webHostConfig.pro) {
    return envConfig.pro;
  } else if (host === webHostConfig.gray) {
    return envConfig.gray
  } else if (host === webHostConfig.test) {
    return envConfig.test;
  } else {
    return envConfig.dev;
  }
}

export const env = getEnv();