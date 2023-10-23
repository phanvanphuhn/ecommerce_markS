import React, {useEffect, useState} from 'react';
import {View, StyleSheet, LayoutAnimation} from 'react-native';
import Theme from 'res/style/Theme';
import Image from 'elements/Image';
import images from 'res/images';
import Text from 'elements/Text';
import ItemClaim, {ClaimProps} from 'screens/boost/components/ItemClaim';
import _ from 'lodash';
import {useBoost} from 'screens/boost/components/BoostProvider';
import {useContainerContext} from 'components/ContainerProvider';

interface RecoProps {}

const Recommended = (props: RecoProps) => {
  const [listRecommended, setListRecommended] = useState<ClaimProps[]>([
    {
      title:
        'You are 20% short on your SGH visits. Plan your next SGH call now.',
      point: 5,
      value: 3,
      total: 3,
    },
    {
      title:
        'You are 50% short on your sales target for consoles. Plan your next sales call now.',
      point: 5,
      value: 2,
      total: 3,
    },
    {
      title:
        'You are 50% short on your sales target for consoles. Plan your next sales call now.',
      point: 25,
      value: 1,
      total: 3,
    },
    {
      title: 'Check pending complaints',
      point: 25,
      value: 1,
      total: 1,
    },
  ]);

  const {state, setState} = useContainerContext();
  // useEffect(() => {
  //   setState({recommended: listRecommended.filter(e => e.isClaim).length});
  // }, []);
  const onClaim = (item: ClaimProps, index: number) => {
    let data = [...listRecommended];
    data[index].isVote = true;
    setListRecommended(data);
    LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
  };
  const onLike = (item: ClaimProps, index: number) => {
    let data = [...listRecommended];
    data[index].isClaim = true;
    data = _.orderBy(data, 'isClaim', 'desc');
    setListRecommended(data);
    setState({recommended: listRecommended.filter(e => e.isClaim).length});

    LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
  };
  const renderItem = (item: ClaimProps, index: number) => {
    return (
      <View key={index}>
        <ItemClaim
          item={item}
          onClaim={() => onClaim(item, index)}
          onLike={() => onLike(item, index)}
          onDislike={() => onLike(item, index)}
        />
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={[Theme.flexRow, {alignItems: 'flex-start'}]}>
        <Image source={images.ic_time} />
        <View style={{flex: 1, paddingLeft: 8, paddingTop: 5}}>
          <Text size={22} fontWeight={'700'}>
            Recommended
          </Text>
          <View style={{marginTop: 15}}>
            {listRecommended.map((item, index) => {
              return renderItem(item, index);
            })}
          </View>
        </View>
      </View>
    </View>
  );
};

export default Recommended;

const styles = StyleSheet.create({
  container: {padding: 15},
});
