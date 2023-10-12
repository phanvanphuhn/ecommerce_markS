import React, {useCallback, useState} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Text from 'elements/Text';
import {ItemComplaintResponse} from 'network/apis/complaints/ComplaintResponse';
import Theme from 'res/style/Theme';
import colors from 'res/colors';
import {useNavigation} from '@react-navigation/native';
import {BaseUseNavigationProps} from 'navigation/BaseNavigationProps';
import {MainParamList} from 'navigation/service/NavigationParams';
import {Routes} from 'configs';
import {renderColorComplaint, renderStatusComplaint} from 'utils/other-utils';

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
          GCMS-TW: {props.item.name}
        </Text>
        <View
          style={{
            backgroundColor: renderColorComplaint(props.item.status),
            paddingHorizontal: 10,
            paddingVertical: 2,
            borderRadius: 20,
          }}>
          <Text color={colors.white}>
            {renderStatusComplaint(props.item.status)}
          </Text>
        </View>
      </View>
      <Text color={colors.borderColor}>
        Acc Name: <Text color={colors.borderColor}>{props.item.accName}</Text>
      </Text>
      <Text color={colors.borderColor}>
        Patient ID:{' '}
        <Text color={colors.borderColor}>{props.item.patientId}</Text>
      </Text>
      <Text color={colors.borderColor}>
        Event Date:{' '}
        <Text color={colors.borderColor}>{props.item.eventDate}</Text>
      </Text>
      <Text color={colors.borderColor}>
        Created Date:{' '}
        <Text color={colors.borderColor}>{props.item.createdDate}</Text>
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
