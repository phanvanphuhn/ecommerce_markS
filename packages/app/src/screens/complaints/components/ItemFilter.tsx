import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {
  renderBorderColorComplaint,
  renderColorComplaint,
  renderStatusComplaint,
  renderBorderWidthComplaint,
} from 'utils/other-utils';
import colors from 'res/colors';
import {useDropdown} from 'screens/complaints/components/DropdownProvider';
import Text from 'elements/Text';

interface ItemFilterProps {
  item: string;
  index: number;
  onSelected?: (value: string) => void;
}

const ItemFilter = (props: ItemFilterProps) => {
  const {state, setState} = useDropdown();
  const onSelected = () => {
    setState({isOpen: false});
    props.onSelected && props.onSelected(props.item);
  };
  return (
    <TouchableOpacity onPress={onSelected} key={props.index}>
      <View
        style={[
          styles.containerSelect,
          {
            backgroundColor: renderColorComplaint(props.item),
            borderColor: renderBorderColorComplaint(props.item),
            borderWidth: renderBorderWidthComplaint(props.item),
          },
        ]}>
        <Text color={colors.white}>{renderStatusComplaint(props.item)}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ItemFilter;

const styles = StyleSheet.create({
  container: {},
  containerSelect: {
    borderRadius: 20,
    paddingHorizontal: 8,
    paddingVertical: 5,
    alignSelf: 'flex-start',
    marginBottom: 5,
  },
});
