/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {LocalizationProvider} from 'assets/languages/Translations';
import LoadingComponent from 'components/Loading/LoadingComponent';
import LoadingManager from 'components/Loading/LoadingManager';
import NotificationConfig from 'components/NotificationConfig';
import {persistor, store} from 'middlewares/stores';
import RootApp from 'navigation/RootApp';
import * as React from 'react';
import {StyleSheet} from 'react-native';
import FlashMessage from 'react-native-flash-message';
import 'react-native-gesture-handler';
import {MenuProvider} from 'react-native-popup-menu';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import 'utils/string-utils';
import RootView from './src/RootView';
import SplashScreen from 'screens/SplashScreen/SplashScreen';
import NetworkProvider from 'apollo/NetworkProvider';
import CodePush from 'react-native-code-push';
import {useEffect} from 'react';
import ScanbotBarcodeSDK from 'react-native-scanbot-barcode-scanner-sdk';
import Config from 'react-native-config';

const App = () => {
  const loadingRef: any = React.useRef();
  React.useEffect(() => {
    loadingRef && LoadingManager.register(loadingRef);
    const options = {
      licenseKey: Config.LICENSE_KEY,
      loggingEnabled: !!__DEV__, // Consider switching logging OFF in production builds for security and performance reasons!
    };
    ScanbotBarcodeSDK.initializeSdk(options)
      .then(res => {
        console.log('=>(App.tsx:45) res', res);
      })
      .catch(err => {
        console.log('=>(App.tsx:47) err', err);
      });
    return () => {
      LoadingManager.unregister(loadingRef);
    };
  }, []);
  return (
    <Provider store={store}>
      {/*<PersistGate loading={null} persistor={persistor}>*/}
      <LocalizationProvider>
        <RootView>
          <NetworkProvider>
            <NotificationConfig>
              <MenuProvider>
                <RootApp />
                <FlashMessage style={{paddingTop: 20}} />
              </MenuProvider>
              <LoadingComponent ref={loadingRef} />
            </NotificationConfig>
          </NetworkProvider>
        </RootView>
      </LocalizationProvider>
      {/*</PersistGate>*/}
    </Provider>
  );
};

const styles = StyleSheet.create({});
let codePushOptions = {
  checkFrequency: CodePush.CheckFrequency.MANUAL,
  //   checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME,
  updateDialog: false,
  installMode: CodePush.InstallMode.IMMEDIATE,
  mandatoryInstallMode: CodePush.InstallMode.IMMEDIATE,
};
export default CodePush(codePushOptions)(App);
