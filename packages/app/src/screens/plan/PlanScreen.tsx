import ButtonIcon from 'elements/Buttons/ButtonIcon';
import Container from 'elements/Layout/Container';
import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {
  ActivityIndicator,
  LayoutChangeEvent,
  StyleSheet,
  View,
} from 'react-native';
import colors from 'res/colors';
import images from 'res/images';
import strings from 'res/strings';
import Theme from 'res/style/Theme';
import ExpandableCalendarScreen from 'screens/plan/components/ExpandableCalendarScreen';
import {useNavigation} from '@react-navigation/native';
import {BaseUseNavigationProps} from 'navigation/BaseNavigationProps';
import {MainParamList} from 'navigation/service/NavigationParams';
import FloatButton from 'components/Button/FloatButton';
import {CalendarProvider} from 'lib/react-native-calendars';
import {getDate} from 'screens/plan/components/timelineEvents';
import Text from 'elements/Text';
import {getDateOfType} from 'utils/other-utils';
import XDate from 'xdate';
import {
  formatNumbers,
  weekDayNames,
} from 'lib/react-native-calendars/src/dateutils';
import Image from 'elements/Image';
import {toMarkingFormat} from 'lib/react-native-calendars/src/interface';
import useStateCustom from 'hooks/useStateCustom';
import SelectOptionMonth from 'screens/plan/components/SelectOptionMonth';
import CalendarMonth, {
  CalendarListRef,
} from 'screens/plan/components/CalendarMonth';
import {TypeDate} from 'res/type/calendar';
import {Routes} from 'configs';
import {useLazyQuery} from '@apollo/client';
import {GET_PLAN_CALLS} from 'apollo/query/getPlanCalls';
import moment from 'moment/moment';
import {PlanCallOutput} from 'apollo/query/upsertPlanCall';
import useDidUpdate from 'hooks/useDidUpdate';
import useIsMounted from 'hooks/useIsMounted';
import {useSelector} from 'hooks/useSelector';

interface PlanScreenProps {}
interface IState {
  currentDate?: string;
  height?: number;
  typeDate?: TypeDate;
  isShowDateOption?: boolean;
  isShowCreateCaseLog?: boolean;
  data?: PlanCallOutput[];
}

