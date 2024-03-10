import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import images from 'res/images';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import colors from 'res/colors';
import Text from 'elements/Text';
import ModalSelect from 'components/ModalSelect';
import strings from 'res/strings';
import ModalBottom from 'components/ModalBase/ModalBottom';
import useStateCustom from 'hooks/useStateCustom';
import useImagePicker from 'hooks/useImagePicker';
import {ImageOrVideo} from 'react-native-image-crop-picker';
import {useFormikContext} from 'formik';
import {CaseLogInput} from 'apollo/query/upsertCaseLog';
import * as mime from 'react-native-mime-types';

interface UploadImageProps {}

const UploadImage = (props: UploadImageProps) => {
  const formik = useFormikContext<CaseLogInput>();
  const [state, setState] = useStateCustom({
    isShowAction: false,
  });
  const {onChooseCamera, onChoosePicker} = useImagePicker();

  const onClose = () => setState({isShowAction: false});
  function generateRNFile(uri: string, name: string) {
    return uri
      ? {
          uri,
          type: mime.lookup(uri) || 'image',
          name,
        }
      : null;
  }
  const onSelected = async (item: any) => {
    console.log('=>(ChatbotScreen.tsx:71) item', item);
    try {
      let res: ImageOrVideo;
      switch (item.id) {
        case 1:
          res = await onChooseCamera();
          break;
        case 2:
          res = await onChoosePicker();
          break;

        default:
          break;
      }
      if (res) {
        formik.setFieldValue('files', [res.path]);
      }
    } catch (error) {}
  };

  return (
    <View style={styles.container}>
      <View style={styles.wrapItem}>
        <Image
          source={images.ic_scanBarcode}
          style={{height: 24, width: 24, marginRight: 8}}
        />

        <Text>Upload Photos</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          flex: 1,
          marginBottom: 10,
        }}>
        {formik.values.files.map(value => {
          return (
            <Image
              source={{uri: value}}
              style={{
                width: 70,
                height: 70,
                borderRadius: 5,
                marginRight: 4,
              }}
            />
          );
        })}
      </View>
      <View style={styles.wrapItem}>
        <TouchableOpacity
          onPress={() => {
            setState({isShowAction: true});
          }}
          style={styles.buttonUpload}>
          <IconMaterialIcons name="camera-alt" size={30} color={'#8D8D8D'} />
          <Text style={styles.buttonTitle}>Upload Photos</Text>
        </TouchableOpacity>
      </View>
      <ModalBottom isVisibleModal={state.isShowAction}>
        <ModalSelect
          choices={[
            {
              id: 1,
              name: strings.capture,
            },
            {
              id: 2,
              name: strings.chooseImage,
            },
          ]}
          close={onClose}
          onPressItem={onSelected}
        />
      </ModalBottom>
    </View>
  );
};

export default UploadImage;

const styles = StyleSheet.create({
  container: {},
  wrapItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  wrapButton: {
    padding: 8,
    backgroundColor: '#F2F2F2',
    borderRadius: 14,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 4,
  },
  buttonTitle: {
    fontWeight: '400',
    fontSize: 12,
    color: '#8D8D8D',
    marginLeft: 4,
  },
  errorTitle: {
    color: colors.red,
    fontWeight: '500',
  },
  buttonUpload: {
    paddingVertical: 18,
    paddingHorizontal: 10,
    backgroundColor: '#F2F2F2',
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 4,
  },
});
