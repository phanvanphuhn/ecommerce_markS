import React, {useEffect, useState} from 'react';
import {View, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import Container from 'elements/Layout/Container';
import strings from 'res/strings';
import Text from 'elements/Text';
import colors from 'res/colors';
import Image from 'elements/Image';
import images from 'res/images';
import Theme from 'res/style/Theme';
import item from 'lib/react-native-calendars/src/calendar-list/item';
import useStateCustom from 'hooks/useStateCustom';
import ButtonText from 'elements/Buttons/ButtonText';
import {useNavigation, useRoute} from '@react-navigation/core';
import {
  BaseNavigationProps,
  BaseRouteProps,
  BaseUseNavigationProps,
} from 'navigation/BaseNavigationProps';
import {MainParamList} from 'navigation/service/NavigationParams';
import {Routes} from 'configs';
import {ItemOptionResponse} from 'network/apis/doctor/DoctorResponse';
import data from './data';
import useQueryLazyBase from 'apollo/useQueryLazyBase';
import {GET_DOCTOR_QUERY} from 'apollo/query/getDoctorSearchList';
import {GET_DIVISION_LIST_QUERY} from 'apollo/query/getFilterDivisionList';
import {GET_HOSPITAL_LIST_QUERY} from 'apollo/query/getFilterHospitalList';
import {GET_SPECIALTY_LIST_QUERY} from 'apollo/query/getFilterSpecialtyList';
import {useLazyQuery} from '@apollo/client';
import {useSelector} from 'hooks/useSelector';
import {GET_TOPICS_LIST_QUERY} from 'apollo/query/getFilterTopicsOfInterestList';
interface FilterDoctorScreenProps {}
interface IState {
  special?: ItemOptionResponse[];
  division?: ItemOptionResponse[];
  topics?: ItemOptionResponse[];
  listHospitalSelected?: ItemOptionResponse[];
}
const FilterDoctorScreen = (
  props: BaseNavigationProps<MainParamList, Routes.FilterDoctorScreen>,
) => {
  const route = useRoute<BaseRouteProps<Routes.FilterDoctorScreen>>();
  const userProfile = useSelector(state => state.userProfile);

  const [state, setState] = useStateCustom<IState>({
    special: [],
    division: [],
    topics: [],
    listHospitalSelected: route.params.hospital || [],
  });
  const [getDivision] = useLazyQuery(GET_DIVISION_LIST_QUERY, {
    variables: {
      salesRepEmail: userProfile.user?.mail,
    },
  });
  const [getSpecialty] = useLazyQuery(GET_SPECIALTY_LIST_QUERY, {
    variables: {
      salesRepEmail: userProfile.user?.mail,
    },
  });
  const [getTopics] = useLazyQuery(GET_TOPICS_LIST_QUERY, {
    variables: {
      salesRepEmail: userProfile.user?.mail,
    },
  });
  const convertData = (arr: string[]) => {
    return arr.map(e => ({id: new Date().getTime(), name: e}));
  };
  useEffect(() => {
    getDivision({
      variables: {},
      onCompleted: data => {
        setState({division: convertData(data.data)});
      },
    });
    getSpecialty({
      onCompleted: data => {
        setState({special: convertData(data.data)});
      },
    });
    getTopics({
      onCompleted: data => {
        setState({topics: convertData(data.data)});
      },
    });
  }, []);

  const navigation =
    useNavigation<
      BaseUseNavigationProps<MainParamList, Routes.FilterDoctorScreen>
    >();

  const onConfirm = () => {
    if (route.params?.onSelected) {
      let special = state.special?.filter(e => e.isSelected) || [];
      let division = state.division?.filter(e => e.isSelected) || [];
      let topics = state.topics?.filter(e => e.isSelected) || [];
      route.params.onSelected(
        state.listHospitalSelected,
        special,
        division,
        topics,
      );
    }
    navigation.goBack();
  };

  return (
    <Container
      title={strings.filter}
      buttonRight={
        <TouchableOpacity
          onPress={() => {
            state.special?.forEach(e => {
              e.isSelected = false;
            });
            state.division?.forEach(e => {
              e.isSelected = false;
            });
            state.topics?.forEach(e => {
              e.isSelected = false;
            });
            setState({
              special: state.special,
              division: state.division,
              topics: state.topics,
              listHospitalSelected: [],
            });
          }}>
          <Text size={16} lineHeight={21} color={colors.white}>
            Reset
          </Text>
        </TouchableOpacity>
      }
      style={styles.container}>
      <ScrollView>
        <View
          style={{
            padding: 20,
          }}>
          <View>
            <Text size={18} lineHeight={24} fontWeight={'600'}>
              Hospital
            </Text>
            <TouchableOpacity
              onPress={() =>
                props.navigation.navigate(Routes.FilterHospitalScreen, {
                  listSelected: state.listHospitalSelected,
                  onSelected: selected => {
                    console.log(
                      '=>(FilterDoctorScreen.tsx:241) selected',
                      selected,
                    );
                    setState({listHospitalSelected: selected});
                  },
                })
              }
              style={[
                Theme.flexRowSpace,
                {
                  backgroundColor: colors.gray2,
                  padding: 10,
                  borderRadius: 6,
                  marginTop: 8,
                },
              ]}>
              <Text
                color={
                  state.listHospitalSelected?.length
                    ? colors.black
                    : colors.gray
                }>
                {state.listHospitalSelected?.length
                  ? state.listHospitalSelected
                      ?.map(item => item.name)
                      .join(', ')
                  : strings.select}
              </Text>
              <Image source={images.ic_dropdown} />
            </TouchableOpacity>
          </View>
          <View style={[Theme.pt25]}>
            <Text size={18} lineHeight={24} fontWeight={'600'} marginBottom={8}>
              Specialty
            </Text>
            <View style={[Theme.flexRow, {flexWrap: 'wrap'}]}>
              {state.special?.map((item, index) => {
                if (!item?.name) {
                  return null;
                }
                return (
                  <TouchableOpacity
                    key={index.toString()}
                    onPress={() => {
                      let data = [...state.special];
                      data[index].isSelected = !item.isSelected;
                      setState({special: data});
                    }}
                    style={[
                      styles.containerItem,
                      item.isSelected ? {backgroundColor: colors.blue3} : {},
                    ]}>
                    <Text color={item.isSelected ? colors.white : colors.black}>
                      {item.name}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
          <View style={[Theme.pt25]}>
            <Text size={18} lineHeight={24} fontWeight={'600'} marginBottom={8}>
              Division
            </Text>
            <View style={[Theme.flexRow, {flexWrap: 'wrap'}]}>
              {state.division?.map((item, index) => {
                if (!item?.name) {
                  return null;
                }
                return (
                  <TouchableOpacity
                    onPress={() => {
                      let data = [...state.division];
                      data[index].isSelected = !item.isSelected;
                      setState({division: data});
                    }}
                    key={index.toString()}
                    style={[
                      styles.containerItem,
                      item.isSelected ? {backgroundColor: colors.blue3} : {},
                    ]}>
                    <Text color={item.isSelected ? colors.white : colors.black}>
                      {item.name}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
          {state.topics?.length > 0 && (
            <View style={[Theme.pt25]}>
              <Text
                size={18}
                lineHeight={24}
                fontWeight={'600'}
                marginBottom={8}>
                Topics Of Interest
              </Text>
              <View style={[Theme.flexRow, {flexWrap: 'wrap'}]}>
                {state.topics.map((item, index) => {
                  if (!item?.name) {
                    return null;
                  }
                  return (
                    <TouchableOpacity
                      key={index.toString()}
                      onPress={() => {
                        let data = [...state.topics];
                        data[index].isSelected = !item.isSelected;
                        setState({topics: data});
                      }}
                      style={[
                        styles.containerItem,
                        item.isSelected ? {backgroundColor: colors.blue3} : {},
                      ]}>
                      <Text
                        color={item.isSelected ? colors.white : colors.black}>
                        {item.name}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>
          )}
        </View>
      </ScrollView>
      <View
        style={{
          ...Theme.shadow,
          backgroundColor: colors.white,
          marginTop: 10,
          paddingBottom: 30,
          paddingTop: 10,
          paddingHorizontal: 30,
        }}>
        <ButtonText
          title={'Confirm'}
          backgroundColor={colors.blue3}
          titleColor={colors.white}
          boderRadius={60}
          onPress={onConfirm}
          textProps={{
            fontWeight: '700',
            size: 17,
          }}
        />
      </View>
    </Container>
  );
};

export default FilterDoctorScreen;

const styles = StyleSheet.create({
  container: {flex: 1},
  containerItem: {
    borderColor: colors.border,
    borderWidth: 1,
    padding: 5,
    borderRadius: 10,
    marginBottom: 7,
    marginRight: 6,
  },
});
