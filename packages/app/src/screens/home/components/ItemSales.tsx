import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import colors from 'res/colors';

interface ItemSalesProps {}

const ItemSales = (props: ItemSalesProps) => {
  const [state, setState] = useState(0);
  const [color, setColor] = useState(0);
  return (
    <View style={styles.container}>
      {/*<LinearGradient />*/}
      {/*<SemiCircleProgress*/}
      {/*  initialPercentage={0}*/}
      {/*  progressShadowColor={['red', '#bbb']}*/}
      {/*  animationSpeed={1000}*/}
      {/*  currentValue={20}*/}
      {/*  maxValue={100}*/}
      {/*  minValue={0}*/}
      {/*  progressWidth={50}*/}
      {/*  progressColor={['green', 'blue']}>*/}
      {/*  <Text style={{fontSize: 32, color: 'green'}}>35%</Text>*/}
      {/*</SemiCircleProgress>*/}
      {/*<ColorPickerSlider*/}
      {/*  thumbColor={'grey'}*/}
      {/*  trackStrokeWidth={20}*/}
      {/*  gestureDisabled={false}*/}
      {/*  trackRadius={150}*/}
      {/*  circleType={'Top'}*/}
      {/*  value={state}*/}
      {/*  onValueChange={value => setState(value)}*/}
      {/*  onChangeColor={color => setColor(color)}*/}
      {/*/>*/}
    </View>
  );
};

export default ItemSales;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
  },
});
