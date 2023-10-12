import React, {
  ForwardedRef,
  forwardRef,
  useCallback,
  useContext,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
} from 'react';
import {ListRenderItem, StyleSheet, TouchableOpacity, View} from 'react-native';
import {toMarkingFormat} from 'lib/react-native-calendars/src/interface';
import XDate from 'xdate';
import {
  formatNumbers,
  page,
  sameMonth,
} from 'lib/react-native-calendars/src/dateutils';
import Theme from 'res/style/Theme';
import {width} from 'res/sizes';
import Text from 'elements/Text';
import useStateCustom from 'hooks/useStateCustom';
import Context from 'lib/react-native-calendars/src/expandableCalendar/Context';
import {UpdateSources} from 'lib/react-native-calendars/src/expandableCalendar/commons';
import {NativeSyntheticEvent} from 'react-native/Libraries/Types/CoreEventTypes';
import {NativeScrollEvent} from 'react-native/Libraries/Components/ScrollView/ScrollView';
import colors from 'res/colors';
import Animated from 'react-native-reanimated';
import useDidUpdate from 'hooks/useDidUpdate';
import ListSchedule from 'screens/plan/components/ListSchedule';

interface Props {
  onChange: (date: string) => void;
}

interface IState {
  offset?: {x: number; y: number};
  currentDate?: string;
  currentIndex?: number;
  listData?: {
    [key: string]: {name: string}[];
  };
}

