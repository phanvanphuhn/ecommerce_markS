import Routes from 'configs/Routes';
import {reset} from 'navigation/service/RootNavigation';
import React, {useEffect} from 'react';
import {ImageBackground} from 'react-native';
import images from 'res/images';
import Theme from 'res/style/Theme';
import {height, width} from 'res/sizes';
import Container from 'elements/Layout/Container';

const SplashScreen = () => {
  useEffect(() => {
    setTimeout(() => {
      reset(Routes.LoginScreen);
    }, 2000);
  }, []);
  return (
    <Container
      dark={true}
      hideHeader={true}
      style={[Theme.flex1, Theme.center]}>
      <ImageBackground
        style={{height: height, width: width}}
        source={images.LoadingScreen}
      />
    </Container>
  );
};

export default SplashScreen;
