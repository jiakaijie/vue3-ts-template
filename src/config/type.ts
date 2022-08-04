export const envConfig = {
  dev: 'dev',
  test: 'test',
  gray: 'gray',
  pro: 'pro',
} as const;

export type Env = keyof typeof envConfig;

export type EnvConfig = {
  [key in Env]: string;
};