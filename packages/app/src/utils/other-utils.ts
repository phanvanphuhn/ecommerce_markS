import {ItemPlanResponse} from 'network/apis/plan/PlanResponse';
import XDate from 'xdate';
import {formatNumbers} from 'lib/react-native-calendars/src/dateutils';
import {TypeDate} from 'res/type/calendar';
import {useCallback} from 'react';
import colors from 'res/colors';

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

export const backgroundBodyColor = (item: ItemPlanResponse) => {
  if (!item) {
    return;
  }
  const {status} = item;
  switch (status) {
    case 1:
      return '#FFFFFF';
    case 2:
      return '#E7F0FF';
    case 3:
      return '#FBFBFB';
    case 4:
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
    case 'submitted':
      return colors.primary;
    case 'not_submitted':
      return '#80C';
  }
};
export const renderStatusComplaint = (status: string) => {
  switch (status) {
    case 'submitted':
      return 'Submitted';
    case 'not_submitted':
      return 'Not submitted';
  }
};
