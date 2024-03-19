import Button1Click from 'components/Button/Button1Click';
import Button2Click from 'components/Button/Button2Click';
import Container from 'elements/Layout/Container';
import React, {useEffect} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import images from 'res/images';
import CalendarForm from './components/CalendarForm';
import InputForm from './components/InputForm';
import {goBack, navigate} from 'navigation/service/RootNavigation';
import {FormikProvider, useFormik} from 'formik';
import {
  MUTATION_DATA_CALL_QUERY,
  PlanCallActivitySubtype,
  PlanCallActivityType,
  PlanCallInput,
  PlanCallStatus,
} from 'apollo/query/upsertPlanCall';
import uuid from 'react-native-uuid';
import Theme from 'res/style/Theme';
import colors from 'res/colors';
import Text from 'elements/Text';
import {useMutation, useQuery} from '@apollo/client';
import {useNavigation} from '@react-navigation/core';
import {BaseUseNavigationProps} from 'navigation/BaseNavigationProps';
import {MainParamList} from 'navigation/service/NavigationParams';
import {
  CaseLogInput,
  CaseLogOutput,
  upsertCaseLog,
} from 'apollo/query/upsertCaseLog';
import * as Yup from 'yup';
import moment from 'moment/moment';
import {roundDate} from 'utils/other-utils';
import UploadImage from 'screens/plan/components/UploadImage';
import ModalBottom from 'components/ModalBase/ModalBottom';
import ModalSelect from 'components/ModalSelect';
import strings from 'res/strings';
import AuthApi from 'network/apis/auth/AuthApi';
import RNFetchBlob from 'rn-fetch-blob';
import {GET_HOSPITAL_LIST_QUERY} from 'apollo/query/getFilterHospitalList';
import {GET_DOCTOR_QUERY} from 'apollo/query/getDoctorSearchList';
import Routes from 'configs/Routes';

