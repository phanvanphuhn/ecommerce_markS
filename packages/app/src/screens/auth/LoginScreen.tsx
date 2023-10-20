import React, {useState} from 'react';
import {ImageBackground, Platform, StyleSheet} from 'react-native';
import images from 'res/images';
import Image from 'elements/Image';
import ButtonText from 'elements/Buttons/ButtonText';
import strings from 'res/strings';
import colors from 'res/colors';
import {reset} from 'navigation/service/RootNavigation';
import Routes from 'configs/Routes';
import Container from 'elements/Layout/Container';
import AzureAuth from 'react-native-azure-auth';

interface LoginScreenProps {}
export const azureAuth = new AzureAuth({
  clientId: '9c15d13f-0379-4238-b024-99e03709f8dd',
  tenant: 'b5b8b483-5597-4ae7-8e27-fcc464a3b584',
  // authorityUrl: 'https://login.microsoftonline.com/common',

  redirectUri:
    Platform.OS === 'ios'
      ? 'msauth.com.bostonscientific.marks://auth'
      : 'msauth://com.bsc.marks/iyXLYHxafPK15%2BOWQdNF0cfHGnY%3D',
});
const LoginScreen = (props: LoginScreenProps) => {
  const [azureToken, setAzureToken] = React.useState();
  const [azureUserInfo, setAzureUserInfo] = React.useState();
  const getAzureToken = async () => {
    try {
      // await azureAuth.webAuth.clearSession({closeOnLoad: true});
      let tokens = await azureAuth.webAuth.authorize({
        scope: 'openid',
      });
      console.log('tokens: ', tokens);
      setAzureToken({accessToken: tokens?.accessToken});
      let info = await azureAuth.auth.msGraphRequest({
        token: tokens.accessToken,
        path: '/me',
      });
      console.log('info: ', info);
      setAzureUserInfo({user: info.displayName, userId: tokens.userId});
    } catch (error) {
      console.log(error);
    }
  };
  const onLogin = () => {
    reset(Routes.DrawerStack);
    getAzureToken();
  };
  return (
    <Container hideHeader={true}>
      <ImageBackground source={images.img_background} style={styles.container}>
        <Image source={images.img_logo} />
        <ButtonText
          backgroundColor={colors.white}
          boderRadius={50}
          style={{
            paddingHorizontal: 20,
            width: '70%',
          }}
          height={50}
          onPress={onLogin}
          title={strings.loginWithSSO}
          textProps={{
            size: 18,
            lineHeight: 26,
            color: colors.blue3,
            fontWeight: '600',
          }}
        />
      </ImageBackground>
    </Container>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'space-evenly'},
});
