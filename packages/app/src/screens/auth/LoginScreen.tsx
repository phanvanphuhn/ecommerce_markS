import React, {useState} from 'react';
import {Alert, ImageBackground, Platform, StyleSheet} from 'react-native';
import images from 'res/images';
import Image from 'elements/Image';
import ButtonText from 'elements/Buttons/ButtonText';
import strings from 'res/strings';
import colors from 'res/colors';
import {reset} from 'navigation/service/RootNavigation';
import Routes from 'configs/Routes';
import Container from 'elements/Layout/Container';
import AzureAuth from 'react-native-azure-auth';
import {useAppDispatch} from 'middlewares/stores';
import {onLogin} from 'middlewares/actions/auth/actionLogin';
import {UserProfile} from 'res/type/Auth';
import {hideLoading, showLoading} from 'components/Loading/LoadingComponent';
import {useLazyQuery} from '@apollo/client';
import {GET_ME} from 'apollo/query/me';
import Config from 'react-native-config';

interface LoginScreenProps {}
export const azureAuth = new AzureAuth({
  //prod
  clientId: '9c15d13f-0379-4238-b024-99e03709f8dd',
  //uat
  // clientId: '488a032d-e391-4559-a255-42cb071b4557',
  tenant: 'b5b8b483-5597-4ae7-8e27-fcc464a3b584',
  // authorityUrl: 'https://login.microsoftonline.com/common',

  redirectUri:
    Platform.OS === 'ios'
      ? 'msauth.com.bostonscientific.marks://auth/'
      : undefined,
});
const LoginScreen = (props: LoginScreenProps) => {
  const [azureToken, setAzureToken] = React.useState();
  const [azureUserInfo, setAzureUserInfo] = React.useState();
  const dispatch = useAppDispatch();
  const [getData, {data}] = useLazyQuery(GET_ME);

  const getAzureToken = async () => {
    try {
      showLoading();
      // await azureAuth.webAuth.clearSession({closeOnLoad: true});
      let auth = await azureAuth.webAuth.authorize({
        scope: 'openid',
      });
      if (auth?.accessToken) {
        let info: UserProfile = await azureAuth.auth.msGraphRequest({
          token: auth.accessToken,
          path: '/me',
        });
        console.log('auth.rawIdToken: ', auth);
        dispatch(onLogin(info, auth.rawIdToken));
        let data = await getData();
        hideLoading();
        if (
          data?.data?.data?.groups.includes(
            'a6f11bfc-e68e-4033-bce9-922e14d8a4a8',
          )
        ) {
          reset(Routes.DrawerStack);
        } else {
          Alert.alert(
            'System Alert',
            'Mark S is not applicable for your profile, contact JARVIS team for more info',
            [{text: 'OK', onPress: () => {}}],
          );
        }
      } else {
        hideLoading();
        Alert.alert(
          'System Alert',
          'Mark S is not applicable for your profile, contact JARVIS team for more info',
          [{text: 'OK', onPress: () => {}}],
        );
      }
    } catch (error) {
      hideLoading();

      console.log(error);
    }
  };
  const _onLogin = () => {
    // reset(Routes.DrawerStack);
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
          onPress={_onLogin}
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
