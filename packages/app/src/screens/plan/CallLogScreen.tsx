import Button1Click from 'components/Button/Button1Click';
import Container from 'elements/Layout/Container';
import React, {useId} from 'react';
import {ScrollView, StyleSheet, View, TouchableOpacity} from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import CalendarForm from './components/CalendarForm';
import InputForm from './components/InputForm';
import images from 'res/images';
import Button2Click from 'components/Button/Button2Click';
import {goBack, navigate} from 'navigation/service/RootNavigation';
import {FormikProvider, getIn, useFormik} from 'formik';
import {
  MUTATION_DATA_CALL_QUERY,
  PlanCallInput,
} from 'apollo/query/upsertPlanCall';
import ScrollWrapper from 'components/Scroll/ScrollWrapper';
import moment from 'moment';
import Text from 'elements/Text';
import colors from 'res/colors';
import Theme from 'res/style/Theme';
import {useLazyQuery, useMutation, useQuery} from '@apollo/client';
import {GET_LEADERBOARD_QUERY} from 'apollo/query/leaderboard';
import uuid from 'react-native-uuid';
import {useNavigation} from '@react-navigation/core';
import {BaseUseNavigationProps} from 'navigation/BaseNavigationProps';
import {MainParamList} from 'navigation/service/NavigationParams';
import {Dropdown} from 'react-native-element-dropdown';
import Routes from 'configs/Routes';
import {GET_DIVISION_LIST_QUERY} from 'apollo/query/getFilterDivisionList';
import {useSelector} from 'hooks/useSelector';
import * as Yup from 'yup';
import {roundDate} from 'utils/other-utils';

