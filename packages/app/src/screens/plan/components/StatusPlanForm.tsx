import {useNavigation} from '@react-navigation/core';
import {Routes} from 'configs';
import {BaseUseNavigationProps} from 'navigation/BaseNavigationProps';
import {MainParamList} from 'navigation/service/NavigationParams';
import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import images from 'res/images';
import Text from 'elements/Text';
import {backgroundBodyColor} from 'utils/other-utils';
import Theme from 'res/style/Theme';
import moment from 'moment';
import colors from 'res/colors';
import {PlanCallOutput} from 'apollo/query/upsertPlanCall';

interface IStatusPlanFormProps {
  item: PlanCallOutput;
}

const StatusPlanForm = (props: IStatusPlanFormProps) => {
  const navigation = useNavigation<BaseUseNavigationProps<MainParamList>>();
  const backgroundHeaderColor = () => {
    const {status} = props.item;
    switch (status) {
      case 'COMPLETED':
        return '#B31921';
      case 'COMPLETED':
        return '#AECEFF';
      case 'CANCELLED':
        return '#FBFBFB';
      case 'IN_PROGRESS':
        return '#00BECC';
      default:
        return '#00BECC';
    }
  };

  const titleColor = () => {
    const {status} = props.item;
    switch (status) {
      case 'COMPLETED':
        return '#FFFFFF';
      case 'COMPLETED':
        return '#000000';
      case 'CANCELLED':
        return '#A5A5A5';
      case 'IN_PROGRESS':
        return '#000000';
      default:
        return '#000000';
    }
  };

  const onGotoDetail = () => {
    if (props.item.status === 'COMPLETED') {
      navigation.navigate(Routes.CaseLogScreen2, {item: props.item});
    } else {
      navigation.navigate(Routes.CallLogScreen, {item: props.item});
    }
  };
  console.log('=>(StatusPlanForm.tsx:108) props', props);

  const getDuration = () =>
    moment(props.item.endDate).diff(moment(props.item.startDate), 'minutes');

  return (
    <TouchableOpacity
      onPress={() => onGotoDetail()}
      style={[
        styles.container,
        {
          backgroundColor: backgroundBodyColor(props.item),
          borderColor: backgroundHeaderColor(),
          borderWidth: 0.5,
        },
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
          {props.item.subject}
        </Text>
      </View>
      <View style={[styles.bodyContainer]}>
        <View style={[Theme.flexRow, {marginBottom: 4}]}>
          <Image source={images.ic_location} style={styles.imageContainer} />
          <Text
            size={13}
            fontWeight={'300'}
            color={props.item.status === 'CANCELLED' ? '#A5A5A5' : colors.text}>
            {props.item.description}
          </Text>
        </View>
        <View style={Theme.flexRow}>
          <Image source={images.ic_clock} style={styles.imageContainer} />
          <Text
            size={13}
            fontWeight={'300'}
            color={props.item.status === 'CANCELLED' ? '#A5A5A5' : colors.text}>
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
    flex: 1,
  },
  headerContainer: {
    backgroundColor: '#B31921',
    paddingVertical: 4,
    paddingHorizontal: 12,
    alignItems: 'center',
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
