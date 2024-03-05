import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  ImageSourcePropType,
  StyleProp,
  ViewStyle,
  TouchableOpacity,
} from 'react-native';
import ButtonIcon from 'elements/Buttons/ButtonIcon';
import images from 'res/images';
import colors from 'res/colors';
import Theme from 'res/style/Theme';
import Text from 'elements/Text';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'hooks/useSelector';
import sizes from 'res/sizes';
import scale from 'utils/scale';
import TextInput from 'elements/TextInput';
import ButtonText from 'elements/Buttons/ButtonText';
import strings from 'res/strings';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import useStateCustom from 'hooks/useStateCustom';

interface HeaderPlanProps {
  title?: string;
  onSearch: (text?: string) => void;
  onFilter: (text: string) => void;
  value: string;
}

interface IState {
  isShowSearch?: boolean;
  keyword?: string;
  filter: 'All' | 'Cases' | 'Calls';
}
const HeaderPlan = ({title, value, onSearch, onFilter}: HeaderPlanProps) => {
  const [state, setState] = useStateCustom<IState>({
    isShowSearch: false,
    keyword: '',
    filter: 'All',
  });
  const dataFilter = [
    {
      title: 'All',
    },
    // {
    //   title: 'Cases',
    // },
    {
      title: 'Calls',
    },
  ];
  const router = useNavigation();

  useEffect(() => {
    setState({keyword: value});
  }, [value]);

  useEffect(() => {
    let timeout = setTimeout(() => {
      onSearch && onSearch(state.keyword);
    }, 500);
    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [state.keyword]);
  useEffect(() => {
    onFilter && onFilter(state.filter);
  }, [state.filter]);

  const onChangeText = (text: string) => {
    setState({keyword: text});
  };
  const onPressBack = () => router.goBack();
  const renderSearch = () => (
    <>
      <View style={styles.groupHeader}>
        <Animated.View style={[{flex: 1, marginRight: 10}]}>
          <TextInput
            placeholder={'Search'}
            backgroundColor={colors.white}
            style={{borderRadius: 50, height: 30, paddingLeft: 5}}
            editable={true}
            autoFocus={true}
            value={state.keyword || ''}
            onChangeText={onChangeText}
            iconLeft={<Image source={images.ic_search} />}
            isShowIconLeft={true}
          />
        </Animated.View>
        <ButtonText
          title={strings.cancel}
          titleColor={colors.white}
          textProps={{
            fontWeight: '600',
            size: 17,
          }}
          onPress={() => {
            if (state.keyword) {
              setState({isShowSearch: false, keyword: ''});
            } else {
              onPressBack();
            }
          }}
        />
      </View>
      <View style={styles.wrapButtonContainer}>
        {dataFilter.map(item => {
          return (
            <TouchableOpacity
              style={
                item.title == state.filter
                  ? styles.wrapButtonChoose
                  : styles.wrapButton
              }
              onPress={() => setState({filter: item.title})}>
              <Text
                style={
                  item.title == state.filter
                    ? styles.wrapButtonTextChoose
                    : styles.wrapButtonText
                }>
                {item.title}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </>
  );
  return <SafeAreaView style={styles.container}>{renderSearch()}</SafeAreaView>;
};

export default HeaderPlan;

const styles = StyleSheet.create({
  buttonHeader: {},
  buttonBack: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  flex: {flex: 1},
  txtTitle: {
    fontSize: sizes._14sdp,
    color: colors.white,
    fontWeight: 'bold',
  },
  containerTitle: {
    flex: 1,
    alignItems: 'flex-start',
    paddingRight: 10,
  },
  iconBack: {
    height: 18,
    width: 18,
    resizeMode: 'contain',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: scale(10),
  },
  groupHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: scale(16),
    marginTop: scale(16),
    marginBottom: scale(4),
  },
  container: {
    backgroundColor: colors.primary,
    paddingTop: sizes._statusbar_height + 15,
  },
  wrapButtonContainer: {
    marginLeft: scale(16),
    marginBottom: scale(8),
    flexDirection: 'row',
  },
  wrapButton: {
    paddingVertical: scale(4),
    paddingHorizontal: scale(16),
    backgroundColor: colors.white,
    marginRight: scale(8),
    borderRadius: scale(16),
  },
  wrapButtonChoose: {
    paddingVertical: scale(4),
    paddingHorizontal: scale(16),
    backgroundColor: colors.blue3,
    marginRight: scale(8),
    borderRadius: scale(16),
  },
  wrapButtonText: {},
  wrapButtonTextChoose: {
    color: colors.white,
    fontWeight: '600',
  },
});
