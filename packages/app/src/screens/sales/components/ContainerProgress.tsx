import React, {
  memo,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import {
  View,
  StyleSheet,
  Animated,
  PanResponder,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Theme from 'res/style/Theme';
import colors from 'res/colors';
import Image from 'elements/Image';
import images from 'res/images';
import CircleMultipleSlider from 'components/Slider/CircleMultipleSlider';
import {height, width} from 'res/sizes';
import moment from 'moment/moment';
import Text from 'elements/Text';
import {useSharedValue} from 'react-native-reanimated';
import useStateCustom from 'hooks/useStateCustom';
import {IStateSales, TabDateType} from 'screens/sales/SalesScreen';
import ModalBase from 'components/ModalBase';
import ButtonBorder from 'elements/Buttons/ButtonBorder';
import useModal from 'hooks/useModal';
import {useContainerContext} from 'components/ContainerProvider';

interface ContainerProgressProps {}

const ContainerProgress = (props: ContainerProgressProps) => {
  const percentage = useRef<number>(0);
  const [state2, setState2] = useStateCustom({
    dateType: '',
    currentDate: moment(),
    dataGuidelines: [
      'Manual sales transfers are not reflected in JARVIS.',
      'Sales achievement percentages are downwards rounding, e.g., 99.99% is 99% in SIP books.',
      'SIP calculations are not applicable for contractors who are not eligible for SIP in JARVIS.',
      'Capital Equipment & Service Contract sales commissions are subjected to CGM Approvals before being reflected in JARVIS.',
      'Scrap Management program is currently not reflected in JARVIS.',
      'Changes due to maternity leaves and/or leave of absence of more than 18 days are not reflected in JARVIS.',
      'The maximum payout is 350% of your annual variable pay (revised to 250% in 2024).',
    ],
  });
  const [isOpen, open, close] = useModal();
  const {state, setState} = useContainerContext<IStateSales>();
  const renderDate = useCallback(() => {
    let date = state.currentDate ? moment(state.currentDate) : moment();
    switch (state.type) {
      case 'Quarter':
        return `Q${Math.ceil((date.month() + 1) / 3)} ${date.year()}`;
      case 'Year':
        return date.year();
      case 'Month':
        return date.format('MMM YYYY');
    }
  }, [state.currentDate, state.type]);
  const changeDate = useCallback(
    (isNext: boolean) => {
      let date = state.currentDate
        ? moment(state.currentDate, 'YYYY-MM-DD')
        : moment();
      switch (state.type) {
        case 'Quarter':
          date.add(isNext ? 3 : -3, 'month');
          setState({currentDate: date.format('YYYY-MM-DD')});
          break;
        case 'Year':
          date.add(isNext ? 1 : -1, 'year');
          setState({currentDate: date.format('YYYY-MM-DD')});
          break;
        case 'Month':
          date.add(isNext ? 1 : -1, 'month');
          setState({currentDate: date.format('YYYY-MM-DD')});
          break;
      }
    },
    [state.type, state.currentDate],
  );
  useEffect(() => {
    percentage.current = state.percentage;
  }, [state.percentage]);

  const targetTotal = useMemo(() => {
    switch (state.type) {
      case 'Month':
        return state.data?.targetByMonth || 0;
      case 'Quarter':
        return parseInt(
          (state?.data?.targetByQuarter || 0) * (state.percentage / 100),
        );
      case 'Year':
        return state.data?.targetByYear || 0;
    }
  }, [state.data, state.type]);
  const targetAvchieve = useMemo(() => {
    let target = state.data?.[`targetBy${state.type}`];
    return Math.round(target);
  }, [state.data, state.type]);
  const targetPercent = useMemo(() => {
    let target = state.data?.[`targetBy${state.type}`];
    let sale = state.data?.[`salesBy${state.type}`];
    return Math.round(((sale || 0) / (target || 0)) * 100);
  }, [state.data, state.type]);
  return (
    <>
      <Animated.View style={styles.container}>
        <Animated.View style={[Theme.shadow, styles.container2]}>
          <Animated.View
            style={[Theme.flexRow, {alignSelf: 'center', marginBottom: 15}]}>
            <TouchableOpacity
              hitSlop={{top: 10, left: 10, bottom: 10, right: 10}}
              onPress={() => changeDate(false)}>
              <Image
                source={images.ic_dropdown}
                tintColor={colors.black}
                style={{transform: [{rotate: '90deg'}]}}
              />
            </TouchableOpacity>
            <View
              style={{
                backgroundColor: colors.borderColor,
                paddingHorizontal: '10%',
                paddingVertical: 7,
                borderRadius: 30,
                marginHorizontal: 10,
              }}>
              <Text uppercase={true} fontWeight={'700'} color={colors.white}>
                {renderDate()}
              </Text>
            </View>
            <TouchableOpacity
              hitSlop={{top: 10, left: 10, bottom: 10, right: 10}}
              onPress={() => changeDate(true)}>
              <Image
                source={images.ic_dropdown}
                tintColor={colors.black}
                style={{transform: [{rotate: '-90deg'}]}}
              />
            </TouchableOpacity>
          </Animated.View>
          <View style={{}}>
            <CircleMultipleSlider
              maxBottom={100}
              valueBottom={100}
              disabledMax={120}
              maxTop={100}
              disabled={state.type != 'Quarter'}
              valueTop={targetPercent || 0}
              width={width - 100}
              thumbRadius={22}
              onUpdate={value => {
                setState({
                  percentage: value,
                });
              }}
              strokeWidth={45}>
              <View
                style={{
                  flex: 1,
                  padding: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                {state.type == 'Month' ? (
                  <Text>MTD Total:</Text>
                ) : state.type == 'Quarter' ? (
                  <Text>QTD Total:</Text>
                ) : (
                  <Text>YTD Total:</Text>
                )}
                <Text center={true} marginTop={5} size={35} fontWeight={'600'}>
                  ${targetTotal}
                </Text>
                <View
                  style={{
                    backgroundColor: colors.borderColor,
                    borderRadius: 20,
                    paddingHorizontal: 10,
                    paddingVertical: 3,
                    marginTop: 5,
                  }}>
                  <Text color={colors.pink3} fontWeight={'600'}>
                    ${targetAvchieve || 0}{' '}
                    <Text fontWeight={'400'}>to {state.percentage}%</Text>
                  </Text>
                </View>
              </View>
            </CircleMultipleSlider>
          </View>
          <View style={[Theme.flexRowSpace, {width: '100%'}]}>
            <TouchableOpacity
              hitSlop={{top: 10, bottom: 10, right: 10, left: 10}}
              onPress={open}>
              <Image source={images.ic_info} />
            </TouchableOpacity>
            <View style={{alignItems: 'flex-end'}}>
              <Text size={10} color={colors.dotActive}>
                Updated as of:
              </Text>
              <Text size={10} color={colors.dotActive}>
                {moment().format('DD MMM YYYY, HH:mm A')}
              </Text>
            </View>
          </View>
        </Animated.View>
      </Animated.View>
      <ModalBase
        animationIn={'slideInLeft'}
        animationOut={'slideOutLeft'}
        isVisibleModal={isOpen}>
        <View style={styles.containerModal}>
          <Text size={18} fontWeight={'700'}>
            Disclaimer
          </Text>
          <View style={{height: height / 2}}>
            <ScrollView
              showsVerticalScrollIndicator={false}
              horizontal={false}
              showsHorizontalScrollIndicator={false}>
              <View style={{flex: 1}}>
                {state2.dataGuidelines?.map((e, i) => {
                  return (
                    <View
                      key={i}
                      style={[
                        Theme.flexRow,
                        {alignItems: 'flex-start', marginTop: 15, flex: 1},
                      ]}>
                      <Text fontWeight={'300'} size={18}>
                        {i + 1}.
                      </Text>
                      <Text fontWeight={'300'} size={18}>
                        {e}
                      </Text>
                    </View>
                  );
                })}
              </View>
            </ScrollView>
          </View>
          <ButtonBorder
            borderColor={colors.blue3}
            height={42}
            color={colors.blue3}
            style={[{paddingHorizontal: '30%', marginTop: 10}]}
            title={'Close'}
            onPress={close}
          />
        </View>
      </ModalBase>
    </>
  );
};

export default memo(ContainerProgress);

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    paddingBottom: 10,
  },
  container2: {
    backgroundColor: colors.white,
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 0.1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingBottom: 10,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
    elevation: 2,
  },
  containerModal: {
    backgroundColor: colors.white,
    alignItems: 'center',
    padding: 20,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    alignSelf: 'center',
    justifyContent: 'center',
  },
});
