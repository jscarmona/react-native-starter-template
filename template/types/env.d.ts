declare module 'react-native-config' {
  export interface NativeConfig {
    [key: string]: string;
    // Add config vars here
    TITLE: string;
  }

  export const Config: NativeConfig;
  export default Config;
}
