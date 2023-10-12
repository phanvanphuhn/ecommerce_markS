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
import CircularMultipleSlider from 'screens/home/components/CircularMultipleSlider';

interface ItemBoostProps {
  isPriority?: boolean;
}

const ItemBoost = (props: ItemBoostProps) => {
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
        <Image source={images.ic_boost_with_bg} />
        <Text size={16} fontWeight={'600'}>
          {strings.boost}
        </Text>
        <Image source={images.ic_boost_with_bg} style={{opacity: 0}} />
      </View>
      <CircularMultipleSlider
        componentType={'slider'} //Default type is slider
        values={[20, 0, 40]}
        colors={['transparent', '#C6D68F', 'red']}
        onUpdate={values => {
          console.log('=>(ItemBoost.tsx:63) values', values);
        }}
        // dividerComponent={[
        //   this.getDividerComponentImage(REACT_IMAGE),
        //   this.getDividerComponentImage(ANGULAR_IMAGE),
        //   this.getDividerComponentImage(SWIFT_IMAGE),
        //   this.getDividerComponentImage(ANDROID_IMAGE),
        // ]}
        // dividerComponentSize={DIVIDER_COMPONENT_SIZE}
        slideDividerType={'circle'}
        borderColor={'#0088a0'}
        borderWidth={3}
        strokeWidth={20}
        radius={width / 6}
        separatorColor="#171717"
        minimumStopValue={0.5}
      />
    </View>
  );
};

export default ItemBoost;

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
