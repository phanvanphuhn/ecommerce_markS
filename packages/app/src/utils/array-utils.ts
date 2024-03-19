import _ from 'lodash';

export const formatData = (list: any[], page: number) => (data: any[]) => {
  if (list.length == 0) {
    if (page == 1) {
      return [];
    } else {
      return data;
    }
  } else {
    if (page == 1) {
      return list;
    } else {
      return [...data, ...list];
    }
  }
};

export const removeDuplicate = (arr: any[], keys: string[]) => {
  return arr.filter(
    (v, i, a) => a.findIndex(v2 => keys.every(k => v2[k] === v[k])) === i,
  );
};
