import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, Platform, Alert} from 'react-native';
import TouchID from 'react-native-touch-id';
import {
  check,
  openSettings,
  PERMISSIONS,
  RESULTS,
} from 'react-native-permissions';
import colors from 'res/colors';
interface BiometricProps {
  onSuccess?: () => void;
}

const Biometric = (props: BiometricProps) => {
  const checkSupportBiometrics = () => {
    const optionalConfigCheckSupport = {
      fallbackLabel: '', // iOS (if empty, then label is hidden)
      unifiedErrors: false, // use unified error messages (default false)
      passcodeFallback: true, // if
    };
    TouchID.isSupported(optionalConfigCheckSupport)
      .then(biometryType => {
        console.log('=>(Biometric.tsx:21) biometryType', biometryType);
        if (Platform.OS === 'ios') {
        } else {
        }
      })
      .catch(() => {});
  };
  const handleCheckPermissionBlock = () => {
    Alert.alert(
      'No FaceID access',
      'Click settings to enable permission to use FaceID',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'Setting', onPress: () => openSettings()},
      ],
    );
  };
  const handleLoginBySecurityDevice = () => {
    let optionalConfigObject = {
      title: 'Authentication Required', // Android
      imageColor: colors.borderFocus, // Android
      imageErrorColor: '#ff0000', // Android
      sensorDescription: 'Touch sensor', // Android
      sensorErrorDescription: 'Failed', // Android
      cancelText: 'Cancel', // Android
      fallbackLabel: 'Show Passcode', // iOS (if empty, then label is hidden)
      unifiedErrors: false, // use unified error messages (default false)
      passcodeFallback: false, // iOS - allows the device to fall back to using the passcode, if faceid/touch is not available. this does not mean that if touchid/faceid fails the first few times it will revert to passcode, rather that if the former are not enrolled, then it will use the passcode.
    };
    TouchID.isSupported(optionalConfigObject)
      .then(biometryType => {
        if (biometryType === 'FaceID') {
          requestFaceIDPermission(
            handleEnableLoginSecurity,
            handleCheckPermissionBlock,
          );
        } else {
          handleEnableLoginSecurity();
        }
      })
      .catch(error => {
        props.onSuccess && props.onSuccess();
        console.log('=>(Biometric.tsx:68) error', error);
      });
  };

  useEffect(() => {
    handleLoginBySecurityDevice();
  }, []);
  const handleEnableLoginSecurity = async () => {
    try {
      let optionalConfigObject = {
        title: 'Authentication Required', // Android
        imageColor: colors.borderFocus, // Android
        imageErrorColor: '#ff0000', // Android
        sensorDescription: 'Touch sensor', // Android
        sensorErrorDescription: 'Failed', // Android
        cancelText: 'Cancel', // Android
        fallbackLabel: 'Show Passcode', // iOS (if empty, then label is hidden)
        unifiedErrors: false, // use unified error messages (default false)
        passcodeFallback: false, // iOS - allows the device to fall back to using the passcode, if faceid/touch is not available. this does not mean that if touchid/faceid fails the first few times it will revert to passcode, rather that if the former are not enrolled, then it will use the passcode.
      };
      let result = await TouchID.authenticate(
        `Please use ${
          Platform.OS == 'ios' ? 'fingerprint' : 'touchId'
        } for authentication`,
        optionalConfigObject,
      );
      if (result) {
        props?.onSuccess && props.onSuccess();
      }
      console.log('=>(Biometric.tsx:93) result', result);
    } catch (e) {}
  };
  const requestFaceIDPermission = async (
    reqSuccess: () => void,
    reqBlock: () => void,
  ) => {
    const res = await check(PERMISSIONS.IOS.FACE_ID);
    switch (res) {
      case RESULTS.UNAVAILABLE:
        break;
      case RESULTS.DENIED:
        break;
      case RESULTS.LIMITED:
        reqSuccess();
        break;
      case RESULTS.GRANTED:
        reqSuccess();
        break;
      case RESULTS.BLOCKED:
        reqBlock();
        break;
      default:
        break;
    }
  };
  const [state, setState] = useState();
  return <View style={styles.container} />;
};

export default Biometric;

const styles = StyleSheet.create({
  container: {},
});
