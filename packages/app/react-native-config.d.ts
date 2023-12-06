declare module 'react-native-config' {
  export interface NativeConfig {
    ENV: string;
    API_URL: string;
    GROUP_ID: string;
  }

  export const Config: NativeConfig;
  export default Config;
}
