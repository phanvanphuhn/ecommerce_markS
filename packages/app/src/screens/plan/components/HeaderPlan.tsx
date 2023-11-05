import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  ImageSourcePropType,
  StyleProp,
  ViewStyle,
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
}

interface IState {
  isShowSearch?: boolean;
  keyword?: string;
}
const HeaderPlan = ({title, onSearch}: HeaderPlanProps) => {
  const [state, setState] = useStateCustom<IState>({
    isShowSearch: false,
    keyword: '',
  });
  const router = useNavigation();
  const anim = useSharedValue(0);
  const styleAnim = useAnimatedStyle(() => ({
    transform: [
      {
        scaleX: interpolate(anim.value, [0, 1], [0, 1]),
      },
    ],
    opacity: interpolate(anim.value, [0, 1], [0, 1]),
  }));
  useEffect(() => {
    anim.value = withTiming(state.isShowSearch ? 1 : 0, {duration: 500});
  }, [state.isShowSearch]);

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

  const onChangeText = (text: string) => {
    setState({keyword: text});
  };
  const onPressBack = () => router.goBack();
  const renderSearch = () => (
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
    paddingVertical: scale(15),
    paddingHorizontal: scale(16),
  },
  container: {
    backgroundColor: colors.primary,
    paddingTop: sizes._statusbar_height + 15,
  },
});
