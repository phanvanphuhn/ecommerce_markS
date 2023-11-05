import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import Container from 'elements/Layout/Container';
import strings from 'res/strings';
import colors from 'res/colors';
import Theme from 'res/style/Theme';
import moment from 'moment';
import useStateCustom from 'hooks/useStateCustom';
import PriceYear from 'screens/sales/components/PriceYear';
import PriceMonth from 'screens/sales/components/PriceMonth';
import ContainerProgress from 'screens/sales/components/ContainerProgress';
import ItemTab from 'components/ItemTab';
import ContainerProvider from 'components/ContainerProvider';

interface SalesScreenProps {}
export type TabDateType = 'month' | 'quarter' | 'year';
export interface IStateSales {
  type?: TabDateType;
  percentage?: number;
  currentDate?: string;
  data: IDataVariable;
}

interface IDataVariable {
  New_hire: boolean;
  MixedBag_70: boolean;
  Variable_pay_by_year: number;
  Variable_pay_by_quarter: number;
  Variable_pay_by_month: number;
  Sales_by_year: number;
  Sales_by_quarter: number;
  Sales_by_month: number;
  Target_by_year: number;
  Target_by_quarter: number;
  Target_by_month: number;
  Sales_achievement_percentage_by_year: number;
  Sales_achievement_percentage_by_quarter: number;
  Sales_achievement_percentage_by_month: number;
  Variable_payout_percentage: number;
  Target_by_year_USD: number;
  Territory_category: number;
  Commission_percentage: number;
  Commisionable_sales_by_quarter: number;
  Variable_payout_by_quarter: number;
  Commission_payout_by_quarter: number;
  Capital_equipment_sales: number;
  Service_contract_sales: number;
  Kicker: number;
  Early_bird: number;
  YTD_total_sales: number;
}

const SalesScreen = (props: SalesScreenProps) => {
  const [state, setState] = useStateCustom<IStateSales>({
    percentage: 0,
    type: 'month',
    currentDate: moment('2023-06-01', 'YYYY-MM-DD').format('YYYY-MM-DD'),
    data: {
      New_hire: false,
      MixedBag_70: true,
      Variable_pay_by_year: 7750,
      Variable_pay_by_quarter: 1550,
      Variable_pay_by_month: 516.67,
      Sales_by_year: 103000,
      Sales_by_quarter: 51600,
      Sales_by_month: 8500,
      Target_by_year: 30500,
      Target_by_quarter: 51600,
      Target_by_month: 1500,
      Sales_achievement_percentage_by_year: 85,
      Sales_achievement_percentage_by_quarter: 85,
      Sales_achievement_percentage_by_month: 85,
      Variable_payout_percentage: 100,
      Target_by_year_USD: 0,
      Territory_category: 0,
      Commission_percentage: 0,
      Commisionable_sales_by_quarter: 0,
      Variable_payout_by_quarter: 0,
      Commission_payout_by_quarter: 0,
      Capital_equipment_sales: 0,
      Service_contract_sales: 0,
      Kicker: 0,
      Early_bird: 0,
      YTD_total_sales: 0,
    },
  });
  return (
    <ContainerProvider state={state} setState={setState}>
      <Container title={strings.sale.mySales} style={styles.container}>
        <View
          style={{
            backgroundColor: colors.white,
            marginBottom: 5,
          }}>
          <View style={styles.containerUnder} />
          <View style={[Theme.shadow, styles.containerTab]}>
            <ItemTab
              title={'MONTH'}
              isFocused={state.type == 'month'}
              onPress={() => {
                setState({type: 'month'});
              }}
            />
            <ItemTab
              title={'QUARTER'}
              isFocused={state.type == 'quarter'}
              onPress={() => {
                setState({type: 'quarter'});
              }}
            />
            <ItemTab
              title={'YEAR'}
              isFocused={state.type == 'year'}
              onPress={() => {
                setState({type: 'year'});
              }}
            />
          </View>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <ContainerProgress />
          {(state.type == 'year' || state.type == 'quarter') && (
            <PriceYear key={state.type} />
          )}
          {state.type == 'month' && <PriceMonth />}
        </ScrollView>
      </Container>
    </ContainerProvider>
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
