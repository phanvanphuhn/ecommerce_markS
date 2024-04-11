import React, {useEffect, useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import colors from 'res/colors';
import Text from 'elements/Text';
import {width} from 'res/sizes';
import Theme from 'res/style/Theme';
import Image from 'elements/Image';
import images from 'res/images';
import strings from 'res/strings';
import CircleSlider from 'components/Slider/CircleSlider';
import {useNavigation} from '@react-navigation/core';
import {BaseUseNavigationProps} from 'navigation/BaseNavigationProps';
import {MainParamList} from 'navigation/service/NavigationParams';
import {Routes} from 'configs';
import {useLazyQuery} from '@apollo/client';
import {GET_PLAN_CALLS} from 'apollo/query/getPlanCalls';
import moment from 'moment';
import {PlanCallOutput} from 'apollo/query/upsertPlanCall';

interface ItemPlanProps {
  isPriority?: boolean;
}

const ItemPlan = (props: ItemPlanProps) => {
  const [speed, setSpeed] = useState(200);
  const navigation = useNavigation<BaseUseNavigationProps<MainParamList>>();

  const [getData, {loading, data}] = useLazyQuery(GET_PLAN_CALLS, {});
  console.log('=>(ItemPlan.tsx:28) data', data?.data[0]);
  useEffect(() => {
    getData({variables: {status: ['IN_PROGRESS', 'COMPLETED']}});
  }, []);

  const onDetail = () => {
    navigation.navigate(Routes.PlanScreen);
  };

  const listProcessPlanCall = () => {
    const currentDate = new Date();
    const currentYear = currentDate.getUTCFullYear();
    const currentMonth = currentDate.getUTCMonth();
    const currentDay = currentDate.getUTCDate();

    const filteredItems = data?.data.filter(item => {
      const endDate = new Date(item.endDate);
      const endYear = endDate.getUTCFullYear();
      const endMonth = endDate.getUTCMonth();
      const endDay = endDate.getUTCDate();

      return (
        currentDay === endDay &&
        currentMonth === endMonth &&
        currentYear === endYear
      );
    });

    return filteredItems;
  };

  const listDonePlanCall = () => {
    const currentDate = new Date();
    const currentTime = currentDate.getUTCHours();

    const filteredItems = listProcessPlanCall()?.filter(item => {
      const endDate = new Date(item.endDate);
      const endTime = endDate.getUTCHours();

      return endTime < currentTime;
    });

    return filteredItems;
  };

  return (
    <TouchableOpacity
      activeOpacity={1}
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
        <Image source={images.ic_plan_with_bg} />
        <Text size={16} fontWeight={'600'}>
          {strings.plan}
        </Text>
        <Image source={images.ic_boost_with_bg} style={{opacity: 0}} />
      </View>
      <CircleSlider
        max={listProcessPlanCall()?.length || 0}
        isHideCircle={true}
        disabled={true}
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
        value={listDonePlanCall()?.length || 0}
        width={width / 2 - 50}
        thumbRadius={22}
        onUpdate={value => {
          console.log('=>(SalesScreen.tsx:157) value', value);
        }}
        strokeWidth={20}>
        <Text size={17} fontWeight={'700'}>
          {/* {data?.data.filter(e => e.status == 'COMPLETED' || !e.status)?.length} */}
          {listDonePlanCall()?.length || 0}
          <Text size={11} color={colors.borderColor}>
            /{listProcessPlanCall()?.length || 0}
          </Text>
        </Text>
      </CircleSlider>
    </TouchableOpacity>
  );
};

export default ItemPlan;

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
