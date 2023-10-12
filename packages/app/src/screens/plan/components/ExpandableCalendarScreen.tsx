import groupBy from 'lodash/groupBy';

import React, {memo, useEffect, useReducer} from 'react';
import {View} from 'react-native';
import {
  CalendarProvider,
  CalendarUtils,
  ExpandableCalendar,
  LocaleConfig,
  TimelineEventProps,
} from 'lib/react-native-calendars';
import {getDate, timelineEvents} from 'screens/plan/components/timelineEvents';
import Text from 'elements/Text';
import colors from 'res/colors';
import XDate from 'xdate';
import {formatNumbers} from 'lib/react-native-calendars/src/dateutils';
import {ItemPlanResponse} from 'network/apis/plan/PlanResponse';
import TimeLinePlan from 'screens/plan/components/TimeLinePlan';

LocaleConfig.locales.en = {
  monthNames: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
  monthNamesShort: [
    'JAN',
    'FEB',
    'MAR',
    'APR',
    'MAY',
    'JUN',
    'JUL',
    'AUG',
    'SEP',
    'OCT',
    'NOV',
    'DEC',
  ],
  dayNames: [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ],
  dayNamesShort: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
};
LocaleConfig.defaultLocale = 'en';
const EVENTS: ItemPlanResponse[] = timelineEvents;
interface IState {
  currentDate: string;
  events: ItemPlanResponse[];
  eventsByDate?: {
    [key: string]: TimelineEventProps[];
  };
}
type TypeDate = 'day' | 'month' | '3-day';
const TimelineCalendarScreen = props => {
  const [state, setState] = useReducer(
    (preState: IState, newState: Partial<IState>) => ({
      ...preState,
      ...newState,
    }),
    {
      currentDate: getDate(),
      events: [],
      eventsByDate: undefined,
    },
    (preState: IState) => ({
      ...preState,
    }),
  );

  const getData = async () => {
    // let response = await PlanApi.getPlan();
    let events = groupBy(EVENTS, e =>
      CalendarUtils.getCalendarDateString(e.start),
    );
    setTimeout(() => {
      setState({
        eventsByDate: events,
      });
    }, 1000);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <ExpandableCalendar
        firstDay={1}
        // markedDates={marked}
        headerStyle={{
          backgroundColor: colors.primary,
          display: 'none',
        }}
      />
      <TimeLinePlan events={state.eventsByDate} />
    </>
  );
};
export default memo(TimelineCalendarScreen);
