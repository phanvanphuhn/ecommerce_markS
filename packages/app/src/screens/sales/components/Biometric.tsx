import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Platform,
  Alert,
  TouchableOpacity,
} from 'react-native';
import TouchID from 'react-native-touch-id';
import {
  check,
  openSettings,
  PERMISSIONS,
  RESULTS,
} from 'react-native-permissions';
import colors from 'res/colors';
import Image from 'elements/Image';
import images from 'res/images';
import Theme from 'res/style/Theme';
import Text from 'elements/Text';
import ReactNativeBiometrics, {BiometryTypes} from 'react-native-biometrics';
interface BiometricProps {
  onSuccess?: () => void;
}

const Biometric = (props: BiometricProps) => {
  const handleLoginBySecurityDevice = async () => {
    try {
      const rnBiometrics = new ReactNativeBiometrics({
        allowDeviceCredentials: true,
      });

      let {available, biometryType} = await rnBiometrics.isSensorAvailable();
      if (
        available &&
        (biometryType === BiometryTypes.TouchID ||
          biometryType === BiometryTypes.FaceID ||
          biometryType === BiometryTypes.Biometrics)
      ) {
        console.log('TouchID is supported');
        let result = await rnBiometrics.simplePrompt({
          promptMessage: 'Confirm fingerprint',
        });
        if (result.success) {
          props?.onSuccess && props.onSuccess();
        }

        console.log('=>(Biometric.tsx:72) result', result);
      } else {
        console.log('Biometrics not supported');
      }
    } catch (e) {}
  };

  // useEffect(() => {
  //   handleLoginBySecurityDevice();
  // }, []);
  const [state, setState] = useState();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={handleLoginBySecurityDevice}
        style={{
          padding: 10,
          backgroundColor: colors.white,
          borderRadius: 10,
          ...Theme.shadow,
          elevation: 6,
          ...Theme.center,
        }}>
        <Image
          source={Platform.OS == 'ios' ? images.ic_face : images.ic_unlock}
        />
        {Platform.OS == 'ios' && (
          <Text color={colors.dotActive} fontWeight={'700'}>
            {'Face ID'}
          </Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default Biometric;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    paddingTop: 20,
    justifyContent: 'center',
  },
});
