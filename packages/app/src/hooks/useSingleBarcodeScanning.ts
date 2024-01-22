import {useCallback} from 'react';
import ScanbotBarcodeSDK from 'react-native-scanbot-barcode-scanner-sdk';

export function useSingleBarcodeScanning() {
  return useCallback(async () => {
    try {
      const licenseResult = await ScanbotBarcodeSDK.getLicenseInfo();

      if (licenseResult.isLicenseValid) {
        const scanResult = await ScanbotBarcodeSDK.startBarcodeScanner({
          gs1DecodingEnabled: false,
          codeDensity: 'HIGH',
        });
        console.log(
          '=>(useSingleBarcodeScanning.ts:13) scanResult',
          scanResult,
        );
        if (scanResult.status === 'OK') {
        }
      } else {
      }
    } catch (error) {
      console.log('=>(useSingleBarcodeScanning.ts:18) error', error);
    }
  }, []);
}
