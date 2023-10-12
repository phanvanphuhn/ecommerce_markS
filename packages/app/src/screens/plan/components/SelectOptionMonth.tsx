import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  ImageSourcePropType,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import colors from 'res/colors';
import Image from 'elements/Image';
import images from 'res/images';
import Theme from 'res/style/Theme';
import Text from 'elements/Text';

interface SelectOptionMonthProps {
  height?: number;
  value: string;
  onSelected: (value: string) => void;
  onClose: () => void;
}
interface ISelectOption {
  name: string;
  value: string;
  icon: ImageSourcePropType;
}

const SelectOptionMonth = (props: SelectOptionMonthProps) => {
  const [state, setState] = useState<ISelectOption[]>([
    {
      name: 'Month',
      value: 'Month',
      icon: images.ic_month,
    },
    {
      name: 'Day',
      value: 'Day',
      icon: images.ic_day,
    },
  ]);
  const onSelect = (item: ISelectOption) => {
    props?.onSelected && props.onSelected(item.value);
    props.onClose && props.onClose();
  };
  return (
    <TouchableWithoutFeedback onPress={props.onClose}>
      <View
        style={{
          ...StyleSheet.absoluteFillObject,
          backgroundColor: '#00000070',
          zIndex: 9999,
        }}>
        <View
          style={{
            backgroundColor: colors.white,
            position: 'absolute',
            top: props?.height || 0,
            zIndex: 9999,
            left: 0,
            right: 0,
            paddingVertical: 10,
          }}>
          {state.map(e => {
            return (
              <TouchableOpacity
                onPress={() => onSelect(e)}
                style={[
                  Theme.flexRow,
                  Theme.pt10,
                  Theme.pl10,
                  Theme.pr10,
                  Theme.pb10,
                ]}>
                <Image source={e.icon} />
                <View
                  style={[
                    Theme.flex1,
                    Theme.ml10,
                    Theme.pb08,
                    Theme.flexRowSpace,
                    {
                      borderBottomColor: colors.borderColor,
                      borderBottomWidth: 1,
                    },
                  ]}>
                  <Text
                    color={e.value == props.value ? colors.blue : colors.text}>
                    {e.name}
                  </Text>
                  {e.value == props.value && (
                    <Image source={images.ic_checked} />
                  )}
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SelectOptionMonth;

const styles = StyleSheet.create({
  container: {},
});
