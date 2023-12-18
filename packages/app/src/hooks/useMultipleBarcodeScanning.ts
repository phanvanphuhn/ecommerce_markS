import {useCallback} from 'react';
import ScanbotBarcodeSDK from 'react-native-scanbot-barcode-scanner-sdk';
import {useNavigation} from '@react-navigation/native';
import colors from 'res/colors';

export function useMultipleBarcodeScanning() {
  return useCallback(async () => {
    try {
      const licenseResult = await ScanbotBarcodeSDK.getLicenseInfo();

      if (licenseResult.isLicenseValid) {
        const scanResult = await ScanbotBarcodeSDK.startBatchBarcodeScanner({
          codeDensity: 'HIGH',
          viewFinderEnabled: false,
          finderTextHint: '',
          acceptedDocumentFormats: ['GS1'],
          barcodeFormats: ['QR_CODE'],
          overlayConfiguration: {
            overlayEnabled: true,
            automaticSelectionEnabled: true,
            polygonColor: colors.primary,
            textColor: colors.text,
            textContainerColor: colors.primary,
          },
          gs1DecodingEnabled: true,
          acceptedDocumentFormats: ['GS1'],
        });

        console.log(
          '=>(useMultipleBarcodeScanning.ts:16) scanResult',
          scanResult,
        );
        if (scanResult.status === 'OK') {
        }
      } else {
      }
    } catch (error) {}
  }, []);
}
