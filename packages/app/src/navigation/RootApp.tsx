// In App.js in a new project

import {useReduxDevToolsExtension} from '@react-navigation/devtools';
import {NavigationContainer} from '@react-navigation/native';
import LinkingConfiguration from 'navigation/service/LinkingConfiguration';
import * as React from 'react';
import 'react-native-gesture-handler';
import RootStack from './RootStack';
import {isReadyRef, navigationRef} from './service/RootNavigation';

// Define multiple groups of screens in objects like this

function RootApp() {
  useReduxDevToolsExtension(navigationRef);
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      // theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
      onReady={() => {
        isReadyRef.current = true;
      }}
      // onStateChange={(state) => {
      //   const previousRouteName = routeNameRef.current;
      //   const currentRouteName = getActiveRouteName(state);

      //   if (previousRouteName !== currentRouteName) {
      //     analytics().setCurrentScreen(currentRouteName, currentRouteName);
      //   }
      // }}
      ref={navigationRef}>
      <RootStack />
    </NavigationContainer>
  );
}

export default RootApp;
