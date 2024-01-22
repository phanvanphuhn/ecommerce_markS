import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import colors from 'res/colors';
import Text from 'elements/Text';
import {width} from 'res/sizes';
import Theme from 'res/style/Theme';
import Image from 'elements/Image';
import images from 'res/images';
import strings from 'res/strings';
import SemiCircleSlider from 'components/Slider/SemiCircleSlider';
import {useNavigation} from '@react-navigation/core';
import {BaseUseNavigationProps} from 'navigation/BaseNavigationProps';
import {MainParamList} from 'navigation/service/NavigationParams';
import {Routes} from 'configs';

interface ItemSalesProps {
  isPriority?: boolean;
}

const ItemSales = (props: ItemSalesProps) => {
  const [speed, setSpeed] = useState(100);
  const [size, setSize] = useState(0);
  const navigation = useNavigation<BaseUseNavigationProps<MainParamList>>();
  const onDetail = () => {
    navigation.navigate(Routes.SalesScreen);
  };
  return (
    <TouchableOpacity
      disabled={true}
      onPress={onDetail}
      style={[Theme.shadow, styles.container]}>
      <View style={[Theme.flexRow, Theme.pt05, Theme.pl10, Theme.pr10]}>
        <View style={[Theme.flexRow, Theme.flex1]}>
          <Image source={images.ic_chart2} />
          <Text
            size={props.isPriority ? 20 : 16}
            fontWeight={'600'}
            marginLeft={5}>
            {strings.salesAchievement}
          </Text>
        </View>
        {!!props.isPriority && (
          <View
            style={{
              backgroundColor: colors.borderColor,
              paddingHorizontal: 15,
              paddingVertical: 1,
              borderRadius: 10,
              marginRight: 5,
            }}>
            <Text
              color={colors.white}
              size={11}
              fontWeight={'700'}
              uppercase={true}>
              {strings.daily}
            </Text>
          </View>
        )}
        {!!props.isPriority && (
          <Image
            source={images.ic_dropdown}
            tintColor={colors.black}
            style={{transform: [{rotate: '270deg'}]}}
          />
        )}
      </View>
      <SemiCircleSlider
        max={200}
        isHideCircle={true}
        disabled={false}
        linearGradientColor={[
          '#f7ebd4',
          '#EFE2AE',
          '#DBA747',
          '#d5992a',
          '#956b1d',
        ]}
        linearGradientBackgroundColor={[
          '#e6b3ff',
          '#c44dff',
          '#9900e6',
          '#7700b3',
          '#609',
          '440066',
        ]}
        value={100}
        width={width - 100}
        thumbRadius={22}
        onUpdate={value => {
          console.log('=>(SalesScreen.tsx:157) value', value);
        }}
        strokeWidth={45}>
        <Text size={props.isPriority ? 24 : 18} fontWeight={'700'}>
          ${'26000'.formatPrice()}
        </Text>
        <Text
          fontWeight={'400'}
          size={props.isPriority ? 13 : 10}
          color={colors.dotActive}>
          118% over Target
        </Text>
      </SemiCircleSlider>
    </TouchableOpacity>
  );
};

export default ItemSales;

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
