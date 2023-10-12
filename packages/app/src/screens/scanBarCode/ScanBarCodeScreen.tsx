import React, {useEffect, useMemo, useRef, useState} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  Platform,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Vibration,
  View,
} from 'react-native';
import {
  Camera,
  frameRateIncluded,
  useCameraDevices,
  useFrameProcessor,
} from 'react-native-vision-camera';
import {BarcodeFormat, useScanBarcodes} from 'vision-camera-code-scanner';
import {useIsFocused} from '@react-navigation/core';
import Container from 'elements/Layout/Container';
import Theme from 'res/style/Theme';
import ButtonIcon from 'elements/Buttons/ButtonIcon';
import images from 'res/images';
import Text from 'elements/Text';
import colors from 'res/colors';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {BaseNavigationProps} from 'navigation/BaseNavigationProps';
import {MainParamList} from 'navigation/service/NavigationParams';
import {width} from 'res/sizes';
import useStateCustom from 'hooks/useStateCustom';
import {useAppState} from '@react-native-community/hooks';
import PhotoViewer from 'screens/scanBarCode/components/PhotoViewer';
import {Routes} from 'configs';
import {Polygon, Rect, Svg} from 'react-native-svg';
import {Text as SVGText} from 'react-native-svg/lib/typescript/ReactNativeSVG';
import {runOnJS, useSharedValue} from 'react-native-reanimated';
import {Barcode, scanBarcodes} from 'vision-camera-code-scanner/src';

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
  const askPermission = async () => {
    try {
      const getPermission = await Camera.getCameraPermissionStatus();
      if (getPermission === 'denied') {
        const reqPrmission = await Camera.requestCameraPermission();
        if (reqPrmission === 'authorized') {
          setState({cameraAccess: true});
        } else {
          props.navigation.goBack();
        }
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    askPermission();
  }, []);
  const insets = useSafeAreaInsets();
  const cameraRef = useRef<Camera>(null);
  const devices = useCameraDevices();
  const device = devices.back;
  const format = useMemo(() => {
    if (!device?.formats) {
      return undefined;
    }
    const sortedFormats = device.formats.sort((a, b) => a - b);
    const formatsWith60FPS = sortedFormats.filter(f =>
      f.frameRateRanges.some(r => frameRateIncluded(r, 60)),
    );
    if (formatsWith60FPS.length > 0) {
      return formatsWith60FPS[1];
    }
    if (sortedFormats.length > 0) {
      return sortedFormats[0];
    }
    return undefined;
  }, [device?.formats]);
  const fps = useMemo(() => {
    if (!format) {
      return undefined;
    }
    return Math.max(...format.frameRateRanges.map(range => range.maxFrameRate));
  }, [format]);
  const [frameProcessor, barcodes] = useScanBarcodes(
    [BarcodeFormat.ALL_FORMATS],
    {
      checkInverted: true,
    },
  );
  const onQRCodeDetected = Worklets.createRunInJsFn((qrCode: any) => {
    console.log(
      '=>(ScanBarCodeScreen.tsx:99) qrCode',
      qrCode.map(e => e.cornerPoints),
    );
    if (!isScan.current) {
      Vibration.vibrate(100);
      // props.navigation.goBack();
      isScan.current = true;
    }
  });
  useEffect(() => {
    if (barcodes.length > 0) {
      onQRCodeDetected(barcodes);
    }
  }, [onQRCodeDetected, barcodes]);
  if (!device && !state.cameraAccess && !isFocused) {
    console.log('camera not found');
    return <ActivityIndicator style={styles.sectionContainer} size={'large'} />;
  }
  const onTakePhoto = async () => {
    const photo = await cameraRef.current?.takePhoto();
    console.log('=>(ScanBarCodeScreen.tsx:101) path', photo);
    setState({pathLocal: photo?.path ? `file://${photo?.path}` : ''});
  };

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
      <View style={Theme.flex1}>
        {!!device && (
          <Camera
            style={StyleSheet.absoluteFill}
            ref={cameraRef}
            device={device}
            isActive={isActive}
            enableZoomGesture={true}
            fps={fps}
            photo={true}
            frameProcessor={frameProcessor}
          />
        )}
      </View>
      <View
        style={[
          styles.containerFooter,
          {
            paddingBottom: insets.bottom + 15,
          },
        ]}>
        <TouchableOpacity onPress={onTakePhoto} style={styles.buttonSnap}>
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
