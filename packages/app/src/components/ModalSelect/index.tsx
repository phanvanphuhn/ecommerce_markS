import {useTheme} from 'configs/ChangeTheme';
import Text from 'elements/Text';
import React, {memo} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import colors from 'res/colors';
import Theme from 'res/style/Theme';

interface ModalSelectProps {
  close: () => void;
  choices: {id: number; name: string; color?: string}[];
  onPressItem: (item: any) => void;
}

const ModalSelect = memo(({close, choices, onPressItem}: ModalSelectProps) => {
  return (
    <View style={{paddingBottom: 20}}>
      <View
        style={[
          styles.topBorder,
          styles.bottomBorder,
          {backgroundColor: colors.white},
        ]}>
        {choices &&
          choices.map((item, index) => {
            const onPress = () => {
              close && close();
              setTimeout(() => {
                onPressItem && onPressItem(item);
              }, 1000);
            };
            return (
              <TouchableOpacity
                key={item.id.toString()}
                activeOpacity={0.54}
                style={[
                  styles.selectItem,
                  index === 0 && styles.topBorder,
                  index === choices.length - 1 && styles.bottomBorder,
                ]}
                {...{onPress}}>
                <Text
                  color={item.color && item.color}
                  size={15}
                  lineHeight={18}
                  fontWeight={'600'}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            );
          })}
      </View>
      <View
        style={[
          styles.selectItem,
          styles.topBorder,
          styles.bottomBorder,
          {marginTop: 24, backgroundColor: colors.white},
        ]}>
        <TouchableOpacity
          style={{...StyleSheet.absoluteFillObject, ...Theme.center}}
          onPress={close}
          activeOpacity={0.54}>
          <Text
            size={15}
            lineHeight={18}
            fontWeight={'600'}
            color={colors.grayBlue}>
            Cancel
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
});

export default ModalSelect;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'center',
  },
  selectItem: {
    height: 50,
    ...Theme.center,
  },
  topBorder: {
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  bottomBorder: {
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
});