const PAST_SCROLL_RANGE = 6;
const FUTURE_SCROLL_RANGE = 6;
export interface CalendarListRef {
  onScrollItem: (date: string) => void;
}
const CalendarListScreen = (
  props: Props,
  ref: ForwardedRef<CalendarListRef>,
) => {
  const {date, setDate, updateSource} = useContext(Context);
  const [state, setState] = useStateCustom<IState>({
    offset: {x: 0, y: 0},
    currentDate: date,
    currentIndex: 0,
    listData: {},
  });

  useEffect(() => {
    let toDay = new XDate();
    let array = [{name: 'DigiX Dig'}];
    let array2 = [{name: 'DigiX Dig'}, {name: 'DigiX'}];
    let obj = {
      [toMarkingFormat(toDay)]: array,
      [toMarkingFormat(toDay.clone().addDays(1))]: array2,
      [toMarkingFormat(toDay.clone().addDays(-8))]: array2,
      [toMarkingFormat(toDay.clone().addMonths(-1))]: array2,
    };
    setState({listData: obj});
  }, []);

  const initialDate = useRef(new XDate());
  const flatlistRef = useRef<Animated.FlatList<XDate>>();

  const items = useMemo(() => {
    const months: any[] = [];
    for (let i = 0; i < PAST_SCROLL_RANGE + FUTURE_SCROLL_RANGE; i++) {
      const rangeDate = initialDate.current?.clone().setMonth(i, true);
      months.push(rangeDate);
    }
    return months;
  }, []);

  const onScrollEndDrag = useCallback(
    (e: NativeSyntheticEvent<NativeScrollEvent>) => {
      const {contentOffset} = e.nativeEvent;
      let index = Math.round(contentOffset.x / width);
      if (index != state.currentIndex) {
        let date = items[index];
        setDate(toMarkingFormat(date), UpdateSources.LIST_DRAG);
        setState({currentIndex: index});
      }
    },
    [items, setDate, setState, state.currentIndex],
  );

  useEffect(() => {
    let newDate = state.currentDate
      ? new XDate(state.currentDate)
      : new XDate();
    let index = items.findIndex(e => sameMonth(e, newDate));
    setState({offset: {x: width * (index || 0), y: 0}});
  }, [state.currentDate, items, setState]);

  useDidUpdate(() => {
    if (updateSource == UpdateSources.TODAY_PRESS) {
      let newDate = date ? new XDate(date) : new XDate();
      let index = items.findIndex(e => sameMonth(e, newDate));
      if (index != -1) {
        scrollToIndex(index, true);
      }
    }
  }, [updateSource]);
  const onScrollItem = (date: string) => {
    let newDate = date ? new XDate(date) : new XDate();
    let index = items.findIndex(e => sameMonth(e, newDate));
    if (index != -1) {
      scrollToIndex(index, true);
    }
  };

  const scrollToIndex = (index: number, animated: boolean = true) => {
    if (flatlistRef.current) {
      flatlistRef.current?.scrollToIndex({index, animated});
    }
  };

  const keyExtractor = (item: any, index: number) => index.toString();

  useImperativeHandle(ref, () => ({
    onScrollItem,
  }));

  const renderDay = useCallback(
    (day: XDate, currentMonth: XDate, id: number) => {
      let currentDate = new XDate(date);
      const isMonth = sameMonth(day, currentDate);
      if (
        (currentMonth.getMonth() == 0 && day.getMonth() == 11) ||
        (day.getMonth() == 0 && currentMonth.getMonth() == 11)
      ) {
        return (
          <View
            key={id}
            style={[
              styles.containerDay,
              {
                backgroundColor: isMonth ? colors.white : colors.gray2,
              },
            ]}
          />
        );
      }
      return (
        <TouchableOpacity
          style={[
            styles.containerDay,
            {
              backgroundColor: isMonth ? colors.white : colors.gray2,
            },
          ]}
          key={id}>
          <View>
            {day.getDate() == 1 ? (
              <Text fontWeight={'700'}>
                {formatNumbers(day?.toString('d MMM'))}
              </Text>
            ) : (
              <Text>{formatNumbers(day?.toString('d'))}</Text>
            )}
          </View>
          {state.listData?.[toMarkingFormat(day)] && (
            <ListSchedule data={state.listData?.[toMarkingFormat(day)]} />
          )}
        </TouchableOpacity>
      );
    },
    [date, state.listData],
  );

  const renderWeek = useCallback(
    (days: XDate[], currentMonth: XDate, id: number) => {
      const week: JSX.Element[] = [];

      days.forEach((day: XDate, id2: number) => {
        week.push(renderDay(day, currentMonth, id2));
      }, this);
      return (
        <View style={[Theme.flexRowSpaceAround, Theme.flex1]} key={id}>
          {week}
        </View>
      );
    },
    [renderDay],
  );
  const renderMonth = useCallback(
    (currentMonth: XDate) => {
      let days = page(currentMonth, 1);
      // let days2 = page(currentMonth.clone().addMonths(1), 1);
      // let days = getDayInMonth(currentMonth, 1);

      // days = days.filter(
      //   day => days2.findIndex(day2 => sameDate(day, day2)) == -1,
      // );
      const weeks: JSX.Element[] = [];
      while (days.length) {
        weeks.push(renderWeek(days.splice(0, 7), currentMonth, weeks.length));
      }

      return <View style={{flex: 1, justifyContent: 'center'}}>{weeks}</View>;
    },
    [renderWeek],
  );
  const renderItem: ListRenderItem<XDate> = useCallback(
    ({item}) => {
      return (
        <View
          style={{
            flex: 1,
            width: width,
          }}>
          {renderMonth(item)}
        </View>
      );
    },
    [renderMonth],
  );

  return (
    <View
      style={{
        flex: 1,
      }}>
      <Animated.FlatList
        data={items}
        // @ts-ignore
        ref={flatlistRef}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        contentOffset={state.offset}
        horizontal={true}
        pagingEnabled={true}
        showsVerticalScrollIndicator={false}
        getItemLayout={(_, index) => ({
          length: width,
          offset: width * index,
          index,
        })}
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={onScrollEndDrag}
        scrollEventThrottle={16}
      />
    </View>
  );
};

export default forwardRef<CalendarListRef, Props>(CalendarListScreen);

const styles = StyleSheet.create({
  containerDay: {
    alignItems: 'center',
    height: '100%',
    paddingTop: 10,
    width: width / 7,
  },
  month: {
    marginLeft: 5,
  },
  year: {
    marginRight: 5,
  },
});
