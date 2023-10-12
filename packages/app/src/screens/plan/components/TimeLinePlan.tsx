import React, {useMemo} from 'react';
import {StyleSheet} from 'react-native';
import {
  Timeline,
  TimelineEventProps,
  TimelineList,
  TimelineProps,
} from 'lib/react-native-calendars';
import StatusPlanForm from 'screens/plan/components/StatusPlanForm';

interface TimeLineListProps {
  events?: {
    [key: string]: TimelineEventProps[];
  };
}
const INITIAL_TIME = {hour: 9, minutes: 0};

const TimeLinePlan = (props: TimeLineListProps) => {
  const timelineProps: Partial<TimelineProps> = useMemo(
    () => ({
      format24h: true,
      // scrollToFirst: true,
      // start: 0,
      // end: 24,
      unavailableHours: [
        {start: 0, end: 6},
        {start: 22, end: 24},
      ],
      overlapEventsSpacing: 8,
      rightEdgeSpacing: 24,
    }),
    [],
  );
  if (!props.events) {
    return null;
  }
  return (
    <TimelineList
      events={props.events}
      timelineProps={timelineProps}
      showNowIndicator
      // scrollToNow
      scrollToFirst
      initialTime={INITIAL_TIME}
      renderItem={timelineProps => {
        return (
          <Timeline
            {...timelineProps}
            renderEvent={event => {
              return <StatusPlanForm item={event} />;
            }}
          />
        );
      }}
    />
  );
};

export default TimeLinePlan;

const styles = StyleSheet.create({
  container: {},
});
