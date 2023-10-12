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

interface ItemSalesProps {
  isPriority?: boolean;
}

const ItemSales = (props: ItemSalesProps) => {
  const [speed, setSpeed] = useState(40);
  const [size, setSize] = useState(0);
  return (
    <View
      onLayout={event => {
        setSize(event.nativeEvent.layout.width);
        console.log(
          '=>(ItemSales.tsx:80) event',
          event.nativeEvent.layout.width,
        );
      }}
      style={[Theme.shadow, styles.container]}>
      <View style={[Theme.flexRow, Theme.pt05, Theme.pl10, Theme.pr10]}>
        <View style={[Theme.flexRow, Theme.flex1]}>
          <Image source={images.ic_chart2} />
          <Text
            size={props.isPriority ? 20 : 16}
            fontWeight={'600'}
            marginLeft={5}>
            {strings.salesAchievement}
          </Text>
        </View>
        {!!props.isPriority && (
          <View
            style={{
              backgroundColor: colors.borderColor,
              paddingHorizontal: 15,
              paddingVertical: 1,
              borderRadius: 10,
              marginRight: 5,
            }}>
            <Text
              color={colors.white}
              size={11}
              fontWeight={'700'}
              uppercase={true}>
              {strings.daily}
            </Text>
          </View>
        )}
        {!!props.isPriority && (
          <Image
            source={images.ic_dropdown}
            tintColor={colors.black}
            style={{transform: [{rotate: '270deg'}]}}
          />
        )}
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
        radius={props.isPriority ? width / 5 : width / 7}
        thumbRadius={12}
        sliderWidth={props.isPriority ? 30 : 20}
        isHideCircle={true}
        onChange={setSpeed}>
        <Text size={props.isPriority ? 24 : 18} fontWeight={'700'}>
          ${'26000'.formatPrice()}
        </Text>
        <Text
          fontWeight={'400'}
          size={props.isPriority ? 13 : 10}
          color={colors.dotActive}>
          118% over Target
        </Text>
      </RadialSlider>
    </View>
  );
};

export default ItemSales;

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