const PlanScreen = (props: PlanScreenProps) => {
  const [state, setState] = useStateCustom<IState>({
    currentDate: getDate(),
    height: 0,
    typeDate: 'Day',
    isShowDateOption: false,
    isShowCreateCaseLog: false,
    data: [],
  });
  const CalendarRef = useRef<CalendarListRef>();
  const userProfile = useSelector(state => state.userProfile.user);
  const navigation = useNavigation<BaseUseNavigationProps<MainParamList>>();
  const [getData, {loading}] = useLazyQuery(GET_PLAN_CALLS, {
    onCompleted: data => {
      setState({
        data: data?.data?.map(e => ({
          ...e,
          start: moment(new Date(Number(e.startDate))).format(
            'YYYY-MM-DD HH:mm:ss',
          ),
          end: moment(new Date(Number(e.endDate))).format(
            'YYYY-MM-DD HH:mm:ss',
          ),
          startDate: moment(new Date(Number(e.startDate))).format(
            'YYYY-MM-DD HH:mm:ss',
          ),
          endDate: moment(new Date(Number(e.endDate))).format(
            'YYYY-MM-DD HH:mm:ss',
          ),
        })),
      });
    },
  });
  useEffect(() => {
    getData({});
  }, []);
  const onCancel = () => {};

  const onSave = () => {};

  const onClose = () => {};
  const onDateChanged = (date: string) => {
    console.log('=>(ExpandableCalendarScreen.tsx:95) date111', date);
    setState({currentDate: date});
  };

  const renderWeekDays = useMemo(() => {
    const weekDaysNames = weekDayNames(1);
    const dayNames = weekDaysNames;

    return dayNames.map((day: string, index: number) => {
      return (
        <Text key={index} color={colors.white} numberOfLines={1}>
          {day}
        </Text>
      );
    });
  }, []);
  const onMonthChange = useCallback(
    (isNext: boolean) => {
      let date = state?.currentDate
        ? new XDate(state?.currentDate)
        : new XDate();
      date.addMonths(isNext ? 1 : -1);
      setState({currentDate: toMarkingFormat(date)});
      CalendarRef.current?.onScrollItem &&
        CalendarRef.current?.onScrollItem(toMarkingFormat(date));
    },
    [state.currentDate],
  );
  const onDayChange = useCallback(
    (isNext: boolean) => {
      let date = state?.currentDate
        ? new XDate(state?.currentDate)
        : new XDate();
      let dayOfTheWeek = date.getDay();
      const firstDayOfWeek = (isNext ? 7 : -7) - dayOfTheWeek + 1;
      date.addDays(firstDayOfWeek);
      setState({currentDate: toMarkingFormat(date)});
    },
    [state.currentDate],
  );

  const onSetDate = useCallback(
    (isNext: boolean) => {
      switch (state.typeDate) {
        case 'Day':
          onDayChange(isNext);
          break;
        case 'Month':
          onMonthChange(isNext);
          break;
      }
    },
    [onDayChange, onMonthChange, state.typeDate],
  );
  const renderIconDate = useCallback(() => {
    switch (state.typeDate) {
      case 'Day':
        return images.ic_day;
      case 'Month':
        return images.ic_month;
      default:
        return images.ic_month;
    }
  }, [state.typeDate]);
  const onLayout = (event: LayoutChangeEvent) => {
    setState({height: event.nativeEvent.layout.height});
  };
  const isMounted = useIsMounted();
  if (loading || !isMounted) {
    return (
      <View
        style={{
          backgroundColor: colors.white,
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <ActivityIndicator size={'large'} color={colors.primary} />
      </View>
    );
  }
  return (
    <Container
      title={strings.planScreen.myEvent}
      hideHeader={state.isShowCreateCaseLog}
      buttonRight={
        <View style={Theme.flexRow}>
          <ButtonIcon
            icon={renderIconDate()}
            onPress={() => {
              setState({isShowDateOption: !state.isShowDateOption});
            }}
            iconStyle={{tintColor: colors.white}}
          />
          <ButtonIcon
            icon={images.ic_search}
            tintColor={colors.white}
            onPress={() => navigation.navigate(Routes.SearchPlanScreen)}
            marginLeft={15}
          />
        </View>
      }
      style={styles.container}>
      {/*<CalendarListScreen />*/}
      <CalendarProvider
        date={state?.currentDate || ''}
        onDateChanged={onDateChanged}
        showTodayButton
        disabledOpacity={0.6}
        // numberOfDays={3}
      >
        <View onLayout={onLayout}>
          <View style={styles.containerHeader}>
            <View
              style={[
                Theme.flexRow,
                {
                  alignSelf: 'center',
                },
              ]}>
              <ButtonIcon
                icon={images.ic_back}
                onPress={() => onSetDate(false)}
              />
              <View style={styles.containerTextHeader}>
                <Text fontWeight={'700'} color={colors.primary}>
                  {getDateOfType(
                    state?.typeDate || 'Day',
                    state?.currentDate || '',
                  )}
                </Text>
              </View>
              <ButtonIcon
                icon={images.ic_back}
                iconStyle={{transform: [{rotate: '180deg'}]}}
                onPress={() => onSetDate(true)}
              />
            </View>

            <View style={styles.containerDayOfWeek}>{renderWeekDays}</View>
          </View>
        </View>
        {state.typeDate == 'Day' && (
          <ExpandableCalendarScreen data={state?.data} />
        )}
        {state.typeDate == 'Month' && (
          <CalendarMonth ref={CalendarRef} data={state?.data} />
        )}
        {!!state.isShowDateOption && (
          <SelectOptionMonth
            height={state.height}
            value={state?.typeDate || ''}
            onClose={() => setState({isShowDateOption: false})}
            onSelected={(typeDate: TypeDate) => {
              setState({typeDate});
            }}
          />
        )}
      </CalendarProvider>
      <View
        style={{
          position: 'absolute',
          backgroundColor: state.isShowCreateCaseLog
            ? colors.white
            : colors.transparent,
          zIndex: 999,
          bottom: 0,
          right: 0,
          top: state.isShowCreateCaseLog ? 0 : undefined,
          left: state.isShowCreateCaseLog ? 0 : undefined,
        }}>
        <FloatButton isOpen={state.isShowCreateCaseLog} setState={setState} />
      </View>
    </Container>
  );
};

export default PlanScreen;

const styles = StyleSheet.create({
  container: {flex: 1},
  containerHeader: {
    width: '100%',
    backgroundColor: colors.primary,
    paddingTop: 5,
    paddingBottom: 10,
  },
  containerTextHeader: {
    backgroundColor: colors.white,
    paddingHorizontal: 30,
    paddingVertical: 7,
    borderRadius: 20,
  },
  containerDayOfWeek: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    // paddingHorizontal: 10,
    paddingTop: 10,
  },
});
