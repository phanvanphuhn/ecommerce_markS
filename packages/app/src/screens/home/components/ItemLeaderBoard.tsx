import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import colors from 'res/colors';
import SemiCircleProgress from 'screens/home/components/SemiCircleProgress';
import Text from 'elements/Text';
import ColorPickerSlider from 'screens/home/components/SemiCiclePicker';
import {RadialSlider} from 'lib/react-native-radial-slider';
import {width} from 'res/sizes';
import Theme from 'res/style/Theme';
import Image from 'elements/Image';
import images from 'res/images';
import strings from 'res/strings';

interface ItemLeaderBoardProps {
  isPriority?: boolean;
}

const ItemLeaderBoard = (props: ItemLeaderBoardProps) => {
  const [speed, setSpeed] = useState(40);
  return (
    <View style={[Theme.shadow, styles.container]}>
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
      <RadialSlider
        value={speed}
        min={0}
        max={200}
        linearGradient={[
          {color: '#EFE2AE', offset: '0%'},
          {color: '#DBA747', offset: '100%'},
        ]}
        linearGradientPlaceholder={[
          {color: '#609', offset: '100%'},
          {color: '#B22DF3', offset: '0%'},
        ]}
        disabled={true}
        radius={width / 7}
        thumbRadius={12}
        sliderWidth={20}
        isHideCircle={true}
        onChange={setSpeed}>
        <Text size={17} fontWeight={'700'}>
          2
          <Text size={11} color={colors.borderColor}>
            /2
          </Text>
        </Text>
      </RadialSlider>
    </View>
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
