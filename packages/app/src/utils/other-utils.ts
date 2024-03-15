import {ItemPlanResponse} from 'network/apis/plan/PlanResponse';
import XDate from 'xdate';
import {formatNumbers} from 'lib/react-native-calendars/src/dateutils';
import {TypeDate} from 'res/type/calendar';
import {useCallback} from 'react';
import colors from 'res/colors';
import {ItemLeaderBoardResponse} from 'apollo/query/leaderboard';
import {TabDateType} from 'screens/leaderboard/LeaderboardScreen';
import {PlanCallOutput} from 'apollo/query/upsertPlanCall';
import moment from 'moment/moment';

export const checkPhoneNumberVietnamese = /^(\+?84|0|\(\+?84\))[1-9]\d{8,9}$/g;
const addDate = (endDate: string, endTime: string) => {
  var secondsToMinutes = endTime; //='3:20';

  var seconds = secondsToMinutes.split(':')[2];
  var minutes = secondsToMinutes.split(':')[1];
  var hours = secondsToMinutes.split(':')[0];

  var date = new Date(endDate);
  date.setHours(hours, minutes, seconds);
  return date;
};
export const getFileName = (key: string): string => {
  let fileName = `${key + new Date().getTime()}.jpg`;
  return fileName;
};

export function hasOnlyBrChildren(node: any) {
  return node.children.every(
    (child: any) => child.type === 'text' && child.data === 'Froala Editor',
  );
}

export function alterChildren(node: any) {
  return node.children.filter(
    (child: any) =>
      !(child.type == 'text' && child.data == 'Powered by ') &&
      !(child.name === 'a' && hasOnlyBrChildren(child)),
  );
}

export const htmltoText = (html: string) => {
  let text = html;
  text = text.replace(/\n/gi, '');
  text = text.replace(/<style([\s\S]*?)<\/style>/gi, '');
  text = text.replace(/<script([\s\S]*?)<\/script>/gi, '');
  text = text.replace(/<a.*?href="(.*?)[\?\"].*?>(.*?)<\/a.*?>/gi, ' $2 $1 ');
  text = text.replace(/<\/div>/gi, '\n\n');
  text = text.replace(/<\/li>/gi, '\n');
  text = text.replace(/<li.*?>/gi, '  *  ');
  text = text.replace(/<\/ul>/gi, '\n\n');
  text = text.replace(/<\/p>/gi, '\n\n');
  text = text.replace(/<br\s*[\/]?>/gi, '\n');
  text = text.replace(/<[^>]+>/gi, '');
  text = text.replace(/^\s*/gim, '');
  text = text.replace(/ ,/gi, ',');
  text = text.replace(/ +/gi, ' ');
  text = text.replace(/\n+/gi, '\n\n');
  return text;
};

export const backgroundBodyColor = (item: PlanCallOutput) => {
  if (!item) {
    return;
  }
  const {status} = item;
  switch (status) {
    case 'COMPLETED':
      return '#FFFFFF';
    case 'COMPLETED':
      return '#E7F0FF';
    case 'CANCELLED':
      return '#FBFBFB';
    case 'IN_PROGRESS':
      return '#DBFDFF';
    default:
      return '#DBFDFF';
  }
};

export const getDateOfType = (type: TypeDate, date: string) => {
  let currentDate = new XDate(date);
  let str;
  switch (type) {
    case 'Day':
      let dateStart = new XDate(date);
      let dayStart = dateStart.getDay();
      let dateEnd = new XDate(date);
      let dayEnd = dateEnd.getDay();
      var weekstart = dateStart.addDays(-(dayStart == 0 ? 7 : dayStart) + 1);
      var weekend = dateEnd.addDays(7 - (dayEnd == 0 ? 7 : dayEnd));
      str = `${formatNumbers(weekstart?.toString('d MMM'))} - ${formatNumbers(
        weekend?.toString('d MMM'),
      )}`;
      break;
    case 'Month':
      str = formatNumbers(currentDate?.toString('MMMM'));
      break;
    case '3-day':
      str = formatNumbers(currentDate?.toString('MMMM'));
      break;
  }
  return str;
};

export const renderColorComplaint = (status: string) => {
  switch (status) {
    case 'Submitted':
      return colors.primary;
    case 'Auto Submitted':
      return '#80C';
  }
};
export const renderStatusComplaint = (status: string) => {
  switch (status) {
    case 'Submitted':
      return 'Submitted';
    case 'Auto Submitted':
      return 'Auto Submitted';
  }
};

export const getRank = (item: ItemLeaderBoardResponse, type?: TabDateType) => {
  switch (type) {
    case 'Month':
      return item.rankMtd;
    case 'Quarter':
      return item.rankQtd;
    case 'Year':
      return item.rankYtd;
    default:
      return '';
  }
};
export const getTargetAchieved = (
  item: ItemLeaderBoardResponse,
  type?: TabDateType,
) => {
  switch (type) {
    case 'Month':
      return item.targetAchievedMtd;
    case 'Quarter':
      return item.targetAchievedQtd;
    case 'Year':
      return item.targetAchievedYtd;
    default:
      return '';
  }
};

export const roundDate = (props: any) => {
  const start = moment();
  const remainder = 15 - (start.minute() % 15);
  const dateTime = moment(start).add(remainder, 'minutes');
  if (props?.isPlus1) {
    const finalDateTime = dateTime.add(1, 'hours').toDate();
    return finalDateTime;
  } else {
    return dateTime?.toDate();
  }
};
export const pad = (num: number): string => {
  return ('0' + num).slice(-2);
};
