import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import colors from 'res/colors';
import Text from 'elements/Text';
import {width} from 'res/sizes';
import Theme from 'res/style/Theme';
import Image from 'elements/Image';
import images from 'res/images';
import strings from 'res/strings';
import CircleSlider from 'components/Slider/CircleSlider';
import useStateCustom from 'hooks/useStateCustom';
import {useNavigation} from '@react-navigation/core';
import {BaseUseNavigationProps} from 'navigation/BaseNavigationProps';
import {MainParamList} from 'navigation/service/NavigationParams';
import {Routes} from 'configs';

interface ItemBoostProps {
  isPriority?: boolean;
}

const ItemBoost = (props: ItemBoostProps) => {
  const [state, setState] = useStateCustom({
    value: 50,
    max: 100,
  });
  const navigation = useNavigation<BaseUseNavigationProps<MainParamList>>();
  const onDetail = () => {
    navigation.navigate(Routes.BoostScreen);
  };
  return (
    <TouchableOpacity
      onPress={onDetail}
      style={[Theme.shadow, styles.container]}>
      <View
        style={[
          Theme.flexRowSpace,
          Theme.pt05,
          Theme.pl10,
          Theme.pr10,
          {width: '100%'},
        ]}>
        <Image source={images.ic_boost_with_bg} />
        <Text size={16} fontWeight={'600'}>
          {strings.boost}
        </Text>
        <Image source={images.ic_boost_with_bg} style={{opacity: 0}} />
      </View>

      <CircleSlider
        max={state.max}
        isHideCircle={true}
        // disabled={true}
        linearGradientColor={[
          '#0152CB',
          '#0152CB',
          '#002563',
          '#002563',
          '#001c4d',
        ]}
        linearGradientBackgroundColor={[
          '#474747',
          '#e6e6e6',
          '#f2f2f2',
          '#fff',
        ]}
        value={state.value}
        width={width / 2 - 50}
        thumbRadius={22}
        disabled={true}
        onUpdate={value => {
          console.log('=>(SalesScreen.tsx:157) value', value);
        }}
        strokeWidth={20}>
        <Text size={17} fontWeight={'700'}>
          1
          <Text size={11} color={colors.borderColor}>
            /2
          </Text>
        </Text>
      </CircleSlider>
    </TouchableOpacity>
  );
};

export default ItemBoost;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    shadowOpacity: 0.2,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingBottom: 10,
  },
});
