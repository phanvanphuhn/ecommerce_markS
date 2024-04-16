import React, {memo, useCallback, useEffect, useMemo, useState} from 'react';
import {View, StyleSheet, ScrollView, Image} from 'react-native';
import Theme from 'res/style/Theme';
import colors from 'res/colors';
import ItemCollapsible from 'screens/sales/components/ItemCollapsible';
import images from 'res/images';
import ItemPrice from 'screens/sales/components/ItemPrice';
import Text from 'elements/Text';
import {useContainerContext} from 'components/ContainerProvider';
import {IStateSales} from 'screens/sales/SalesScreen';
import moment from 'moment';
import {SliderData} from 'screens/sales/dataExample';
import Biometric from 'screens/sales/components/Biometric';
import {height} from 'res/sizes';
import ButtonBorder from 'elements/Buttons/ButtonBorder';
import ModalBase from 'components/ModalBase';
import useModal from 'hooks/useModal';

interface PriceYearProps {}
const dataGuidelines = [
  'The information as follows are indicative. Please reach out to your financial partner for any details.',
  'Manual sales transfers are not reflected in JARVIS.',
  'Sales achievement percentages are downwards rounding, e.g., 99.99% is 99% in SIP books.',
  'SIP calculations are not applicable for contractors who are not eligible for SIP in JARVIS.',
  'Capital Equipment & Service Contract sales commissions are subjected to CGM Approvals before being reflected in JARVIS.',
  'Scrap Management program is currently not reflected in JARVIS.',
  'Changes due to maternity leaves and/or leave of absence of more than 18 days are not reflected in JARVIS.',
  'The maximum payout is 350% of your annual variable pay (revised to 250% in 2024).',
];
const PriceYear = (props: PriceYearProps) => {
  const {state, setState} = useContainerContext<IStateSales>();
  const [isOpen, open, close] = useModal();

  const renderDate = useMemo(() => {
    let date = state.currentDate ? moment(state.currentDate) : moment();
    switch (state.type) {
      case 'Quarter':
        return `Q${Math.ceil((date.month() + 1) / 3)}`;
      case 'Year':
        return date.year();
      case 'Month':
        return date.format('MMM YYYY');
    }
  }, [state.currentDate, state.type]);

  const getQuarterTargetAchieved = useMemo(() => {
    return state?.data?.[`salesAchievementPercentageBy${state.type}`] &&
      state?.data?.[`salesAchievementPercentageBy${state.type}`] >= 100
      ? 1
      : 0;
  }, [state?.data?.[`salesAchievementPercentageBy${state.type}`], state.type]);

  const getPreviousQuarterTargetAchieved = useMemo(() => {
    let date = state.currentDate ? moment(state.currentDate) : moment();
    let quarter = Math.ceil((date.month() + 1) / 3);
    if (quarter == 1) {
      return 0;
    } else {
      return quarter - 1;
    }
  }, [state.currentDate, getQuarterTargetAchieved]);

  const getTotalConsecQuarter = useMemo(() => {
    return getQuarterTargetAchieved + getPreviousQuarterTargetAchieved;
  }, [getPreviousQuarterTargetAchieved, getQuarterTargetAchieved]);

  const getTargetAchieved = useMemo(() => {
    return state?.data?.totalSales >= state.data?.[`targetBy${state.type}`]
      ? 1
      : 0;
  }, [state.data?.totalSales]);

  const getKicker = useMemo(() => {
    if (state.type != 'Quarter') {
      return 0;
    }
    switch (getTotalConsecQuarter) {
      case 2:
        return 600;
      case 3:
        return 800;
      case 4:
        return 1000;
      default:
        return 0;
    }
  }, [getTotalConsecQuarter, state.type]);

  const getCommissionPercent = useMemo(() => {
    let obj = state.listCommission?.find(
      e =>
        e.lowerBound <= (state.percentage || 0) &&
        e.upperBound > (state.percentage || 0) &&
        e.territoryCategory == state.data?.territoryCategory,
    );
    return obj?.commissionPercentage || 0;
  }, [state.percentage, state.listCommission]);

  const getVariablePercent = useMemo(() => {
    let obj = state.listCommission?.find(
      e =>
        e.lowerBound <= (state.percentage || 0) &&
        e.upperBound > (state.percentage || 0) &&
        e.territoryCategory == state.data?.territoryCategory,
    );
    return obj?.variablePayoutPercentage || 0;
  }, [state.percentage, state.listCommission]);

  const getVariable = useMemo(() => {
    const {data} = state;
    switch (state.type) {
      case 'Quarter':
        let price =
          data?.[`variablePayBy${state.type}`] * (getVariablePercent / 100);
        return (price < 0 ? 0 : price).toFixed(2);
      case 'Year':
        return 0;
      case 'Month':
        return 0;
      default:
        return 0;
    }
  }, [state.type, state.data, getVariablePercent]);

  const getEarlyBird = useMemo(() => {
    const {data} = state;
    let date = state.currentDate ? moment(state.currentDate) : moment();
    switch (state.type) {
      case 'Quarter':
        if (date.month() + 1 == 10 && getTargetAchieved == 1) {
          return 1500;
        } else if (date.month() + 1 == 11 && getTargetAchieved == 1) {
          return 750;
        }
      case 'Year':
        return 0;
      case 'Month':
        return 0;
      default:
        return 0;
    }
  }, [state.type, state.data, getTargetAchieved, state.currentDate]);

  const getCommissionSale = useMemo(() => {
    const {data} = state;
    switch (state.type) {
      case 'Quarter':
        let price =
          data?.[`targetBy${state.type}`] * (state.percentage / 100) -
          data?.[`targetBy${state.type}`] * 1.05;
        return price.toFixed(2);
      case 'Year':
        return 0;
      case 'Month':
        return 0;
      default:
        return 0;
    }
  }, [state.type, state.data, getCommissionPercent, state.percentage]);

  const getCommission = useMemo(() => {
    const {data} = state;
    switch (state.type) {
      case 'Quarter':
        let price = getCommissionSale * (getCommissionPercent / 100);
        return (price < 0 ? 0 : price).toFixed(2);
      case 'Year':
        return 0;
      case 'Month':
        return 0;
      default:
        return 0;
    }
  }, [state.type, state.data, getCommissionSale, getCommissionPercent]);

  const variable = useMemo(() => {
    if (state.data?.newHire == 0) {
      return (
        state?.data?.[`variablePayoutBy${state.type}`] +
        state?.data?.variablePayoutQ5
      );
    } else {
      return (
        state?.data?.[`variablePayoutBy${state.type}`] +
        state?.data?.variablePayoutQ5_forNewHire
      );
    }
  }, [state?.data]);
  const comission = useMemo(() => {
    if (state.data?.newHire == 0) {
      return (
        state?.data?.[`commissionPayoutBy${state.type}`] +
        state?.data?.commissionPayoutQ5
      );
    } else {
      return (
        state?.data?.[`commissionPayoutBy${state.type}`] +
        state?.data?.commissionPayoutQ5_forNewHire
      );
    }
  }, [state?.data]);
  useEffect(() => {
    setState({
      data: {
        ...state.data,
        totalSales:
          Number(getVariable) +
          Number(getCommission) +
          getKicker +
          getEarlyBird,
      },
    });
  }, [getVariable, getCommission, getKicker, getEarlyBird]);

  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            paddingHorizontal: 15,
            paddingTop: 20,
          }}>
          <View style={[Theme.flexRow]}>
            <View
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <View
                style={{
                  backgroundColor: colors.dotActive,
                  paddingHorizontal: 10,
                  paddingVertical: 2,
                  borderRadius: 20,
                }}>
                <Text size={13} color={colors.white}>
                  {renderDate}
                </Text>
              </View>
            </View>
            <Text size={13} style={{width: '30%', textAlign: 'right'}}>
              Current Est.$
            </Text>
            <Text
              size={13}
              style={{width: '28%', textAlign: 'right'}}
              marginRight={16}>
              Potential Est.$
            </Text>
          </View>
          <ItemCollapsible
            icon={images.ic_dolar}
            title={'Rewards'}
            potentialValue={Number(getVariable) + Number(getCommission)}
            currentValue={variable + comission}>
            <View style={{}}>
              <ItemPrice
                title={'Variable'}
                currentValue={variable}
                potentialValue={Number(getVariable)}
              />
              <ItemPrice
                title={'Commission'}
                currentValue={comission}
                potentialValue={Number(getCommission)}
              />
            </View>
          </ItemCollapsible>
          <ItemCollapsible
            icon={images.ic_booster}
            title={'Sales Booster'}
            currentValue={state?.data?.kicker + state?.data?.earlyBird}
            potentialValue={getKicker + getEarlyBird}>
            <View style={{}}>
              <ItemPrice
                title={'Kicker'}
                currentValue={state?.data?.kicker}
                potentialValue={Math.round(getKicker)}
              />
              <ItemPrice
                title={'Early Bird'}
                currentValue={state?.data?.earlyBird}
                potentialValue={Math.round(getEarlyBird)}
              />
            </View>
          </ItemCollapsible>
          <ItemCollapsible
            icon={images.ic_dolar}
            title={'Additional Payout'}
            currentValue={
              state?.data?.capitalEquipment + state?.data?.serviceContract
            }>
            <View style={{}}>
              <ItemPrice
                title={'Capital Equipment'}
                currentValue={state?.data?.capitalEquipment}
                potentialValue={0}
              />
              <ItemPrice
                title={'Service Contract'}
                currentValue={state?.data?.serviceContract}
                potentialValue={0}
              />
            </View>
          </ItemCollapsible>
          <ItemCollapsible
            icon={images.ic_total}
            title={'Total'}
            currentValue={
              state?.data?.capitalEquipment +
              state?.data?.serviceContract +
              state?.data?.kicker +
              state?.data?.earlyBird +
              variable +
              comission
            }
            potentialValue={Number(state?.data?.totalSales)}
          />
        </View>
      </ScrollView>
    </>
  );
};

export default memo(PriceYear);

const styles = StyleSheet.create({
  container: {},
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
