import {TimelineEventProps} from 'react-native-calendars';

export interface ItemPlanResponse extends TimelineEventProps {
  id: string;
  status: number;
  title: string;
  desc: string;
  duration?: string;
}
