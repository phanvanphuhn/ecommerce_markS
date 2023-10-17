import Config from 'react-native-config';
console.log('=>(HostConfig.ts:2) Config', Config);

class HostConfig {
  //* ******************* DEV ******************* *//
  // BASE_URL = 'http://192.168.1.100:21002/';
  BASE_URL = Config.API_URL;

  //* ******************* LIVE ******************* *//
  // BASE_URL = 'http://54.238.168.46:8769/',

  // ********************************
  PREFIX = 'v1';
}
export default new HostConfig();
