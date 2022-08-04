export const apiHostConfig = {
  dev: 'https://test-xxx.com',
  // dev: 'http://xxx',
  test: 'https://test-xxx.com',
  gray: 'https://gray-xxx.com',
  pro: 'https://xxx.com',
} as const;

export const webHostConfig = {
  dev: '',
  test: 'test-xxx.com',
  gray: 'gray-xxx.com',
  pro: 'xxx.com',
} as const;

export const sensorsConfig = {
  // dev: '',
  dev: 'https://sensorsdata.xxx.com:8080/sa?project=xxx_default',
  // test: '',
  test: 'https://sensorsdata.xxx.com:8080/sa?project=xxx_default',
  gray: 'https://sensorsdata.xxx.com:8080/sa?project=xxx_production',
  pro: 'https://sensorsdata.xxx.com:8080/sa?project=xxx_production',
}