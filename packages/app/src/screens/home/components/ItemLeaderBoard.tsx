import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import colors from 'res/colors';
import Text from 'elements/Text';
import {width} from 'res/sizes';
import Theme from 'res/style/Theme';
import Image from 'elements/Image';
import images from 'res/images';
import strings from 'res/strings';
import {useNavigation} from '@react-navigation/core';
import {BaseUseNavigationProps} from 'navigation/BaseNavigationProps';
import {MainParamList} from 'navigation/service/NavigationParams';
import {Routes} from 'configs';

interface ItemLeaderBoardProps {
  isPriority?: boolean;
}

const ItemLeaderBoard = (props: ItemLeaderBoardProps) => {
  const [speed, setSpeed] = useState(100);
  const navigation = useNavigation<BaseUseNavigationProps<MainParamList>>();
  const onDetail = () => {
    navigation.navigate(Routes.LeaderboardScreen);
  };
  return (
    <TouchableOpacity
      onPress={onDetail}
      style={[Theme.shadow, styles.container]}>
      <View
        style={[
          Theme.flexRowSpace,
          Theme.pt05,
          Theme.pl10,
          Theme.pr10,
          {width: '100%'},
        ]}>
        <Image source={images.ic_leader_with_bg} />
        <Text size={16} fontWeight={'600'}>
          {strings.leaderboard}
        </Text>
        <Image source={images.ic_boost_with_bg} style={{opacity: 0}} />
      </View>
      <Image
        source={images.ic_leader_board_gold}
        style={{width: width / 2 - 80, height: width / 2 - 80, marginTop: 20}}
      />
    </TouchableOpacity>
  );
};

export default ItemLeaderBoard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    shadowOpacity: 0.2,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingBottom: 10,
  },
});
