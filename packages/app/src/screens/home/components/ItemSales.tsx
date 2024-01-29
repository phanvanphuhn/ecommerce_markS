import React, {useEffect, useState} from 'react';
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
import {useLazyQuery} from '@apollo/client';
import {getSales} from 'apollo/query/getSales';
import useStateCustom from 'hooks/useStateCustom';
import moment from 'moment/moment';
import {IStateSales} from 'screens/sales/SalesScreen';

interface ItemSalesProps {
  isPriority?: boolean;
}

const ItemSales = (props: ItemSalesProps) => {
  const [speed, setSpeed] = useState(100);
  const [state, setState] = useStateCustom<IStateSales>({
    percentage: 0,
    total: 0,
    type: 'Month',
    currentDate: moment().format('YYYY-MM-DD'),
    listCommission: [],
    data: {},
  });
  console.log('=>(ItemSales.tsx:34) state', state);
  const [size, setSize] = useState(0);
  const [getSalesData, {loading}] = useLazyQuery(getSales);
  const navigation = useNavigation<BaseUseNavigationProps<MainParamList>>();
  useEffect(() => {
    getSalesData({
      variables: {
        month: (moment('2023-06-01', 'YYYY-MM-DD').month() + 1).toString(),
        year: moment('2023-06-01', 'YYYY-MM-DD').year().toString(),
      },
      onCompleted: data => {
        let obj = data?.data
          ?.map((item: any) => {
            Object.keys(item).forEach(function (key) {
              item[key] =
                /[0-9]+/.test(item[key]) && typeof item[key] === 'string'
                  ? parseFloat(item[key].replaceAll(',', '').replace('%', ''))
                  : item[key];
            });
            return item;
          })
          .find(e => !!e);
        setState({
          data: obj,
          total: obj.salesByMonth,
          percentage: Math.abs(
            Math.round((obj?.salesByMonth / obj?.targetByMonth) * 100),
          ),
        });
      },
    });
  }, []);
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
        max={state.data?.targetByMonth}
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
        value={state.data?.salesByMonth}
        width={width - 100}
        thumbRadius={22}
        onUpdate={value => {
          setState({percentage: value});
          console.log('=>(SalesScreen.tsx:157) value', value);
        }}
        strokeWidth={45}>
        <Text size={props.isPriority ? 24 : 18} fontWeight={'700'}>
          ${state?.data?.salesByMonth?.formatPrice() || 0}
        </Text>
        <Text
          fontWeight={'400'}
          size={props.isPriority ? 13 : 10}
          color={colors.dotActive}>
          {state.percentage}% over Target
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
