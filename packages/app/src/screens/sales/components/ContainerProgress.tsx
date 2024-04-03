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
import LinearGradient from 'react-native-linear-gradient';
import ButtonIcon from 'elements/Buttons/ButtonIcon';
import {useLazyQuery, useMutation} from '@apollo/client';
import {getMobileSales} from 'apollo/query/getMobileSales';
import {upsertMobileSalesQuarter} from 'apollo/query/upsertMobileSalesQuarter';
import {upsertMobileSalesYear} from 'apollo/query/upsertMobileSalesYear';

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
  const [isOpenAccept, openAccept, closeAccept] = useModal();
  const {state, setState} = useContainerContext<IStateSales>();
  console.log(
    '=>(ContainerProgress.tsx:59) state.percentage2',
    state.percentage2,
  );
  console.log(
    '=>(ContainerProgress.tsx:59) state.percentage',
    state.percentage,
  );
  const [getData, {data}] = useLazyQuery(getMobileSales);
  const [updateTargetQuarter] = useMutation(upsertMobileSalesQuarter);
  const [updateTargetYear] = useMutation(upsertMobileSalesYear);

  const onUpdateTarget = async () => {
    let date = moment(state.currentDate);
    if (state.percentage2 <= 80) {
      return;
    }
    switch (state.type) {
      case 'Month':
        break;
      case 'Year':
        if (state.data?.targetByYear) {
          updateTargetYear({
            variables: {
              year: date.year().toString(),
              targetByYear: state.data?.targetByYear,
            },
          });
        }
        break;
      case 'Quarter':
        if (state?.data?.targetByQuarter) {
          await updateTargetQuarter({
            variables: {
              quarter: Math.ceil((date.month() + 1) / 3).toString(),
              year: date.year().toString(),
              targetByQuarter: parseInt(
                state?.data?.targetByQuarter * ((state.percentage2 + 3) / 100),
              ).toString(),
            },
          });
          closeAccept();
          setState({
            percentage2: getPercent + 3,
            percentage: getPercent + 3,
          });
        }
        break;
    }
  };
  useEffect(() => {
    if (data?.data?.length) {
      let per =
        (data?.data[0]?.targetByQuarter / state?.data?.targetByQuarter) * 100;

      setState({
        percentage2: isNaN(per) ? 100 : per,
        percentage: isNaN(per) ? 100 : per,
      });
    }
  }, [data, state?.data?.targetByQuarter]);
  useEffect(() => {
    if (state.type == 'Quarter' || state.type == 'Year') {
      let date = moment(state.currentDate);
      getData({
        variables: {
          type: state?.type == 'Quarter' ? 'quarter' : 'year',
          year: date.year().toString(),
          quarter: Math.ceil((date.month() + 1) / 3).toString(),
        },
      });
    }
  }, [state.currentDate, state.type]);
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
        return parseInt(state.data?.salesByMonth || '0');
      case 'Quarter':
        return parseInt(state?.data?.salesByQuarter || '0');
      case 'Year':
        return parseInt(state.data?.salesByYear || '0');
    }
  }, [state.data, state.type]);
  const targetAvchieve = useMemo(() => {
    let salesBy = state.data?.[`salesBy${state.type}`];
    let targetBy = state.data?.[`targetBy${state.type}`];
    let target = 0;
    if (salesBy < targetBy) {
      target = targetBy - salesBy;
    }
    return isNaN(Math.abs(Math.round(target)))
      ? 0
      : Math.abs(Math.round(target));
  }, [state.data, state.type]);
  const targetPercent = useMemo(() => {
    let target = (targetTotal / state.data?.[`targetBy${state.type}`]) * 100;
    if (state.data?.[`targetBy${state.type}`]) {
      return Math.round(target);
    }
    return 0;
  }, [targetAvchieve, targetTotal]);
  const getPercent = useMemo(
    () =>
      state.percentage == 100 && state?.percentage2 != 100
        ? state.percentage
        : state.percentage != 100 && state?.percentage2 == 100
        ? state?.percentage
        : state.percentage2,
    [state.percentage, state.percentage2],
  );
  const getCommissionPercent = useMemo(() => {
    let obj = state.listCommission?.find(
      e =>
        e.lowerBound <= (getPercent + 3 || 0) &&
        e.upperBound > (getPercent + 3 || 0),
    );
    return obj?.commissionPercentage || 0;
  }, [getPercent, state.listCommission]);

  const getVariablePercent = useMemo(() => {
    let obj = state.listCommission?.find(
      e =>
        e.lowerBound <= (getPercent + 3 || 0) &&
        e.upperBound > (getPercent + 3 || 0),
    );
    return obj?.variablePayoutPercentage || 0;
  }, [getPercent, state.listCommission]);

  const getVariable = useMemo(() => {
    const {data} = state;
    switch (state.type) {
      case 'Quarter':
        let price =
          data?.[`variablePayBy${state.type}`] * (getVariablePercent / 100);
        return (price < 0 ? 0 : price).toFixed();
      case 'Year':
        return 0;
      case 'Month':
        return 0;
      default:
        return 0;
    }
  }, [state.type, state.data, getVariablePercent]);
  const getCommissionSale = useMemo(() => {
    const {data} = state;
    switch (state.type) {
      case 'Quarter':
        let price =
          data?.[`targetBy${state.type}`] * 1.05 -
          data?.[`salesBy${state.type}`];
        return price;
      case 'Year':
        return 0;
      case 'Month':
        return 0;
      default:
        return 0;
    }
  }, [state.type, state.data, getCommissionPercent]);
  const getCommission = useMemo(() => {
    const {data} = state;
    switch (state.type) {
      case 'Quarter':
        let price = getCommissionSale * (getCommissionPercent / 100);
        return (price < 0 ? 0 : price).toFixed();
      case 'Year':
        return 0;
      case 'Month':
        return 0;
      default:
        return 0;
    }
  }, [state.type, state.data, getCommissionSale, getCommissionPercent]);

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
              valueBottom={state.percentage2}
              disabledMax={120}
              maxTop={100}
              colorTop={
                Number(targetPercent) >= 100
                  ? ['#EDE0AC', '#E2C261', '#D8A042']
                  : [
                      '#e6b3ff',
                      '#c44dff',
                      '#9900e6',
                      '#7700b3',
                      '#609',
                      '440066',
                    ]
              }
              colorTopCicle={
                Number(targetPercent) >= 100 ? '#D8A042' : '#9900e6'
              }
              disabled={state.type != 'Quarter'}
              valueTop={targetPercent || 0}
              width={width - 100}
              thumbRadius={22}
              onUpdate={value => {
                if (value == 100) {
                  setState({
                    percentage2: value,
                  });
                }
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
                <Text center={true} marginTop={5} size={24} fontWeight={'600'}>
                  ${String(targetTotal)?.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                </Text>
                {targetAvchieve == 0 &&
                targetPercent >= 100 &&
                getPercent == 100 &&
                state.type == 'Quarter' ? (
                  <View>
                    <Image
                      source={{
                        uri: 'https://s3-alpha-sig.figma.com/img/d629/aee5/a7a6cd47d163c25d7313395be545020c?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TAZ3iTgUIYkQvAfZIaFoUWi0B4qC~K6qKod7eKkJLJLZmAYkDj7UxqZNeE~mFUAyaMVUpfzRKKedViQ~IfsDTlSDVz7z7GhFiOwFJrPsR4~zHQts0tNpf1j~giGt4o0TuMyABZMqgbAXBw0doZNf46l31XdoRv9SOvJ9CHjxCRACXSB~n19mXr15Zm1LewG2WgTUFn3rOsuSpeaIVaLUvGdx0dqD47Liqb24BrT~8wqZ1XFEzt0u2ul-DWO8p3TlOEpW2RVyvDjsvig9tbXbSMC~qwcZN2sBxI8pBu~gly8ppAWqnCTLuBZfWhm3rpOC3bmliA4BQ2Z41jT-XgEc3Q__',
                      }}
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: -10,
                        right: 0,
                        bottom: 0,
                        width: 155,
                        height: 70,
                      }}
                    />
                    <TouchableOpacity
                      onPress={openAccept}
                      activeOpacity={0.8}
                      style={{
                        backgroundColor: colors.white,
                        borderRadius: 500,
                        shadowColor: colors.borderColor,
                        shadowOffset: {width: 2, height: 4},
                        shadowOpacity: 0.9,
                        overflow: 'hidden',
                        marginTop: 10,
                      }}>
                      <Text marginHorizontal={8} marginVertical={4} size={8}>
                        Potential Est. $:{' '}
                        <Text size={14}>
                          +${Number(getVariable) + Number(getCommission)}
                        </Text>
                      </Text>
                      <View
                        style={{
                          backgroundColor: colors.blue3,
                          paddingVertical: 5,
                        }}>
                        <Text
                          size={12}
                          fontWeight={'600'}
                          color={colors.white}
                          center={true}>
                          Accept
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                ) : (
                  <View
                    style={{
                      backgroundColor: colors.borderColor,
                      borderRadius: 20,
                      paddingHorizontal: 10,
                      paddingVertical: 3,
                      marginTop: 5,
                    }}>
                    <Text color={colors.pink3} fontWeight={'600'}>
                      $
                      {String(targetAvchieve)?.replace(
                        /\B(?=(\d{3})+(?!\d))/g,
                        ',',
                      ) || 0}{' '}
                      <Text fontWeight={'400'}>to {state.percentage}%</Text>
                    </Text>
                  </View>
                )}
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
      <ModalBase
        animationIn={'slideInDown'}
        animationOut={'slideOutUp'}
        isVisibleModal={isOpenAccept}>
        <View style={styles.containerModal2}>
          <View
            style={[
              {
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingHorizontal: 5,
                marginBottom: 10,
              },
            ]}>
            <ButtonIcon icon={images.ic_x} onPress={closeAccept} />
            <Image source={images.ic_dolar2} />
            <Image source={images.ic_x} style={{opacity: 0}} />
          </View>
          <View style={{paddingHorizontal: 20}}>
            <Text size={18} fontWeight={'700'} marginBottom={20}>
              How would you feel about the following additional rewards?
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View style={{width: 1}} />
              <Text style={{width: '35%'}}>
                Potential Est. $ at {getPercent + 3}%
              </Text>
            </View>
            <View style={styles.container3}>
              <Text size={15}>Variable</Text>
              <View style={styles.container4}>
                <Text color={colors.orange} fontWeight={'700'} size={15}>
                  {getVariable}
                </Text>
              </View>
            </View>
            <View style={styles.container3}>
              <Text size={15}>Commission</Text>
              <View style={styles.container4}>
                <Text color={colors.orange} fontWeight={'700'} size={15}>
                  {getCommission}
                </Text>
              </View>
            </View>
            <View style={styles.container3}>
              <Text size={15}>New Total</Text>
              <View style={styles.container4}>
                <Text color={colors.orange} fontWeight={'700'} size={15}>
                  {Number(getVariable) + Number(getCommission)}
                </Text>
              </View>
            </View>
          </View>
          <ButtonBorder
            borderColor={colors.blue3}
            height={42}
            color={colors.blue3}
            textProps={{fontWeight: '700'}}
            style={[{marginTop: 30, marginHorizontal: 40}]}
            title={`Accept new goal of ${getPercent + 3}%`}
            onPress={onUpdateTarget}
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
  container3: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: colors.borderColor,
    borderBottomWidth: 1,
    paddingBottom: 10,
    paddingTop: 10,
  },
  container4: {
    backgroundColor: colors.gray2,
    paddingHorizontal: 20,
    borderRadius: 100,
    paddingVertical: 5,
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
  containerModal2: {
    backgroundColor: colors.white,
    paddingBottom: 20,
    paddingTop: 10,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    alignSelf: 'center',
  },
});
