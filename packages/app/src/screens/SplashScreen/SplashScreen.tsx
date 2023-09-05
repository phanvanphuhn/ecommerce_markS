import Routes from 'configs/Routes';
import {BaseNavigationProps} from 'navigation/BaseNavigationProps';
import {MainParamList} from 'navigation/service/NavigationParams';
import {reset} from 'navigation/service/RootNavigation';
import React, {useEffect} from 'react';
import {Image, View} from 'react-native';
import images from 'res/images';
import Theme from 'res/style/Theme';
import {height, width} from 'res/sizes';
const Icon = images.LoadingScreen;
const SplashScreen = ({}: BaseNavigationProps<
  MainParamList,
  Routes.SplashScreen
>) => {
  useEffect(() => {
    setTimeout(() => {
      reset(Routes.DrawerStack);
    }, 2000);
  }, []);
  return (
    <View style={[Theme.flex1, Theme.center]}>
      <Image source={images.LoadingScreen} style={{width: 150, height: 150}} />
    </View>
  );
};

export default SplashScreen;
