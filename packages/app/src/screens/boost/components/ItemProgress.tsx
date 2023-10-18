import React, {useMemo, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import colors from 'res/colors';
import Theme from 'res/style/Theme';
import Text from 'elements/Text';

interface ItemProgressProps {
  value: number;
  total: number;
}

const ItemProgress = (props: ItemProgressProps) => {
  const _getPercentage = useMemo(() => {
    if (props.value > props.total || props.value == 0) {
      return 4;
    }
    return ((props.value / props.total) * 100).toFixed();
  }, [props.value, props.total]);
  return (
    <View
      style={[
        styles.container,
        {
          width: `${_getPercentage}%`,
        },
      ]}>
      <View style={styles.container2}>
        <Text fontWeight={'700'} color={colors.white}>
          {props.value}
        </Text>
      </View>
    </View>
  );
};

export default ItemProgress;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.pink3,
    height: '100%',
    position: 'absolute',
    left: 3,
    right: 3,
    borderRadius: 20,
    justifyContent: 'center',
  },
  container2: {
    backgroundColor: colors.pink3,
    width: 25,
    height: 25,
    borderRadius: 20,
    position: 'absolute',
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
    ...Theme.shadow,
  },
});
