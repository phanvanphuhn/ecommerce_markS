import {useCallback} from 'react';
import ScanbotBarcodeSDK from 'react-native-scanbot-barcode-scanner-sdk';
const parser = require('gs1-barcode-parser-mod2');
let barcode =
  ']C101040123456789011715012910ABC1233932978471131030005253922471142127649716';
console.log(
  '=>(useSingleBarcodeScanning.ts:7) parser.parseBarcode(barcode)',
  parser.parseBarcode(barcode),
);
let licenseKey =
  'Rg9jARqhJYwa/lMAOGwNjukdWS25QaY+y7Kj19LkXhISYxj43v4raZ+ujJC5et32RVtKjHHdbOFv/kaC4POTR2MN0ZC+xetbqSEpUpFTUqDYhFs8joy5Sk4nM86ZmcpOHtcJzSfXtWV3BPZrWwibgH+x/ZSu26La46kyIZBy3M5SMmDXSWtmZCh6p7RqC/5meW5XrSvfauja0WXWkwiCG3xF2e1j4mJ8HY+uIvgiZStCLBqlCFAFHOHplRcOpAuGS5zlX/5kIQiJqJEivZ50ViKK+c23K+oz5SiDtdFtIqCKkQHgnUmSf8VLbvuF21gjXpx9FSohBf4KqSYz8brryQ==\nU2NhbmJvdFNESwpjb20uYm9zdG9uc2NpZW50aWZpYy5tYXJrCjE3MDY3NDU1OTkKNTEyCjM=\n';
export function useSingleBarcodeScanning() {
  return useCallback(async () => {
    try {
      const licenseResult = await ScanbotBarcodeSDK.getLicenseInfo();
      console.log(
        '=>(useSingleBarcodeScanning.ts:16) licenseResult',
        licenseResult,
      );

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
