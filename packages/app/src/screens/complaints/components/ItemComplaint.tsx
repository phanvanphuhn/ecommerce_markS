import React, {useCallback, useState} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Text from 'elements/Text';
import Theme from 'res/style/Theme';
import colors from 'res/colors';
import {useNavigation} from '@react-navigation/native';
import {BaseUseNavigationProps} from 'navigation/BaseNavigationProps';
import {MainParamList} from 'navigation/service/NavigationParams';
import {Routes} from 'configs';
import {
  renderBorderColorComplaint,
  renderBorderWidthComplaint,
  renderColorComplaint,
  renderStatusComplaint,
} from 'utils/other-utils';
import {ItemComplaintResponse} from 'apollo/query/complaint';
import moment from 'moment/moment';

interface ItemComplaintProps {
  item: ItemComplaintResponse;
}

const ItemComplaint = (props: ItemComplaintProps) => {
  const navigation = useNavigation<BaseUseNavigationProps<MainParamList>>();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate(Routes.DetailComplaintScreen, {item: props.item})
      }
      style={styles.container}>
      <View style={[Theme.flexRowSpace]}>
        <Text size={18} fontWeight={'700'} lineHeight={26}>
          GCMS-TW: {props.item.complaintTitle}
        </Text>
        <View
          style={{
            backgroundColor: renderColorComplaint(props.item.complaintStatus),
            paddingHorizontal: 10,
            paddingVertical: 2,
            borderRadius: 20,
            width: '35%',
            alignItems: 'center',
            borderColor: renderBorderColorComplaint(props.item.complaintStatus),
            borderWidth: renderBorderWidthComplaint(props.item.complaintStatus),
          }}>
          <Text color={colors.white} numberOfLines={1}>
            {renderStatusComplaint(props.item.complaintStatus)}
          </Text>
        </View>
      </View>
      <Text color={colors.borderColor}>
        Acc Name: <Text color={colors.borderColor}>{props.item.accName}</Text>
      </Text>
      <Text color={colors.borderColor}>
        Event Date:{' '}
        {!!props.item.eventDate && (
          <Text color={colors.borderColor}>
            {moment.unix(props.item.eventDate / 1000).format('DD/MM/YYYY')}
          </Text>
        )}
      </Text>
      <Text color={colors.borderColor}>
        Created Date:{' '}
        {!!props.item.createdDate && (
          <Text color={colors.borderColor}>
            {moment.unix(props.item.createdDate / 1000).format('DD/MM/YYYY')}
          </Text>
        )}
      </Text>
      <Text color={colors.borderColor}>
        Complaint Name:{' '}
        <Text color={colors.borderColor}>{props.item.complaintName}</Text>
      </Text>
    </TouchableOpacity>
  );
};

export default ItemComplaint;

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    padding: 5,
  },
});
