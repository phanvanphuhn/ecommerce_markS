import groupBy from 'lodash/groupBy';

import React, {memo, useContext, useEffect, useReducer, useState} from 'react';
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
import {PlanCallOutput} from 'apollo/query/upsertPlanCall';
import moment from 'moment';
import Context from 'lib/react-native-calendars/src/expandableCalendar/Context';

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
  markedDates: any;
}
interface TimelineCalendarScreenProps {
  data: PlanCallOutput[];
}
type TypeDate = 'day' | 'month' | '3-day';
const TimelineCalendarScreen = (props: TimelineCalendarScreenProps) => {
  const [state, setState] = useReducer(
    (preState: IState, newState: Partial<IState>) => ({
      ...preState,
      ...newState,
    }),
    {
      currentDate: getDate(),
      events: [],
      eventsByDate: {},
      markedDates: {},
    },
    (preState: IState) => ({
      ...preState,
    }),
  );
  const {date, setDate, updateSource} = useContext(Context);
  const getDateRange = (firstDate: string, lastDate: string) => {
    if (!firstDate || !lastDate) {
      return;
    }
    var now = moment(firstDate).clone(),
      dates = [];

    while (now.isSameOrBefore(moment(lastDate))) {
      dates.push(now.format('YYYY-MM-DD'));
      now.add(1, 'days');
    }
    return dates;
  };
  const getData = async () => {
    if (props?.data?.length) {
      let events = props?.data?.reduce((total, curr) => {
        let range = getDateRange(curr.startDate, curr.endDate);
        let obj = JSON.parse(JSON.stringify({...curr}));
        let start = obj.start;
        let end = obj.end;
        range?.forEach(e => {
          if (
            moment(e).isBetween(
              moment(obj.startDate),
              moment(obj.endDate),
              'd',
              '[]',
            ) &&
            !moment(obj.startDate).isSame(obj.endDate, 'd')
          ) {
            if (moment(e).isSame(moment(obj.startDate), 'd')) {
              let end1 = moment(e).clone();
              end1.set({hour: 23, minute: 59, second: 59});
              end = end1.format('YYYY-MM-DD HH:mm:ss');
              start = moment(obj.startDate)
                .clone()
                .format('YYYY-MM-DD HH:mm:ss');
            } else if (moment(e).isSame(moment(obj.endDate), 'd')) {
              let start1 = moment(e).clone();
              start1.set({hour: 0, minute: 0, second: 0});
              start = start1.format('YYYY-MM-DD HH:mm:ss');
              end = moment(obj.endDate).clone().format('YYYY-MM-DD HH:mm:ss');
            } else {
              let start1 = moment(e).clone();
              start1.set({hour: 0, minute: 0, second: 0});
              start = start1.format('YYYY-MM-DD HH:mm:ss');
              let end1 = moment(e).clone();
              end1.set({hour: 23, minute: 59, second: 59});
              end = end1.format('YYYY-MM-DD HH:mm:ss');
            }
          }
          if (total[e]?.length) {
            total[e].push({...obj, start, end});
          } else {
            total[e] = [{...obj, start, end}];
          }
        });
        return total;
      }, {});
      let newEvents = {};
      Object.keys(events).map(key => {
        let array = events[key];
        newEvents[key] = array.reduce((arr, curr) => {
          let event = arr.some(e =>
            moment(curr.startDate, 'YYYY-MM-DD HH:mm:ss').isBetween(
              moment(e.startDate, 'YYYY-MM-DD HH:mm:ss'),
              moment(e.endDate, 'YYYY-MM-DD HH:mm:ss'),
              'seconds',
              '[]',
            ),
          );
          if (!event) {
            arr.push(curr);
          }
          return arr;
        }, []);
      });
      console.log('=>(ExpandableCalendarScreen.tsx:163) newEvents', newEvents);
      setState({
        eventsByDate: newEvents,
      });
    }
  };
  useEffect(() => {
    getData();
  }, [props.data]);
  useEffect(() => {
    getDisabledDays(moment(date).month(), moment(date).year(), [6, 7]);
  }, [date]);
  const getDisabledDays = (month, year, daysIndexes) => {
    let pivot = moment().month(month).year(year).startOf('month');
    const end = moment().month(month).year(year).endOf('month');
    let dates = {};
    const disabled = {disabled: true, disableTouchEvent: false};
    while (pivot.isBefore(end)) {
      daysIndexes.forEach(day => {
        const copy = moment(pivot);
        dates[copy.day(day).format('YYYY-MM-DD')] = disabled;
      });
      pivot.add(7, 'days');
    }
    setState({markedDates: dates});
    return dates;
  };
  return (
    <>
      <ExpandableCalendar
        firstDay={1}
        // markedDates={marked}
        headerStyle={{
          backgroundColor: colors.primary,
          display: 'none',
        }}
        // disabledDaysIndexes={[6, 7]}
        markedDates={state.markedDates}
      />
      <TimeLinePlan events={state.eventsByDate} />
    </>
  );
};
export default memo(TimelineCalendarScreen);
