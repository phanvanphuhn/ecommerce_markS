import ImagePicker, {ImageOrVideo} from 'react-native-image-crop-picker';
import {width} from 'res/sizes';

const useImagePicker = () => {
  const onChooseCamera = (): Promise<ImageOrVideo> => {
    return new Promise((resolve, reject) => {
      const widthCrop = width * 2;
      ImagePicker.openCamera({
        cropping: false,
        freeStyleCropEnabled: true,
        mediaType: 'photo',
        width: widthCrop,
        height: Math.floor(widthCrop / 2),
        useFrontCamera: true,
      })
        .then((image: ImageOrVideo) => {
          if (image) {
            resolve(image);
          }
        })
        .catch(err => {
          reject(err);
          if (err.message == 'User did not grant camera permission.') {
            // showPopup2Button(
            //   strings.permission.cameraTitle,
            //   strings.permission.cameraContent,
            //   strings.cancel,
            //   strings.settingLabel,
            //   undefined,
            //   () => {
            //     Linking.openSettings();
            //   },
            // );
          }
        });
    });
  };

  const onChoosePicker = (multiple?: boolean): Promise<ImageOrVideo> => {
    return new Promise((resolve, reject) => {
      const widthCrop = width * 2;
      ImagePicker.openPicker({
        cropping: false,
        freeStyleCropEnabled: true,
        mediaType: 'photo',
        width: widthCrop,
        height: Math.floor(widthCrop / 2),
        multiple,
        includeBase64: true,
      })
        .then((image: ImageOrVideo) => {
          resolve(image);
        })
        .catch(err => {
          reject(err);
          if (err.message == 'User did not grant library permission.') {
            // showPopup2Button(
            //   strings.permission.libraryTitle,
            //   strings.permission.libraryContent,
            //   strings.cancel,
            //   strings.settingLabel,
            //   undefined,
            //   () => {
            //     Linking.openSettings();
            //   },
            // );
          }
        });
    });
  };
  return {onChoosePicker, onChooseCamera};
};
export default useImagePicker;
