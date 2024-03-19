import React, {useMemo} from 'react';
import {
  FlatList,
  Keyboard,
  ListRenderItem,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import Container from 'elements/Layout/Container';
import strings from 'res/strings';
import Theme from 'res/style/Theme';
import colors from 'res/colors';
import TextInput from 'elements/TextInput';
import images from 'res/images';
import Image from 'elements/Image';
import Text from 'elements/Text';
import keyExtractor from 'utils/keyExtractor';
import useStateCustom from 'hooks/useStateCustom';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/core';
import {BaseUseNavigationProps} from 'navigation/BaseNavigationProps';
import {MainParamList} from 'navigation/service/NavigationParams';
import {Routes} from 'configs';
import {
  IDoctorSearchList,
  ItemOptionResponse,
} from 'network/apis/doctor/DoctorResponse';
import useDebounce from 'hooks/useDebounce';
import {GET_DOCTOR_QUERY} from 'apollo/query/getDoctorSearchList';
import {useLazyQuery, useMutation} from '@apollo/client';
import {useSelector} from 'hooks/useSelector';
import {upsertSearchHistory} from 'apollo/query/upsertSearchHistory';
import CustomMenu from 'components/Menu/CustomMenu';
import ListRecents from 'screens/doctor/ListRecents';
import {hideLoading, showLoading} from 'components/Loading/LoadingComponent';
import snackbarUtils from 'utils/snackbar-utils';
import {removeDuplicate} from 'utils/array-utils';

interface DoctorSearchScreenProps {}

interface IState {
  data?: IDoctorSearchList[];
  keyword?: string;
  hospitalSelected?: string;
  isFocus?: boolean;
  specialSelected?: ItemOptionResponse[];
  divisionSelected?: ItemOptionResponse[];
  topicsSelected?: ItemOptionResponse[];
}

const DoctorSearchScreen = (props: DoctorSearchScreenProps) => {
  const [state, setState] = useStateCustom<IState>({
    keyword: '',
    data: [],
    hospitalSelected: '',
    specialSelected: [],
    divisionSelected: [],
    topicsSelected: [],
    isFocus: false,
  });
  const [updateSearch] = useMutation(upsertSearchHistory);

  const userProfile = useSelector(state => state.userProfile);
  const [getData, {loading, data}] = useLazyQuery(GET_DOCTOR_QUERY);
  const _getData = async (salesRepEmail?: string) => {
    showLoading();
    await getData({
      variables: {
        hospital: salesRepEmail || '',
        doctorName: salesRepEmail || '',
        doctorTitle: salesRepEmail || '',
        doctorCountry: salesRepEmail || '',
        doctorAlternativeEmail: salesRepEmail || '',
      },
      onCompleted: data => {
        let list = data.data.filter(e => !!e.doctorEmail);
        console.log('=>(DoctorSearchScreen.tsx:74) data.data', data.data);
        console.log('=>(DoctorSearchScreen.tsx:74) list', list);
        let array = Array.from(new Set(list));
        console.log('=>(DoctorSearchScreen.tsx:75) array', array);
        setState({data: data.data});
        hideLoading();
      },
      onError: error => {
        console.log('=>(DoctorSearchScreen.tsx:87) error', error);
        hideLoading();
        snackbarUtils.show(error.message, 'danger');
      },
    });
  };

  const inset = useSafeAreaInsets();

  const navigation = useNavigation<BaseUseNavigationProps<MainParamList>>();
  const onFilter = () => {
    navigation.navigate(Routes.FilterDoctorScreen, {
      onSelected: async (hospital, special, division, topics) => {
        let list = data?.data?.filter(
          e =>
            e.hospital.includes(hospital) ||
            special.map(item => item.name).includes(e.doctorSpecialty) ||
            division.map(item => item.name).includes(e.doctorDivision) ||
            topics.map(item => item.name).includes(e.topic),
        );
        console.log('=>(DoctorSearchScreen.tsx:105) list', list);
        console.log('=>(DoctorSearchScreen.tsx:126) hospital', hospital);

        await getData({
          variables: {
            doctorDivisions: division?.length
              ? division.map(e => e.name)
              : undefined,
            doctorSpecialties: special?.length
              ? special.map(e => e.name)
              : undefined,
            topicsOfInterests: topics?.length
              ? topics.map(e => e.name)
              : undefined,
            hospital: hospital || '',
          },
        });
        if (
          !hospital.length &&
          !special?.length &&
          !division?.length &&
          !topics?.length
        ) {
          setState({
            hospitalSelected: hospital,
            specialSelected: special,
            divisionSelected: division,
            topicsSelected: topics,
          });
        } else {
          setState({
            data: list,
            hospitalSelected: hospital,
            specialSelected: special,
            divisionSelected: division,
            topicsSelected: topics,
          });
        }
      },
      hospital: state.hospitalSelected || '',
      special: state.specialSelected || [],
      division: state.divisionSelected || [],
      topics: state.topicsSelected || [],
    });
  };
  useDebounce(() => {
    _getData(state.keyword);
    if (state.keyword) {
      updateSearch({
        variables: {
          data: {
            searchQuery: state.keyword,
            searchType: ['ContactSearch'],
          },
        },
      });
    }
  }, [state.keyword]);

  const getDataDoctor = useMemo(() => {
    let list = [...(data?.data || [])];
    return removeDuplicate(list, ['doctorEmail', 'doctorPhone']);
  }, [data?.data]);

  const renderItem: ListRenderItem<IDoctorSearchList> = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate(Routes.DetailDoctorScreen, {item})}
        style={[Theme.flexRow, Theme.flex1, styles.containerItem]}>
        <Image
          source={images.ic_doctor_default}
          defaultImage={images.ic_doctor_default}
        />
        <View style={[Theme.flex1]}>
          <Text size={21} lineHeight={27} fontWeight={'700'} marginBottom={4}>
            {item.doctorName}
          </Text>
          <Text numberOfLines={1}>{item.doctorTitle}</Text>
          <View style={[Theme.flexRow, Theme.pl08, Theme.pt05]}>
            <Image source={images.ic_hospital} />
            <Text numberOfLines={1} marginLeft={7}>
              {item.doctorDivision}
            </Text>
          </View>
          <View style={[Theme.flexRow, Theme.pl08, Theme.pt05]}>
            <Image source={images.ic_plus} />
            <Text numberOfLines={1} marginLeft={7}>
              {item.hospital}
            </Text>
          </View>
          <View style={[Theme.flexRow, Theme.pl08, Theme.pt05]}>
            <Image source={images.ic_mail} />
            <Text numberOfLines={1} marginLeft={7}>
              {item.doctorEmail}
            </Text>
          </View>
          <View style={[Theme.flexRow, Theme.pl08, Theme.pt05]}>
            <Image source={images.ic_phone} />
            <Text marginLeft={7}>{item.doctorPhone}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const renderCount = useMemo(() => {
    let counted = 0;
    if (state.specialSelected?.length) {
      counted++;
    }
    if (state.hospitalSelected?.length) {
      counted++;
    }
    if (state.topicsSelected?.length) {
      counted++;
    }
    if (state.divisionSelected?.length) {
      counted++;
    }
    return counted;
  }, [
    state.divisionSelected,
    state.hospitalSelected,
    state.specialSelected,
    state.topicsSelected,
  ]);

  return (
    <Container title={strings.doctor.titleSearch} style={styles.container}>
      <View
        style={[
          Theme.flexRow,
          {
            backgroundColor: colors.primary,
            paddingHorizontal: 20,
            alignItems: 'flex-start',
          },
        ]}>
        <View style={[Theme.flex1, Theme.pb10]}>
          <TextInput
            backgroundColor={colors.white}
            style={{height: 40}}
            iconLeft={<Image source={images.ic_search} />}
            icon={<Image source={images.ic_close} />}
            isShowIcon={true}
            value={state.keyword || ''}
            onFocus={() => setState({isFocus: true})}
            onBlur={() => setState({isFocus: false})}
            onChangeText={(keyword: string) => setState({keyword})}
            isShowIconLeft={true}
            iconPress={() => setState({keyword: ''})}
            editable={true}
            placeholder={strings.search}
          />
          <CustomMenu
            onBackdropPress={() => {
              setState({isFocus: false});
              Keyboard.dismiss();
            }}
            optionsContainerStyle={{
              backgroundColor: colors.white,
              height: 300,
              width: 300,
            }}
            opened={state.isFocus}
            customOption={
              <View
                style={{
                  height: 300,
                  width: 300,
                  paddingHorizontal: 10,
                }}>
                <ListRecents
                  types={['ContactSearch']}
                  onSearch={keyword => {
                    setState({keyword});
                    Keyboard.dismiss();
                  }}
                />
              </View>
            }
          />
        </View>
        <View>
          <TouchableOpacity
            onPress={onFilter}
            style={[
              Theme.flexRow,
              {
                backgroundColor: colors.white,
                height: 40,
                borderRadius: 10,
                paddingHorizontal: 10,
              },
              Theme.ml10,
            ]}>
            <Text marginRight={10} fontWeight={'700'}>
              {strings.filter}
            </Text>
            <Image source={images.ic_filter} />
          </TouchableOpacity>
          {!!renderCount && (
            <View style={styles.containerCount}>
              <Text color={colors.white}>{renderCount}</Text>
            </View>
          )}
        </View>
      </View>
      <View style={[Theme.flex1, Theme.pl20, Theme.pr20]}>
        <View style={[Theme.flexRow, Theme.mt15]}>
          <Image source={images.ic_recent} style={{resizeMode: 'contain'}} />
          <Text marginLeft={10} size={21} fontWeight={'700'} lineHeight={26}>
            {strings.recents}:
          </Text>
        </View>
        <View style={[Theme.flex1, Theme.mt20]}>
          <FlatList
            data={getDataDoctor}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            keyboardShouldPersistTaps={'handled'}
            contentContainerStyle={{paddingBottom: inset.bottom + 10}}
            ItemSeparatorComponent={() => <View style={{height: 20}} />}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </Container>
  );
};

export default DoctorSearchScreen;

const styles = StyleSheet.create({
  container: {flex: 1},
  containerItem: {
    shadowColor: colors.gray,
    shadowOffset: {height: 1, width: 0},
    shadowOpacity: 0.2,
    backgroundColor: colors.white,
    marginHorizontal: 10,
    padding: 15,
    borderRadius: 20,
    elevation: 2,
  },
  containerCount: {
    backgroundColor: colors.blue3,
    height: 24,
    width: 24,
    borderRadius: 12,
    borderColor: colors.white,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: -12,
    right: -12,
    shadowColor: colors.black,
    shadowOffset: {height: 2, width: 0},
    shadowOpacity: 0.6,
  },
});
