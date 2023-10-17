import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import Theme from 'res/style/Theme';
import colors from 'res/colors';
import images from 'res/images';
import Image from 'elements/Image';
import Text from 'elements/Text';
import Rating from 'components/Rating';
import useStateCustom from 'hooks/useStateCustom';
interface ItemUserProps {}

const ItemUser = (props: ItemUserProps) => {
  const [state, setState] = useStateCustom({
    rating: 5,
  });
  return (
    <View style={[Theme.flexRow, styles.container]}>
      <View style={{}}>
        <Image
          source={images.ic_doctor_default}
          style={{width: 100, height: 100, borderRadius: 50}}
        />
        <View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
          }}>
          <Image
            source={images.ic_bg_avatar}
            style={{
              width: 100,
              height: 120,
              borderRadius: 70,
            }}
          />
        </View>
      </View>
      <View style={[Theme.pt15, Theme.pl15]}>
        <Text size={25} fontWeight={'700'} color={colors.white}>
          Hi, John Appleseed
        </Text>
        <Text size={15} fontWeight={'400'} color={colors.white}>
          Rank 5, 3000pts
        </Text>
        <Rating
          rating={state.rating}
          max={10}
          iconHeight={20}
          iconWidth={20}
          onRate={value => {
            setState({rating: value});
          }}
        />
      </View>
    </View>
  );
};

export default ItemUser;

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    paddingHorizontal: 20,
    marginTop: 20,
    marginBottom: 10,
  },
});
