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
import useModal from 'hooks/useModal';
import ModalBase from 'components/ModalBase';
import Text from 'elements/Text';
import {height} from 'res/sizes';
import ButtonBorder from 'elements/Buttons/ButtonBorder';

interface SalesScreenProps {}
export type TabDateType = 'Month' | 'Quarter' | 'Year';
export interface IStateSales {
  type?: TabDateType;
  percentage?: number;
  percentage2?: number;
  currentDate?: string;
  data?: SalesOutput;
  listCommission?: SliderAndCommisionsResponse[];
  loading?: boolean;
}

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
const SalesScreen = (props: SalesScreenProps) => {
  const [state, setState] = useStateCustom<IStateSales>({
    percentage: 100,
    percentage2: 100,
    type: 'Month',
    currentDate: moment().format('YYYY-MM-DD'),
    listCommission: [],
    data: {},
  });

  const [isOpen, open, close] = useModal();
  const [isBiometric, setIsBiometric] = useState(true);

  const [getSlider] = useLazyQuery(getSliderAndCommisions);
  const [getSalesData, {loading}] = useLazyQuery(getSales);
  const [updateTargetQuarter] = useMutation(upsertMobileSalesQuarter);
  const [updateTargetYear] = useMutation(upsertMobileSalesYear);
  useEffect(() => {
    showLoading();

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
                    ? parseFloat(item[key].replaceAll(',', '').replace('%', ''))
                    : /[0-9]+/.test(item[key]) && typeof item[key] === 'number'
                    ? parseFloat(item[key])
                    : item[key];
              });
              return item;
            })
            .find(e => !!e),
        });
      },
    });
    getSlider({
      onCompleted: data => {
        setState({
          listCommission: data?.data?.map((item: any) => {
            Object.keys(item).forEach(function (key) {
              item[key] =
                /[0-9]+/.test(item[key]) && typeof item[key] === 'string'
                  ? parseFloat(item[key].replaceAll(',', '').replace('%', ''))
                  : /[0-9]+/.test(item[key]) && typeof item[key] === 'number'
                  ? parseFloat(item[key])
                  : item[key];
            });
            return item;
          }),
        });
      },
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
                    open();
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
                {dataGuidelines?.map((e, i) => {
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
    </ContainerProvider>
  );
};

export default SalesScreen;

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
