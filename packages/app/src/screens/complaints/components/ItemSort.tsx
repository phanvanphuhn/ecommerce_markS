import React, {memo, useState} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {renderColorComplaint, renderStatusComplaint} from 'utils/other-utils';
import colors from 'res/colors';
import {useDropdown} from 'screens/complaints/components/DropdownProvider';
import Text from 'elements/Text';
type SortType = 'eventDate' | 'createdDate' | 'updatedDate';
interface ItemSortProps {
  item: string;
  index: number;
  value: any;
  onSelected?: (type: SortType, value: string) => void;
}

const ItemSort = (props: ItemSortProps) => {
  const {state, setState} = useDropdown();
  const onSelected = (type: SortType, value: string) => {
    setState({isOpen: false});
    props.onSelected && props.onSelected(type, value);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() =>
          onSelected(
            'eventDate',
            props.value?.eventDate == 'Newest' ? 'Oldest' : 'Newest',
          )
        }
        key={props.index}>
        <View style={[styles.containerSelect]}>
          <Text color={colors.white} size={12}>
            Event Date:{' '}
            <Text color={colors.white} fontWeight={'600'} size={12}>
              {props.value?.eventDate == 'Newest' ? 'Oldest' : 'Newest'}
            </Text>
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          onSelected(
            'createdDate',
            props.value?.createdDate == 'Newest' ? 'Oldest' : 'Newest',
          )
        }
        key={props.index}>
        <View style={[styles.containerSelect]}>
          <Text color={colors.white} size={12}>
            Created Date:{' '}
            <Text color={colors.white} fontWeight={'600'} size={12}>
              {props.value?.createdDate == 'Newest' ? 'Oldest' : 'Newest'}
            </Text>
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default memo(ItemSort);

const styles = StyleSheet.create({
  container: {},
  containerSelect: {
    borderRadius: 20,
    paddingHorizontal: 8,
    paddingVertical: 5,
    alignSelf: 'flex-start',
    marginBottom: 5,
    backgroundColor: colors.blue3,
    width: '100%'
  },
});