const CallLogScreen = (props: any) => {
  const {route} = props;
  console.log('=>(CallLogScreen.tsx:33) route', route);
  const navigation = useNavigation<BaseUseNavigationProps<MainParamList>>();
  const userProfile = useSelector(state => state.userProfile);
  const [onSubmitData] = useMutation(MUTATION_DATA_CALL_QUERY);
  const {data} = useQuery(GET_DIVISION_LIST_QUERY, {
    variables: {},
  });

  const formik = useFormik<PlanCallInput>({
    initialValues: {
      activitySubtype: route.params?.item?.activitySubtype || 'CALL',
      activityType: route.params?.item?.activityType || 'EVENT',
      contactName: route.params?.item?.contactName || '',
      account: route.params?.item?.account || '',
      description: route.params?.item?.description || '',
      division: route.params?.item?.division || '',
      endDate: route.params?.item?.endDate
        ? moment(route.params?.item?.endDate, 'YYYY-MM-DD HH:mm:ss').toDate()
        : roundDate(),
      startDate: route.params?.item?.startDate
        ? moment(route.params?.item?.startDate, 'YYYY-MM-DD HH:mm:ss').toDate()
        : roundDate(),
      location: route.params?.item?.location || '',
      ownerCountry: route.params?.item?.ownerCountry || '',
      salesForceId: route.params?.item?.salesForceId || '',
      status: route.params?.item?.status || 'IN_PROGRESS',
      subject: route.params?.item?.subject || '',
      uniqueIdInApp: route.params?.item?.uniqueIdInApp || '',
    },
    validationSchema: Yup.object({
      subject: Yup.string().required('Required!'),
      startDate: Yup.date().min(new Date(), 'Please choose future date!'),
      endDate: Yup.date().when('startDate', (startDate, schema) => {
        if (startDate) {
          const dayAfter = moment(startDate[0]).toDate();
          return schema.min(dayAfter, 'End date must after start date!');
        }
        return schema;
      }),
      account: Yup.string().required('Required!'),
      contactName: Yup.string().required('Required!'),
    }),
    onSubmit: async values => {
      console.log('=>(CallLogScreen.tsx:49) values', values);
      await onSubmitData({variables: {data: values}});
      navigation.replace(Routes.DrawerStack, {
        screen: Routes.MainTab,
        params: {
          screen: Routes.PlanScreen,
        },
      });
    },
  });

  const onCancel = async () => {
    await onSubmitData({
      variables: {
        data: {
          status: 'CANCELLED',
          uniqueIdInApp: route.params?.item?.uniqueIdInApp,
        },
      },
    });
    navigation.replace(Routes.DrawerStack, {
      screen: Routes.MainTab,
      params: {
        screen: Routes.PlanScreen,
      },
    });
  };

  const onSave = () => {
    formik.handleSubmit();
  };

  return (
    <>
      <Container
        title={route?.params?.isCreateNew ? 'Scheduling Call' : 'Call Log'}
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
        <ScrollWrapper
          formik={formik}
          style={{flex: 1, marginBottom: 100}}
          showsVerticalScrollIndicator={false}>
          <FormikProvider value={formik}>
            {/*{route?.params && <StatusPlanForm data={route?.params} />}*/}

            <View style={{padding: 16}}>
              <InputForm
                title={'Subject'}
                placeholder={'Call Name'}
                name={'subject'}
              />
              <View
                style={[
                  Theme.flexRow,
                  {justifyContent: 'space-between', marginBottom: 16},
                ]}>
                <Text fontWeight={'300'} color={colors.black} size={15}>
                  Starts
                </Text>
                <CalendarForm name={'startDate'} typeDate={'date'} />
                <CalendarForm
                  name={'startDate'}
                  typeDate={'time'}
                  title={'Choose Time'}
                />
              </View>

              <View
                style={[
                  Theme.flexRow,
                  {justifyContent: 'space-between', marginBottom: 16},
                ]}>
                <Text fontWeight={'300'} color={colors.black} size={15}>
                  Ends
                </Text>
                <CalendarForm name={'endDate'} typeDate={'date'} />
                <CalendarForm
                  name={'endDate'}
                  typeDate={'time'}
                  title={'Choose Time'}
                />
              </View>
              {!!getIn(formik.errors, 'endDate') &&
                getIn(formik.touched, 'endDate') && (
                  <View style={{marginTop: -8, marginBottom: 8}}>
                    <Text style={styles.errorTitle}>
                      {getIn(formik.errors, 'endDate')}
                    </Text>
                  </View>
                )}
              <InputForm
                title={'Type'}
                name={'activitySubtype'}
                placeholder={'Select Type'}
                type={'dropdown'}
                arrDropdown={[
                  {label: 'CALL', value: 'CALL'},
                  {label: 'CASE SUPPORT', value: 'CASE_SUPPORT'},
                  {label: 'EDETAILING', value: 'EDETAILING'},
                  {label: 'EDETAILING VIRTUAL', value: 'EDETAILING_VIRTUAL'},
                  {label: 'EMAIL', value: 'EMAIL'},
                  {label: 'FOLLOW UP', value: 'FOLLOW_UP'},
                  {
                    label: 'MARKETING MATERIAL PREPARATION',
                    value: 'MARKETING MATERIAL PREPARATION',
                  },
                  {label: 'MEETING', value: 'MEETING'},
                  {label: 'OTHER', value: 'OTHER'},
                  {label: 'PRECEPTORSHIP', value: 'PRECEPTORSHIP'},
                  {label: 'PROCTORSHIP', value: 'PROCTORSHIP'},
                  {label: 'PRODUCT DEMO', value: 'PRODUCT_DEMO'},
                  {label: 'REMOTE CASE SUPPORT', value: 'REMOTE_CASE_SUPPORT'},
                  {label: 'SEND LETTER', value: 'SEND_LETTER'},
                  {label: 'SEND QUOTE', value: 'SEND_QUOTE'},
                  {label: 'WEBINARS', value: 'WEBINARS'},
                ]}
                rightIcon={
                  <IconAntDesign name="downcircle" size={15} color={'black'} />
                }
              />

              <InputForm
                name={'description'}
                title={'Description'}
                placeholder={'Enter Description'}
                numberOfLines={3}
              />

              <InputForm
                title={'Location'}
                name={'location'}
                placeholder={'Location'}
              />
              <InputForm
                title={'Account'}
                name={'account'}
                placeholder={'Account Name'}
              />
              <InputForm
                title={'Name'}
                name={'contactName'}
                placeholder={'Contact Name'}
                rightIcon={
                  <TouchableOpacity
                    hitSlop={{top: 10, left: 10, right: 10, bottom: 10}}
                    onPress={() =>
                      navigation.navigate(Routes.DoctorSearchScreen)
                    }>
                    <IconAntDesign name="search1" size={15} color={'grey'} />
                  </TouchableOpacity>
                }
              />
              <InputForm
                title={'Division'}
                dropdownPosition={'top'}
                name={'division'}
                arrDropdown={
                  data?.data
                    ?.filter(e => !!e)
                    ?.map(e => ({value: e, label: e})) || []
                }
                type={'dropdown'}
                placeholder={'Select Division'}
                rightIcon={
                  <IconAntDesign name="downcircle" size={15} color={'black'} />
                }
              />
            </View>
          </FormikProvider>
        </ScrollWrapper>
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
  errorTitle: {
    color: colors.red,
    fontWeight: '500',
  },
});

export default CallLogScreen;