const CaseLogScreen2 = (props: any) => {
  const {route} = props;
  console.log('=>(CaseLogScreen.tsx:41) route', route);
  const onCancel = () => {};

  const {data: dataHospital} = useQuery(GET_HOSPITAL_LIST_QUERY, {});
  const {data: dataDoctor} = useQuery(GET_DOCTOR_QUERY);

  const onSave = () => {
    formik.handleSubmit();
  };
  const [onSubmitData] = useMutation(upsertCaseLog);
  console.log('=>(CaseLogScreen.tsx:58) upsertCaseLog', upsertCaseLog);
  const navigation = useNavigation<BaseUseNavigationProps<MainParamList>>();
  useEffect(() => {
    formik.setFieldValue(
      'contact',
      route.params?.item?.contact ||
        dataDoctor?.data
          ?.filter(e => !!e.doctorName)
          ?.map(e => ({value: e.doctorName, label: e.doctorName}))[0].value,
    );
  }, [dataDoctor?.data, route.params?.item?.contact]);

  useEffect(() => {
    formik.setFieldValue(
      'account',
      route.params?.item?.account || dataHospital ? dataHospital?.data[0] : '',
    );
  }, [dataHospital, route.params?.item?.account]);

  const formik = useFormik<CaseLogInput>({
    initialValues: {
      caseName: route.params?.item?.caseName || '',
      endDate: route.params?.item?.endDate
        ? moment(route.params?.item?.endDate, 'YYYY-MM-DD HH:mm:ss').toDate()
        : roundDate({isPlus1: true}),
      startDate: route.params?.item?.startDate
        ? moment(route.params?.item?.startDate, 'YYYY-MM-DD HH:mm:ss').toDate()
        : roundDate({isPlus1: false}),
      account: route.params?.item?.account
        ? route.params?.item?.account
        : dataHospital?.data[0] || '',
      location: route.params?.item?.location || '',
      contact: route.params?.item?.contact
        ? route.params?.item?.contact
        : dataDoctor?.data
            ?.filter(e => !!e.doctorName)
            ?.map(e => ({value: e.doctorName, label: e.doctorName}))[0].value ||
          '',
      secondaryContact: route.params?.item?.secondaryContact || '',
      files: [],
      id: route.params?.item?.id || uuid.v4(),
      status: route.params?.item?.status || 'IN_PROGRESS',
    },
    validationSchema: Yup.object({
      caseName: Yup.string().required('Required!'),
      startDate: Yup.date(),
      endDate: Yup.date().when('startDate', (startDate, schema) => {
        if (startDate) {
          const dayAfter = new Date(startDate[0]?.getTime() + 3600000);
          return schema.min(dayAfter, 'End date must after start date!');
        }
        return schema;
      }),
    }),
    onSubmit: async values => {
      console.log('=>(CallLogScreen.tsx:49) values', values);
      if (values?.files?.length) {
        let form = new FormData();
        form.append(
          'operations',
          JSON.stringify({
            query:
              'mutation upsertCaseLog($data: CaseLogInput!) {\n    data: upsertCaseLog(data: $data) {\n      account\n      activityOwnerEmail\n      activityOwnerName\n      caseName\n      contact\n      createdAt\n      endDate\n      id\n      location\n      photoPaths\n      secondaryContact\n      startDate\n      status\n      updatedAt\n    }\n  }',
            variables: {
              data: {...values, files: undefined},
              files: null,
            },
          }),
        );
        form.append('map', JSON.stringify({'0': ['variables.data.files.0']}));
        form.append('0', {
          name: `${new Date().getTime()}.jpg`,
          type: 'image/jpg',
          uri: `file://${values.files[0]}`,
        });
        console.log('=>(CaseLogScreen.tsx:118) form', form);
        let res = await AuthApi.createCaseLog(form);
        console.log('=>(CaseLogScreen.tsx:98) res', res);
      } else {
        await onSubmitData({variables: {data: values}});
      }
      navigation.replace(Routes.DrawerStack, {
        screen: Routes.MainTab,
        params: {
          screen: Routes.PlanScreen,
        },
      });
    },
  });
  console.log('=>(CaseLogScreen.tsx:125) formik', formik);
  return (
    <>
      <Container
        title={route?.params?.isCreateNew ? 'Scheduling Case' : 'Case Log'}
        subTitle={route?.params?.isCreateNew ? 'Calendar' : null}
        iconTile={route?.params?.isCreateNew ? images.ic_circleCalendar : null}
        style={styles.container}
        buttonLeft={
          route?.params?.isCreateNew && (
            <TouchableOpacity onPress={() => goBack()}>
              <IconAntDesign name="close" color={'white'} size={32} />
            </TouchableOpacity>
          )
        }>
        <FormikProvider value={formik}>
          <ScrollView
            style={{flex: 1, marginBottom: 100}}
            showsVerticalScrollIndicator={false}>
            {/*{route?.params && <StatusPlanForm data={route?.params} />}*/}

            <View style={{padding: 16}}>
              <InputForm
                name={'caseName'}
                title={'Case'}
                placeholder={'Case Name'}
              />
              <View
                style={[
                  Theme.flexRow,
                  {justifyContent: 'space-between', marginBottom: 16},
                ]}>
                <Text
                  style={{width: '15%'}}
                  fontWeight={'300'}
                  color={colors.black}
                  size={15}>
                  Starts
                </Text>
                <CalendarForm name={'startDate'} typeDate={'date'} />
                <CalendarForm
                  name={'startDate'}
                  typeDate={'time'}
                  title={'Choose Time'}
                />
              </View>
              {formik.errors.startDate && formik.touched.startDate && (
                <View style={{marginTop: -8, marginBottom: 8}}>
                  <Text style={styles.errorTitle}>
                    {formik.errors.startDate}
                  </Text>
                </View>
              )}
              <View
                style={[
                  Theme.flexRow,
                  {justifyContent: 'space-between', marginBottom: 16},
                ]}>
                <Text
                  style={{width: '15%'}}
                  fontWeight={'300'}
                  color={colors.black}
                  size={15}>
                  Ends
                </Text>
                <CalendarForm name={'endDate'} typeDate={'date'} />
                <CalendarForm
                  name={'endDate'}
                  typeDate={'time'}
                  title={'Choose Time'}
                />
              </View>
              {formik.errors.endDate && formik.touched.endDate && (
                <View style={{marginTop: -8, marginBottom: 8}}>
                  <Text style={styles.errorTitle}>{formik.errors.endDate}</Text>
                </View>
              )}
              <InputForm
                title={'Account'}
                name={'account'}
                type={'dropdown'}
                arrDropdown={
                  dataHospital?.data
                    ?.filter(e => !!e)
                    ?.map(e => ({value: e, label: e})) || []
                }
                rightIcon={
                  <IconAntDesign name="downcircle" size={15} color={'black'} />
                }
                placeholder={'Account Name'}
              />
              <InputForm
                name={'location'}
                title={'Location'}
                placeholder={'Location'}
              />

              <InputForm
                title={'Name'}
                name={'contact'}
                placeholder={'Contact Name'}
                type={'dropdown'}
                arrDropdown={
                  dataDoctor?.data
                    ?.filter(e => !!e.doctorName)
                    ?.map(e => ({value: e.doctorName, label: e.doctorName})) ||
                  []
                }
                rightIcon={
                  <IconAntDesign name="downcircle" size={15} color={'black'} />
                }
              />
              <InputForm
                name={'secondaryContact'}
                title={'Secondary Contact'}
                placeholder={'Secondary Contact'}
              />
              {!route?.params?.isCreateNew && (
                <>
                  <View style={styles.wrapItem}>
                    <Image
                      source={images.ic_scanBarcode}
                      style={{height: 24, width: 24, marginRight: 8}}
                    />

                    <Text>Scan Barcode</Text>
                  </View>

                  <View style={styles.wrapItem}>
                    <TouchableOpacity style={styles.wrapButton}>
                      <IconMaterialCommunityIcons
                        name="line-scan"
                        size={15}
                        color={'#8D8D8D'}
                      />
                      <Text style={styles.buttonTitle}>Scan Barcode</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.wrapButton}>
                      <IconAntDesign name="plus" size={15} color={'#8D8D8D'} />
                      <Text style={styles.buttonTitle}>Add Product</Text>
                    </TouchableOpacity>
                  </View>
                  <UploadImage />
                </>
              )}
            </View>
          </ScrollView>
        </FormikProvider>
      </Container>

      {!route?.params?.isCreateNew ? (
        <Button2Click
          leftTile="Cancelled"
          rightTitle="Save"
          onLeftPress={onCancel}
          onRightPress={onSave}
        />
      ) : (
        <Button1Click title="Save" onPress={onSave} isSave={true} />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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

export default CaseLogScreen2;
