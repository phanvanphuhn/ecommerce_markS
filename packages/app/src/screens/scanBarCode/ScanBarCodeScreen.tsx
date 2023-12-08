import React, {useEffect, useRef} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {useIsFocused} from '@react-navigation/core';
import Container from 'elements/Layout/Container';
import ButtonIcon from 'elements/Buttons/ButtonIcon';
import images from 'res/images';
import colors from 'res/colors';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {BaseNavigationProps} from 'navigation/BaseNavigationProps';
import {MainParamList} from 'navigation/service/NavigationParams';
import {width} from 'res/sizes';
import useStateCustom from 'hooks/useStateCustom';
import {useAppState} from '@react-native-community/hooks';
import PhotoViewer from 'screens/scanBarCode/components/PhotoViewer';
import ScanbotBarcodeSDK from 'react-native-scanbot-barcode-scanner-sdk';
import {useSingleBarcodeScanning} from 'hooks/useSingleBarcodeScanning';

interface ScanBarCodeScreenProps {}
interface IState {
  pathLocal?: string;
  cameraAccess?: boolean;
}

const ScanBarCodeScreen = (props: BaseNavigationProps<MainParamList>) => {
  const [state, setState] = useStateCustom<IState>({
    pathLocal: '',
    cameraAccess: false,
  });
  const isScan = useRef(false);
  const isFocused = useIsFocused();
  const appState = useAppState();
  const isActive = isFocused && appState === 'active';

  const insets = useSafeAreaInsets();
  // if (!device && !state.cameraAccess && !isFocused) {
  //   console.log('camera not found');
  //   return <ActivityIndicator style={styles.sectionContainer} size={'large'} />;
  // }
  // const onTakePhoto = async () => {
  //   console.log('=>(ScanBarCodeScreen.tsx:101) path', photo);
  //   setState({pathLocal: photo?.path ? `file://${photo?.path}` : ''});
  // };
  const onScan = useSingleBarcodeScanning();
  if (state.pathLocal) {
    return (
      <PhotoViewer
        source={{uri: state.pathLocal}}
        onClose={() => setState({pathLocal: ''})}
      />
    );
  }
  return (
    <Container hideHeader={true} style={styles.sectionContainer}>
      <View
        style={[
          styles.containerHeader,
          {
            paddingTop: insets.top + 15,
          },
        ]}>
        <ButtonIcon
          onPress={props.navigation.goBack}
          icon={images.ic_x}
          tintColor={colors.white}
        />
      </View>
      <View
        style={[
          styles.containerFooter,
          {
            paddingBottom: insets.bottom + 15,
          },
        ]}>
        <TouchableOpacity onPress={onScan} style={styles.buttonSnap}>
          <View style={styles.buttonBorderSnap} />
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default ScanBarCodeScreen;

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
  },
  containerHeader: {
    backgroundColor: colors.black,
    paddingBottom: 15,
    paddingHorizontal: 15,
  },
  containerFooter: {
    backgroundColor: colors.black,
    paddingTop: 15,
    paddingHorizontal: 15,
  },
  buttonSnap: {
    backgroundColor: colors.white,
    height: width / 6,
    width: width / 6,
    borderRadius: width / 6 / 2,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonBorderSnap: {
    borderColor: colors.black,
    borderWidth: 3,
    height: '90%',
    width: '90%',
    borderRadius: width / 6 / 2,
  },
});
