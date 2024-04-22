import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import Theme from 'res/style/Theme';
import colors from 'res/colors';
import images from 'res/images';
import Image from 'elements/Image';
import Text from 'elements/Text';
import Rating from 'components/Rating';
import useStateCustom from 'hooks/useStateCustom';
import {useSelector} from 'hooks/useSelector';
import {DoctorDefault} from 'assets/svg';
interface ItemUserProps {}

const ItemUser = (props: ItemUserProps) => {
  const [state, setState] = useStateCustom({
    rating: 5,
  });
  const userProfile = useSelector(state => state.userProfile.user);
  const nameArray = userProfile?.fullName?.split(' ');

  return (
    <View style={[Theme.flexRow, styles.container]}>
      <View style={styles.headerContainer}>
        <Text color={colors.white} size={50} fontWeight={'500'}>
          {nameArray && nameArray[1]?.substring(0, 1)}
          {nameArray && nameArray[0]?.substring(0, 1)}
        </Text>
      </View>
      <View style={[Theme.pt15, Theme.pl15]}>
        <Text size={25} fontWeight={'700'} color={colors.white}>
          Hi, {userProfile?.fullName}
        </Text>
        {/*<Text size={15} fontWeight={'400'} color={colors.white}>*/}
        {/*  Rank 5, 3000pts*/}
        {/*</Text>*/}
        {/* <Rating
          rating={state.rating}
          max={10}
          iconHeight={20}
          iconWidth={20}
          onRate={value => {
            setState({rating: value});
          }}
        /> */}
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
  headerContainer: {
    height: 117,
    width: 117,
    borderRadius: 999,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'darkblue',
  },
});
