import request from './request';

export default {
  path: {
    plan: {},
    contacts: {
      contactSearch:''
    },
    address: 'services/address/getDeliveredAddress',
  },
  ...request,
};
