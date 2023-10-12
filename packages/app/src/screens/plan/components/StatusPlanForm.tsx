import {useNavigation} from '@react-navigation/core';
import {Routes} from 'configs';
import {BaseUseNavigationProps} from 'navigation/BaseNavigationProps';
import {MainParamList} from 'navigation/service/NavigationParams';
import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import images from 'res/images';
import {ItemPlanResponse} from 'network/apis/plan/PlanResponse';
import Text from 'elements/Text';
import {backgroundBodyColor} from 'utils/other-utils';
import Theme from 'res/style/Theme';
import moment from 'moment';
import colors from 'res/colors';

interface IStatusPlanFormProps {
  item: ItemPlanResponse;
}

const StatusPlanForm = (props: IStatusPlanFormProps) => {
  const navigation = useNavigation<BaseUseNavigationProps<MainParamList>>();
  const backgroundHeaderColor = () => {
    const {status} = props.item;
    switch (status) {
      case 1:
        return '#B31921';
      case 2:
        return '#AECEFF';
      case 3:
        return '#FBFBFB';
      case 4:
        return '#00BECC';
    }
  };

  const titleColor = () => {
    const {status} = props.item;
    switch (status) {
      case 1:
        return '#FFFFFF';
      case 2:
        return '#000000';
      case 3:
        return '#A5A5A5';
      case 4:
        return '#000000';
    }
  };

  const onGotoDetail = () => {
    if (props.item.status === 1) {
      navigation.navigate(Routes.CaseLogScreen2, {item: props.item});
    } else {
      navigation.navigate(Routes.CallLogScreen, {item: props.item});
    }
  };

  const getDuration = () =>
    moment(props.item.end).diff(moment(props.item.start), 'minutes');

  return (
    <TouchableOpacity
      onPress={() => onGotoDetail()}
      style={[
        styles.container,
        {backgroundColor: backgroundBodyColor(props.item)},
      ]}>
      <View
        style={[
          styles.headerContainer,
          Theme.flexRow,
          {backgroundColor: backgroundHeaderColor()},
        ]}>
        <Image
          source={images.ic_statusCancel}
          style={[styles.imageContainer, {height: 20, width: 20}]}
        />
        <Text size={15} fontWeight={'600'} color={titleColor()}>
          {props.item.title}
        </Text>
      </View>
      <View style={[styles.bodyContainer]}>
        <View style={[Theme.flexRow, {marginBottom: 4}]}>
          <Image source={images.ic_location} style={styles.imageContainer} />
          <Text
            size={13}
            fontWeight={'300'}
            color={props.item.status === 3 ? '#A5A5A5' : colors.text}>
            {props.item.desc}
          </Text>
        </View>
        <View style={Theme.flexRow}>
          <Image source={images.ic_clock} style={styles.imageContainer} />
          <Text
            size={13}
            fontWeight={'300'}
            color={props.item.status === 3 ? '#A5A5A5' : colors.text}>
            {getDuration() + ' Minutes'}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  headerContainer: {
    backgroundColor: '#B31921',
    paddingVertical: 4,
    paddingHorizontal: 12,
  },
  bodyContainer: {
    paddingVertical: 12,
    paddingHorizontal: 12,
  },
  imageContainer: {
    height: 17,
    width: 17,
    marginRight: 4,
  },
  description: {
    fontWeight: '300',
    fontSize: 17,
  },
});

export default StatusPlanForm;
