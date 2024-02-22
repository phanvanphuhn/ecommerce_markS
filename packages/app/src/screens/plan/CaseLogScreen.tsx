import Button1Click from 'components/Button/Button1Click';
import Button2Click from 'components/Button/Button2Click';
import Container from 'elements/Layout/Container';
import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
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
import {useMutation} from '@apollo/client';
import {useNavigation} from '@react-navigation/core';
import {BaseUseNavigationProps} from 'navigation/BaseNavigationProps';
import {MainParamList} from 'navigation/service/NavigationParams';
import {CaseLogOutput, upsertCaseLog} from 'apollo/query/upsertCaseLog';
import * as Yup from 'yup';
import moment from 'moment/moment';
import {roundDate} from 'utils/other-utils';

const CaseLogScreen2 = (props: any) => {
  const {route} = props;
  const onCancel = () => {};

  const onSave = () => {
    formik.handleSubmit();
  };
  const [onSubmitData] = useMutation(upsertCaseLog);
  const navigation = useNavigation<BaseUseNavigationProps<MainParamList>>();

  const formik = useFormik<CaseLogOutput>({
    initialValues: {
      caseName: '',
      endDate: route.params?.item?.endDate
        ? moment(route.params?.item?.endDate, 'YYYY-MM-DD HH:mm:ss').toDate()
        : roundDate(),
      startDate: route.params?.item?.startDate
        ? moment(route.params?.item?.startDate, 'YYYY-MM-DD HH:mm:ss').toDate()
        : roundDate(),
      account: '',
      location: '',
      contact: '',
      secondaryContact: '',

      id: uuid.v4(),
      status: 'IN_PROGRESS',
    },
    validationSchema: Yup.object({
      caseName: Yup.string().required('Required!'),
      startDate: Yup.date().min(new Date(), 'Please choose future date!'),
      endDate: Yup.date().when('startDate', (startDate, schema) => {
        if (startDate) {
          const dayAfter = new Date(startDate[0]?.getTime() + 3600000);
          return schema.min(dayAfter, 'End date must after start date!');
        }
        return schema;
      }),
      account: Yup.string().required('Required!'),
      contact: Yup.string().required('Required!'),
    }),
    onSubmit: async values => {
      console.log('=>(CallLogScreen.tsx:49) values', values);
      await onSubmitData({variables: {data: values}});
      navigation.goBack();
    },
  });
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
                placeholder={'Procedure'}
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
                name={'account'}
                title={'Account'}
                placeholder={'Account Name'}
              />
              <InputForm
                name={'location'}
                title={'Location'}
                placeholder={'Location'}
              />

              <InputForm
                name={'contact'}
                title={'Contact'}
                placeholder={'Contact'}
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

                  <View style={styles.wrapItem}>
                    <Image
                      source={images.ic_scanBarcode}
                      style={{height: 24, width: 24, marginRight: 8}}
                    />

                    <Text>Upload Photos</Text>
                  </View>
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
});

export default CaseLogScreen2;
