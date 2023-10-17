import React, {useState} from 'react';
import {ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import Container from 'elements/Layout/Container';
import strings from 'res/strings';
import colors from 'res/colors';
import Theme from 'res/style/Theme';
import Text from 'elements/Text';
import Image from 'elements/Image';
import images from 'res/images';
import moment from 'moment';
import useStateCustom from 'hooks/useStateCustom';
import PriceYear from 'screens/sales/components/PriceYear';
import PriceMonth from 'screens/sales/components/PriceMonth';
import GranTurismo from 'screens/sales/components/GranTurismo';
import CircleMultipleSlider from 'components/Slider/CircleMultipleSlider';
import {width} from 'res/sizes';
import SemiCircleSlider from 'components/Slider/SemiCircleSlider';
import ContainerProgress from 'screens/sales/components/ContainerProgress';

interface SalesScreenProps {}
export type TabDateType = 'month' | 'quarter' | 'year';
interface IState {
  type?: TabDateType;
}

const SalesScreen = (props: SalesScreenProps) => {
  const [state, setState] = useStateCustom<IState>({
    startAngle: 0,
    angleLength: 3,
    type: 'month',
  });
  return (
    <Container title={strings.sale.mySales} style={styles.container}>
      <View
        style={{
          backgroundColor: colors.white,
          marginBottom: 5,
        }}>
        <View style={styles.containerUnder} />
        <View style={[Theme.shadow, styles.containerTab]}>
          <TouchableOpacity
            onPress={() => setState({type: 'month'})}
            style={[
              styles.buttonTab,
              state.type == 'month' ? styles.buttonTabActive : {},
            ]}>
            <Text
              fontWeight={'600'}
              color={state.type == 'month' ? colors.white : colors.borderColor}>
              MONTH
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setState({type: 'quarter'})}
            style={[
              styles.buttonTab,
              state.type == 'quarter' ? styles.buttonTabActive : {},
            ]}>
            <Text
              fontWeight={'600'}
              color={
                state.type == 'quarter' ? colors.white : colors.borderColor
              }>
              QUARTER
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setState({type: 'year'})}
            style={[
              styles.buttonTab,
              state.type == 'year' ? styles.buttonTabActive : {},
            ]}>
            <Text
              fontWeight={'600'}
              color={state.type == 'year' ? colors.white : colors.borderColor}>
              YEAR
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ContainerProgress tabDateType={state.type} />
        {(state.type == 'year' || state.type == 'quarter') && <PriceYear />}
        {state.type == 'month' && <PriceMonth />}
      </ScrollView>
    </Container>
  );
};

export default SalesScreen;

const styles = StyleSheet.create({
  container: {},
  containerUnder: {
    width: '100%',
    height: '50%',
    backgroundColor: colors.primary,
    position: 'absolute',
  },
  containerTab: {
    backgroundColor: colors.white,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 50,
    shadowOpacity: 0.2,
  },
  buttonTab: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 50,
  },
  buttonTabActive: {
    backgroundColor: colors.blue3,
  },
});
