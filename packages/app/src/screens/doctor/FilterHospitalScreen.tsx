import React, {useEffect, useMemo, useState} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ListRenderItem,
  Platform,
  StatusBar,
} from 'react-native';
import Container from 'elements/Layout/Container';
import ButtonIcon from 'elements/Buttons/ButtonIcon';
import images from 'res/images';
import Text from 'elements/Text';
import strings from 'res/strings';
import ButtonText from 'elements/Buttons/ButtonText';
import Theme from 'res/style/Theme';
import colors from 'res/colors';
import Image from 'elements/Image';
import TextInput from 'elements/TextInput';
import useStateCustom from 'hooks/useStateCustom';
import keyExtractor from 'utils/keyExtractor';
import {useNavigation, useRoute} from '@react-navigation/core';
import {
  BaseRouteProps,
  BaseUseNavigationProps,
} from 'navigation/BaseNavigationProps';
import {MainParamList} from 'navigation/service/NavigationParams';
import {BaseProps, Router} from 'components/base/BaseComponent';
import {Routes} from 'configs';
import {ItemOptionResponse} from 'network/apis/doctor/DoctorResponse';
import useDebounce from 'hooks/useDebounce';
import _ from 'lodash';
import {useLazyQuery} from '@apollo/client';
import {GET_SPECIALTY_LIST_QUERY} from 'apollo/query/getFilterSpecialtyList';
import {GET_HOSPITAL_LIST_QUERY} from 'apollo/query/getFilterHospitalList';
import {useSelector} from 'hooks/useSelector';
import uuid from 'react-native-uuid';
interface FilterHospitalScreenProps {}
interface IState {
  keyword?: string;
  data: ItemOptionResponse[];
}
const FilterHospitalScreen = (props: FilterHospitalScreenProps) => {
  const navigation = useNavigation<BaseUseNavigationProps<MainParamList>>();
  const route = useRoute<BaseRouteProps<Routes.FilterHospitalScreen>>();
  const [state, setState] = useStateCustom<IState>({
    keyword: '',
    data: [],
    listSelected: route.params.listSelected || [],
  });
  const userProfile = useSelector(state => state.userProfile.user);
  const convertData = (arr: string[]) => {
    return arr.map(e => {
      return {id: uuid.v4(), name: e};
    });
  };
  const [getHospital] = useLazyQuery(GET_HOSPITAL_LIST_QUERY, {
    variables: {
      salesRepEmail: userProfile?.mail || '',
    },
  });
  useEffect(() => {
    getHospital({
      onCompleted: data => {
        let hospital = convertData(data.data).map(item => ({
          ...item,
          isSelected: route.params.listSelected.includes(item.name),
        }));
        setState({data: hospital});
      },
    });
  }, []);
  const onSelected = item => {
    let list = [...state.data];
    list.forEach(e => {
      if (item.id == e.id) {
        e.isSelected = !item.isSelected;
      } else {
        e.isSelected = false;
      }
    });
    setState({data: list});
  };

  const onReset = () => {
    let list = [...state.data];
    list.forEach(e => {
      e.isSelected = false;
    });
    setState({data: list});
    onConfirm();
  };
  const onConfirm = () => {
    if (route.params?.onSelected) {
      let hospital = state.data.find(e => e.isSelected);
      route.params.onSelected(hospital?.name || '');
    }
    navigation.goBack();
  };

  // useDebounce(() => {
  //   let dataHospital = _.orderBy(
  //     data.hospital,
  //     ['name', 'id'],
  //     ['asc', 'desc'],
  //   );
  //   let list = dataHospital.filter(e => e.name.includes(state.keyword));
  //   setState({data: list});
  // }, [state.keyword]);
  const renderItem: ListRenderItem<ItemOptionResponse> = ({item, index}) => {
    let isSelected = item.isSelected;
    if (!item.name) {
      return null;
    }
    return (
      <TouchableOpacity
        onPress={() => onSelected(item)}
        style={[
          Theme.flexRowSpace,
          {
            paddingBottom: 12,
            borderBottomColor: colors.border,
            borderBottomWidth: 1,
            marginTop: 12,
          },
        ]}>
        <Text>{item.name}</Text>
        <View
          style={{
            height: 20,
            width: 20,
            borderColor: colors.gray,
            borderWidth: 1,
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          {!!isSelected && (
            <View
              style={{
                backgroundColor: colors.blue2,
                height: 12,
                width: 12,
                borderRadius: 10,
              }}
            />
          )}
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <Container hideHeader={true} style={styles.container}>
      <View style={[Theme.flexRowSpace, {paddingHorizontal: 10}]}>
        <ButtonIcon icon={images.ic_x} onPress={() => navigation.goBack()} />
        <Text>{strings.hospital}</Text>
        <ButtonText title={strings.reset} onPress={onReset} />
      </View>
      <View style={[{paddingHorizontal: 20, flex: 1}]}>
        <TextInput
          backgroundColor={colors.gray2}
          style={{height: 45}}
          iconLeft={<Image source={images.ic_search} />}
          icon={<Image source={images.ic_close} />}
          // isShowIcon={true}
          value={state?.keyword || ''}
          onChangeText={(keyword: string) => setState({keyword})}
          isShowIconLeft={true}
          iconPress={() => setState({keyword: ''})}
          editable={true}
          placeholder={strings.search}
        />
        <FlatList
          data={state.data}
          style={{marginTop: 10}}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          keyExtractor={keyExtractor}
        />
      </View>
      <View
        style={{
          shadowColor: '#000000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.5,
          elevation: 4,
          backgroundColor: colors.white,
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

export default FilterHospitalScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
  },
});
