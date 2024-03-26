import React, {useEffect, useState} from 'react';
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
import {useLazyQuery, useMutation} from '@apollo/client';
import {getMobileSales} from 'apollo/query/getMobileSales';
import {
  getSliderAndCommisions,
  SliderAndCommisionsResponse,
} from 'apollo/query/getSliderAndCommisions';
import {getSales, SalesOutput} from 'apollo/query/getSales';
import {upsertMobileSalesQuarter} from 'apollo/query/upsertMobileSalesQuarter';
import {upsertMobileSalesYear} from 'apollo/query/upsertMobileSalesYear';
import {hideLoading, showLoading} from 'components/Loading/LoadingComponent';
import Biometric from 'screens/sales/components/Biometric';

interface SalesScreenProps {}
export type TabDateType = 'Month' | 'Quarter' | 'Year';
export interface IStateSales {
  type?: TabDateType;
  percentage?: number;
  currentDate?: string;
  data?: SalesOutput;
  listCommission?: SliderAndCommisionsResponse[];
}

const SalesScreen = (props: SalesScreenProps) => {
  const [state, setState] = useStateCustom<IStateSales>({
    percentage: 100,
    type: 'Month',
    currentDate: moment().format('YYYY-MM-DD'),
    listCommission: [],
    data: {},
  });
  const [isBiometric, setIsBiometric] = useState(true);

  const [getData] = useLazyQuery(getMobileSales);
  const [getSlider] = useLazyQuery(getSliderAndCommisions);
  const [getSalesData, {loading}] = useLazyQuery(getSales);
  const [updateTargetQuarter] = useMutation(upsertMobileSalesQuarter);
  const [updateTargetYear] = useMutation(upsertMobileSalesYear);
  useEffect(() => {
    showLoading();
    getData({
      variables: {
        type: 'quarter',
      },
    });
    let date = moment(state.currentDate);
    getSalesData({
      variables: {
        month:
          state.type != 'Month' ? undefined : (date.month() + 1).toString(),
        year: date.year().toString(),
        quarter: Math.ceil((date.month() + 1) / 3).toString(),
      },
      onCompleted: data => {
        hideLoading();
        setState({
          data: data?.data
            ?.map((item: any) => {
              Object.keys(item).forEach(function (key) {
                item[key] =
                  /[0-9]+/.test(item[key]) && typeof item[key] === 'string'
                    ? Math.round(
                        parseFloat(
                          item[key].replaceAll(',', '').replace('%', ''),
                        ),
                      )
                    : /[0-9]+/.test(item[key]) && typeof item[key] === 'number'
                    ? Math.round(parseFloat(item[key]))
                    : item[key];
              });
              return item;
            })
            .find(e => !!e),
        });
      },
    });
    getSlider({
      onCompleted: data =>
        setState({
          listCommission: data?.data?.map((item: any) => {
            Object.keys(item).forEach(function (key) {
              item[key] = /[\d]+/.test(item[key])
                ? parseFloat(item[key].replace('%', ''))
                : item[key];
            });
            return item;
          }),
        }),
    });
  }, [state.currentDate, state.type]);
  useEffect(() => {
    let timeout = setTimeout(() => {
      let date = moment(state.currentDate);
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
            updateTargetQuarter({
              variables: {
                quarter: Math.ceil((date.month() + 1) / 3).toString(),
                year: date.year().toString(),
                targetByQuarter: parseInt(
                  state?.data?.targetByQuarter * (state.percentage / 100),
                ).toString(),
              },
            });
          }
          break;
      }
    }, 500);
    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [state.type, state?.data?.targetByQuarter, state.percentage]);
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
              isFocused={state.type == 'Month'}
              onPress={() => {
                setState({type: 'Month'});
              }}
            />
            <ItemTab
              title={'QUARTER'}
              isFocused={state.type == 'Quarter'}
              onPress={() => {
                setState({type: 'Quarter'});
              }}
            />
            <ItemTab
              title={'YEAR'}
              isFocused={state.type == 'Year'}
              onPress={() => {
                setState({type: 'Year'});
              }}
            />
          </View>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <ContainerProgress />
          {(state.type == 'Year' || state.type == 'Quarter') && (
            <>
              {isBiometric ? (
                <Biometric
                  key={state.type}
                  onSuccess={() => {
                    setIsBiometric(false);
                  }}
                />
              ) : (
                <PriceYear key={state.type} />
              )}
            </>
          )}
          {state.type == 'Month' && <PriceMonth />}
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
