import {useCallback} from 'react';
import ScanbotBarcodeSDK from 'react-native-scanbot-barcode-scanner-sdk';
import {useNavigation} from '@react-navigation/native';

export function useMultipleBarcodeScanning() {
  return useCallback(async () => {
    try {
      const licenseResult = await ScanbotBarcodeSDK.getLicenseInfo();

      if (licenseResult.isLicenseValid) {
        const scanResult = await ScanbotBarcodeSDK.startBatchBarcodeScanner({
          viewFinderEnabled: false,
          finderTextHint: '',
          codeDensity: 'HIGH',
          gs1DecodingEnabled: true,
          acceptedDocumentFormats: ['GS1'],
          barcodeFilter: 'WithExtension',
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
