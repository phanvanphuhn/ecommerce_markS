import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  LayoutAnimation,
  Platform,
  UIManager,
} from 'react-native';
import Image from 'elements/Image';
import images from 'res/images';
import Theme from 'res/style/Theme';
import Text from 'elements/Text';
import ItemClaim, {ClaimProps} from 'screens/boost/components/ItemClaim';
import keyExtractor from 'utils/keyExtractor';
import _ from 'lodash';
import {useBoost} from 'screens/boost/components/BoostProvider';
import {useContainerContext} from 'components/ContainerProvider';

interface DailyProps {}
const Daily = (props: DailyProps) => {
  const [listDaily, setListDaily] = useState<ClaimProps[]>([
    {
      title: 'Daily Log In',
      point: 5,
      value: 3,
      total: 3,
    },
    {
      title: 'Execute 3 calls',
      point: 5,
      value: 3,
      total: 3,
    },
    {
      title: 'Schedule 3 calls',
      point: 25,
      value: 3,
      total: 3,
    },
  ]);
  const {state, setState} = useContainerContext();
  // useEffect(() => {
  //   setState({daily: listDaily.filter(e => e.isClaim).length});
  // }, []);
  const onClaim = (item: ClaimProps, index: number) => {
    let data = [...listDaily];
    data[index].isClaim = true;
    data = _.orderBy(data, 'isClaim', 'desc');
    setListDaily(data);
    setState({daily: data.filter(e => e.isClaim).length});
    console.log(
      '=>(Daily.tsx:54) data.filter(e => e.isClaim).length',
      data.filter(e => e.isClaim).length,
    );
    LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
  };
  const renderItem = (item: ClaimProps, index: number) => {
    return (
      <View key={index}>
        <ItemClaim item={item} onClaim={() => onClaim(item, index)} />
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={[Theme.flexRow, {alignItems: 'flex-start'}]}>
        <Image source={images.ic_time} />
        <View style={{flex: 1, paddingLeft: 8, paddingTop: 5}}>
          <Text size={22} fontWeight={'700'}>
            Daily
          </Text>
          <View style={{marginTop: 15}}>
            {listDaily.map((item, index) => {
              return renderItem(item, index);
            })}
          </View>
        </View>
      </View>
    </View>
  );
};

export default Daily;

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
});
