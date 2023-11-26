import React, {memo, useState} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import Text from 'elements/Text';
import Theme from 'res/style/Theme';
import Image from 'elements/Image';
import images from 'res/images';
import keyExtractor from 'utils/keyExtractor';
import useStateCustom from 'hooks/useStateCustom';
import moment from 'moment';
import colors from 'res/colors';

interface PriceMonthProps {}

const PriceMonth = (props: PriceMonthProps) => {
  const [state, setState] = useStateCustom({
    data: [
      {
        name: 'Singapore General Hospital - RES3094718',
        createdDate: moment().format('DD MMM YYYY'),
        price: 100,
      },
      {
        name: 'Singapore General Hospital - RES3094718',
        createdDate: moment().format('DD MMM YYYY'),
        price: 300,
      },
      {
        name: 'Singapore General Hospital - RES3094718',
        createdDate: moment().format('DD MMM YYYY'),
        price: 400,
      },
      {
        name: 'Singapore General Hospital - RES3094718',
        createdDate: moment().format('DD MMM YYYY'),
        price: 100,
      },
    ],
  });
  const renderItem = ({item}) => {
    return (
      <View
        style={{
          backgroundColor: colors.borderColor,
          padding: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 10,
        }}>
        <View>
          <Text size={11} fontWeight={'500'}>
            {item.name}
          </Text>
          <Text size={11} marginTop={3} fontWeight={'300'}>
            {item.createdDate}
          </Text>
        </View>
        <View
          style={{
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            marginTop: 12,
          }}>
          <Text size={11} fontWeight={'300'} marginTop={10}>
            SGD:
            <Text size={11} fontWeight={'500'} color={colors.green}>
              +{item.price}
            </Text>
          </Text>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={[Theme.flexRow]}>
        <Image source={images.ic_dolar2} />
        <Text size={21} fontWeight={'500'} marginLeft={10}>
          Last 10 Invoices
        </Text>
      </View>
      <FlatList
        data={state.data}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        keyExtractor={keyExtractor}
      />
    </View>
  );
};

export default memo(PriceMonth);

const styles = StyleSheet.create({
  container: {padding: 15, flex: 1},
});
