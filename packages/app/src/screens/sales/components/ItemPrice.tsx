import React, {memo, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import Theme from 'res/style/Theme';
import Text from 'elements/Text';
import colors from 'res/colors';

interface ItemPriceProps {
  currentValue?: number;
  potentialValue?: string | number;
  title: string;
}

const ItemPrice = (props: ItemPriceProps) => {
  const [state, setState] = useState();
  return (
    <View style={[Theme.flexRow, Theme.pt05]}>
      <Text color={colors.black} fontWeight={'300'} style={{flex: 1}}>
        {props.title}
      </Text>
      <View style={{width: '30%'}}>
        {props.currentValue ? (
          <Text fontWeight={'300'} center={true}>
            {props.currentValue}
          </Text>
        ) : (
          <Text center={true} fontWeight={'300'}>
            -
          </Text>
        )}
      </View>
      <View style={{width: '30%'}}>
        {props.potentialValue ? (
          <Text center={true} color={colors.orange} fontWeight={'300'}>
            {props.potentialValue}
          </Text>
        ) : (
          <Text center={true} fontWeight={'300'} color={colors.orange}>
            -
          </Text>
        )}
      </View>
    </View>
  );
};

export default memo(ItemPrice);

const styles = StyleSheet.create({
  container: {},
});
