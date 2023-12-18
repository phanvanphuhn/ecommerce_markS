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
import {Platform, StyleSheet} from 'react-native';
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
      licenseKey:
        Platform.OS == 'ios'
          ? 'VzYAOnOqCyAwVq1x/cL9ZALRzFk0djMAnwBIUYfLnwcvDeLLVJus4U6A9r0EvKr7D/cBl3c/zQk5cXhv2GgDmK1XucaXR6g+P0bygjyFcWkZpNs7DkA90sQJj6zoeH2goeYpIqs/OA2v1KJfFXgK3WA6WgGMlsilje+YhsCluq3Xkcwwt4Wot9I11P4U6Tqx76IgUUA2oi6hSy3sZSb1/VphvmJgRZi0ZViS038eQ362bxRWEMTQzFEDYI2wb3ZkKOb1F680cF8rOLMvZBaIykP1ceYR2z2UtR/shNL7+txApl1r8Y8IFGX4HGMZLEvF+jNngjgHgUB4qDIUC65gfw==\nU2NhbmJvdFNESwpjb20uYm9zdG9uc2NpZW50aWZpYy5tYXJrcwoxNzAzMDMwMzk5CjgzODg2MDcKMTk=\n'
          : 'lIWVCIHLm3odKCytuOop3g7Y4AirQM2bh5xJIyuFAOz/tm7RZm5YkmPnOtCCF9fpnyf0ARhLYExVYAxL/OvaxQbLKL2Yp9GIvXpYcmzbFyFRG5bRMYKTjRokR5+nrk6gSGBR758olIuopucfRmOUqfdXLU/ujOlmKzpRMZ0H1qwkY/tWGUhTTrHyVi0Z9ZvEmpusEjOmerYoGIdQfIqiI4K/6PJL2e5KAAVKbRRs/0Snu2HTlVxu4AywpB5fMih+/zulW9EG7ikRRKmgYTnoLqof5r38V890xCEoyFJEQlsg7mgVxUIvx0kr7XfZf0G0ao7jHfErUuXNmeiPtnb1jg==\nU2NhbmJvdFNESwpjb20uYnNjLm1hcmtzCjE3MDI2ODQ3OTkKODM4ODYwNwoxOQ==\n',
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
