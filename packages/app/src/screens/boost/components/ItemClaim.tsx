import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Animated,
  Platform,
  UIManager,
  LayoutAnimation,
  TouchableOpacity,
} from 'react-native';
import Text from 'elements/Text';
import Image from 'elements/Image';
import images from 'res/images';
import Theme from 'res/style/Theme';
import ButtonText from 'elements/Buttons/ButtonText';
import colors from 'res/colors';
export interface ClaimProps {
  title: string;
  value: number;
  total: number;
  point: number;
  isClaim?: boolean;
  isVote?: boolean;
}
interface ItemClaimProps {
  item: ClaimProps;
  onClaim?: () => void;
  onLike?: () => void;
  onDislike?: () => void;
}

const ItemClaim = (props: ItemClaimProps) => {
  const onPress = () => {
    props.onClaim && props.onClaim();
  };
  const [state, setState] = useState();
  return (
    <Animated.View style={[styles.container]}>
      <View style={[Theme.flex3]}>
        <Text
          size={16}
          color={
            props.item.isVote || props.item.isClaim
              ? colors.borderColor
              : colors.text
          }
          fontWeight={'400'}>
          {props?.item?.title}
        </Text>
      </View>
      {/*<View*/}
      {/*  style={[*/}
      {/*    Theme.flexRow,*/}
      {/*    Theme.flex1,*/}
      {/*    Theme.center,*/}
      {/*    {opacity: props.item.isVote || props.item.isClaim ? 0.2 : 1},*/}
      {/*  ]}>*/}
      {/*  <Image source={images.ic_coin} />*/}
      {/*  <Text size={15} fontWeight={'500'} marginLeft={5}>*/}
      {/*    {props?.item?.point}*/}
      {/*  </Text>*/}
      {/*</View>*/}
      {/*{(!props.item.isVote || (props.item.isVote && props.item.isClaim)) && (*/}
      {/*  <ButtonText*/}
      {/*    title={*/}
      {/*      props.item.value >= props.item.total && !props.item.isClaim*/}
      {/*        ? 'Claim'*/}
      {/*        : `${props.item.value}/${props.item.total}`*/}
      {/*    }*/}
      {/*    marginLeft={10}*/}
      {/*    onPress={onPress}*/}
      {/*    disabled={props.item.value < props.item.total}*/}
      {/*    height={30}*/}
      {/*    style={{*/}
      {/*      borderRadius: 20,*/}
      {/*      width: '25%',*/}
      {/*      backgroundColor: props.item.isClaim*/}
      {/*        ? colors.borderColor*/}
      {/*        : props.item.value >= props.item.total*/}
      {/*        ? '#660099'*/}
      {/*        : colors.blue3,*/}
      {/*    }}*/}
      {/*    textProps={{*/}
      {/*      fontWeight: '700',*/}
      {/*      color: colors.white,*/}
      {/*    }}*/}
      {/*    titleColor={colors.white}*/}
      {/*  />*/}
      {/*)}*/}
      {/*{!!props.item.isVote && !props.item.isClaim && (*/}
      <View style={{width: '25%', flexDirection: 'row'}}>
        <TouchableOpacity onPress={props.onLike} style={[Theme.flex1]}>
          <View style={styles.containerIcon}>
            <Image source={images.ic_like} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={props.onDislike} style={[Theme.flex1]}>
          <View style={styles.containerIcon}>
            <Image source={images.ic_dislike} />
          </View>
        </TouchableOpacity>
      </View>
      {/*)}*/}
    </Animated.View>
  );
};

export default ItemClaim;

const styles = StyleSheet.create({
  container: {
    ...Theme.flexRow,
    marginTop: 15,
  },
  containerIcon: {
    backgroundColor: colors.gray2,
    padding: 8,
    borderRadius: 20,
    alignSelf: 'center',
  },
});
