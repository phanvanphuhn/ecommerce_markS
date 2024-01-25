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
import {FormikProvider, useFormik} from 'formik';
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
const CallLogScreen = (props: any) => {
  const {route} = props;
  console.log('=>(CallLogScreen.tsx:33) route', route);
  const navigation = useNavigation<BaseUseNavigationProps<MainParamList>>();
  const userProfile = useSelector(state => state.userProfile);
  const [onSubmitData] = useMutation(MUTATION_DATA_CALL_QUERY);
  const {data} = useQuery(GET_DIVISION_LIST_QUERY, {
    variables: {
      salesRepEmail: userProfile.user?.mail,
    },
  });
  const formik = useFormik<PlanCallInput>({
    initialValues: {
      activitySubtype: 'CALL',
      activityType: 'EVENT',
      contactName: '',
      description: '',
      division: '',
      endDate: new Date(),
      startDate: new Date(),
      location: '',
      ownerCountry: '',
      salesForceId: '',
      status: 'IN_PROGRESS',
      subject: '',
    },
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
          activityOwnerEmail: route?.params?.item?.activityOwnerEmail,
          startDate: route?.params?.item?.startDate,
          endDate: route?.params?.item?.endDate,
          status: 'CANCELLED',
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
                <CalendarForm name={'startDate'} typeDate={'time'} />
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
                <CalendarForm name={'endDate'} typeDate={'time'} />
              </View>

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
                  <IconAntDesign name="search1" size={15} color={'grey'} />
                }
              />

              <InputForm
                title={'Division'}
                dropdownPosition={'top'}
                name={'division'}
                arrDropdown={data?.data?.map(e => ({value: e, label: e})) || []}
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
});

export default CallLogScreen;
