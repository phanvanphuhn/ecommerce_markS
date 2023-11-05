import React, {memo, useCallback, useMemo, useState} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
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

interface PriceYearProps {}

const PriceYear = (props: PriceYearProps) => {
  const {state, setState} = useContainerContext<IStateSales>();
  const [isBiometric, setIsBiometric] = useState(true);
  console.log('=>(PriceYear.tsx:18) state', state);
  const renderDate = useMemo(() => {
    let date = state.currentDate ? moment(state.currentDate) : moment();
    switch (state.type) {
      case 'quarter':
        return `Q${Math.ceil((date.month() + 1) / 3)}`;
      case 'year':
        return date.year();
      case 'month':
        return date.format('MMM YYYY');
    }
  }, [state.currentDate, state.type]);
  const getCommissionPercent = useMemo(() => {
    let obj = SliderData.find(
      e =>
        e.Lower_bound_sales_achievement_percentage <= (state.percentage || 0) &&
        e.Upper_bound_sales_achievement_percentage > (state.percentage || 0),
    );
    return obj?.Commission_percentage || 0;
  }, [state.percentage]);
  const getVariablePercent = useMemo(() => {
    let obj = SliderData.find(
      e =>
        e.Lower_bound_sales_achievement_percentage <= (state.percentage || 0) &&
        e.Upper_bound_sales_achievement_percentage > (state.percentage || 0),
    );
    return obj?.Variable_payout_percentage || 0;
  }, [state.percentage]);
  const getVariable = useMemo(() => {
    const {data} = state;
    console.log('=>(PriceYear.tsx:31) data', data);
    switch (state.type) {
      case 'quarter':
        let price = data?.Variable_pay_by_quarter * (getVariablePercent / 100);
        console.log(
          '=>(PriceYear.tsx:36) getVariablePercent',
          getVariablePercent,
        );
        return (price < 0 ? 0 : price).toFixed();
      case 'year':
        return 0;
      case 'month':
        return 0;
      default:
        return 0;
    }
  }, [state.type, state.data, getVariablePercent]);
  const getKicker = useMemo(() => {
    const {data} = state;
    console.log('=>(PriceYear.tsx:31) data', data);
    switch (state.type) {
      case 'quarter':
        return 804;
      case 'year':
        return 0;
      case 'month':
        return 0;
      default:
        return 0;
    }
  }, [state.type, state.data]);
  const getEarlyBird = useMemo(() => {
    const {data} = state;
    console.log('=>(PriceYear.tsx:31) data', data);
    switch (state.type) {
      case 'quarter':
        return 200;
      case 'year':
        return 0;
      case 'month':
        return 0;
      default:
        return 0;
    }
  }, [state.type, state.data]);

  const getCommissionSale = useMemo(() => {
    const {data} = state;
    switch (state.type) {
      case 'quarter':
        let price = data?.Target_by_quarter * 1.05 - data?.Sales_by_quarter;
        console.log('=>(PriceYear.tsx:612) price', price);
        return price;
      case 'year':
        return 0;
      case 'month':
        return 0;
      default:
        return 0;
    }
  }, [state.type, state.data, getCommissionPercent]);
  const getCommission = useMemo(() => {
    const {data} = state;
    switch (state.type) {
      case 'quarter':
        let price = getCommissionSale * (getCommissionPercent / 100);
        console.log(
          '=>(PriceYear.tsx:52) getCommissionPercent',
          getCommissionPercent,
        );
        console.log('=>(PriceYear.tsx:61) price', price);
        return (price < 0 ? 0 : price).toFixed();
      case 'year':
        return 0;
      case 'month':
        return 0;
      default:
        return 0;
    }
  }, [state.type, state.data, getCommissionSale, getCommissionPercent]);

  if (isBiometric) {
    return (
      <Biometric key={state.type} onSuccess={() => setIsBiometric(false)} />
    );
  }
  return (
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
          <Text style={{width: '30%'}} marginRight={6}>
            Current Est.$
          </Text>
          <Text style={{width: '30%'}} marginRight={6}>
            Potential Est.$
          </Text>
        </View>
        <ItemCollapsible
          icon={images.ic_dolar}
          title={'Rewards'}
          potentialValue={Number(getVariable) + Number(getCommission)}
          currentValue={2000}>
          <View style={{}}>
            <ItemPrice
              title={'Variable'}
              currentValue={1000}
              potentialValue={Number(getVariable)}
            />
            <ItemPrice
              title={'Commission'}
              currentValue={1000}
              potentialValue={Number(getCommission)}
            />
          </View>
        </ItemCollapsible>
        <ItemCollapsible
          icon={images.ic_booster}
          title={'Sales Booster'}
          currentValue={1000}
          potentialValue={getKicker + getEarlyBird}>
          <View style={{}}>
            <ItemPrice
              title={'Kicker'}
              currentValue={1000}
              potentialValue={getKicker}
            />
            <ItemPrice
              title={'Early Bird'}
              currentValue={0}
              potentialValue={getEarlyBird}
            />
          </View>
        </ItemCollapsible>
        <ItemCollapsible
          icon={images.ic_dolar}
          title={'Additional Payout'}
          currentValue={2000}>
          <View style={{}}>
            <ItemPrice
              title={'Capital Equipment'}
              currentValue={1000}
              potentialValue={0}
            />
            <ItemPrice
              title={'Service Contract'}
              currentValue={0}
              potentialValue={0}
            />
          </View>
        </ItemCollapsible>
        <ItemCollapsible
          icon={images.ic_total}
          title={'Total'}
          currentValue={2000}
          potentialValue={
            Number(getVariable) +
            Number(getCommission) +
            getKicker +
            getEarlyBird
          }
        />
      </View>
    </ScrollView>
  );
};

export default memo(PriceYear);

const styles = StyleSheet.create({
  container: {},
});
